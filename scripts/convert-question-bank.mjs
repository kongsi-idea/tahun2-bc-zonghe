import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "question-bank.md");
const output = path.join(root, "src/data/question-bank.ts");

if (!fs.existsSync(source)) {
  console.error("缺少 question-bank.md（权威题库源），未生成资料。");
  process.exit(1);
}

const difficultyMap = {
  "🌱基础": "basic",
  "⭐进阶": "advanced",
  "🔥勇者": "brave",
};
const optionIds = ["A", "B", "C", "D"];
const text = fs.readFileSync(source, "utf8");
const lines = text.split(/\r?\n/);
const questions = [];
let knowledgePoint = "";

for (const line of lines) {
  const heading = line.match(/^##\s+\d{2}\s+(.+?)\s*$/);
  if (heading) {
    knowledgePoint = heading[1];
    continue;
  }

  if (!knowledgePoint || !/^\|\s*[A-Z]{2}-\d{3}\s*\|/.test(line)) continue;
  const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
  if (cells.length !== 9) throw new Error(`题库行栏位数量错误：${line}`);

  const [id, difficultyLabel, prompt, ...rest] = cells;
  const optionTexts = rest.slice(0, 4);
  const answerCell = rest[4];
  const sourceText = rest[5];
  const answerMatch = answerCell.match(/^([ABCD])(?:\s|（|\(|$)/);
  const difficulty = difficultyMap[difficultyLabel];
  if (!difficulty) throw new Error(`${id} 难度无法识别：${difficultyLabel}`);
  if (!answerMatch) throw new Error(`${id} 正确答案无法识别：${answerCell}`);

  questions.push({
    id,
    knowledgePoint,
    difficulty,
    difficultyLabel,
    prompt,
    options: optionTexts.map((optionText, index) => ({ id: optionIds[index], text: optionText })),
    correctOptionId: answerMatch[1],
    source: sourceText,
  });
}

if (questions.length !== 220) throw new Error(`题目数量应为220，实际 ${questions.length}`);
const ids = new Set(questions.map((question) => question.id));
if (ids.size !== questions.length) throw new Error("题目 ID 必须唯一");

const pointCounts = new Map();
for (const question of questions) {
  pointCounts.set(question.knowledgePoint, (pointCounts.get(question.knowledgePoint) || 0) + 1);
  if (question.options.length !== 4 || new Set(question.options.map((option) => option.text)).size !== 4) {
    throw new Error(`${question.id} 必须有4个不同选项`);
  }
  if (!question.options.some((option) => option.id === question.correctOptionId)) {
    throw new Error(`${question.id} 正确答案不存在`);
  }
  if (!question.source) throw new Error(`${question.id} 缺少教材依据`);
}
if (pointCounts.size !== 22 || [...pointCounts.values()].some((count) => count !== 10)) {
  throw new Error(`知识点分布错误：${JSON.stringify(Object.fromEntries(pointCounts))}`);
}

const difficultyCounts = Object.fromEntries(
  ["basic", "advanced", "brave"].map((difficulty) => [
    difficulty,
    questions.filter((question) => question.difficulty === difficulty).length,
  ]),
);
if (difficultyCounts.basic !== 88 || difficultyCounts.advanced !== 66 || difficultyCounts.brave !== 66) {
  throw new Error(`难度分布错误：${JSON.stringify(difficultyCounts)}`);
}

const generated = `export type Difficulty = "basic" | "advanced" | "brave";

export type Question = {
  id: string;
  knowledgePoint: string;
  difficulty: Difficulty;
  difficultyLabel: string;
  prompt: string;
  options: Array<{ id: string; text: string }>;
  correctOptionId: string;
  source: string;
};

export const QUESTION_BANK: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, generated, "utf8");
console.log(`已生成 ${questions.length} 题、${pointCounts.size} 个知识点：${output}`);
console.log(`难度分布：${JSON.stringify(difficultyCounts)}`);
