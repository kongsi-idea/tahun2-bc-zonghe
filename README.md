# 华文勇者大冒险

二年级华文跨单元综合闯关工具（Vite + React + TypeScript），保留知识岛绘本视觉、22站、三档难度、积分/宝石/Combo、无限挑战和本地浏览器进度。

## 开发

```bash
npm install
npm run dev
```

`index.html` 依序加载 Supabase CDN、Kongsi Idea 的 `supabase-client.js` 与 `class-code-client.js`。有班级名单时选择同一 `playCode` 的2–3人；无名单时可手填2–3人，访客成绩通过 RPC `submit_tahun2_bc_zonghe_score` 提交。`?board=1` 可打开排行榜；带一个或多个 `?code=` 时，“本班”会显示对应班级范围。

## 题库转换

权威源为根目录 `question-bank.md`，运行 `node scripts/convert-question-bank.mjs` 会验证220题、唯一ID、22知识点、4个选项、答案存在，以及 88/66/66 难度分布后生成 `src/data/question-bank.ts`。

本工具覆盖二年级华文全年教材中适合四选一自动判分的22个跨单元知识点，不代表听说读写、书写、朗读与开放写话等完整全年课程。
