export type Difficulty = "basic" | "advanced" | "brave";

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

export const QUESTION_BANK: Question[] = [
  {
    "id": "PY-001",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“校园”的“校”读什么？",
    "options": [
      {
        "id": "A",
        "text": "xiāo"
      },
      {
        "id": "B",
        "text": "xiáo"
      },
      {
        "id": "C",
        "text": "xiǎo"
      },
      {
        "id": "D",
        "text": "xiào"
      }
    ],
    "correctOptionId": "D",
    "source": "课本第一单元“校园”"
  },
  {
    "id": "PY-002",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“教室”的“室”读什么？",
    "options": [
      {
        "id": "A",
        "text": "shī"
      },
      {
        "id": "B",
        "text": "shí"
      },
      {
        "id": "C",
        "text": "shǐ"
      },
      {
        "id": "D",
        "text": "shì"
      }
    ],
    "correctOptionId": "D",
    "source": "课本第一单元“教室”"
  },
  {
    "id": "PY-003",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“列车”的“列”读什么？",
    "options": [
      {
        "id": "A",
        "text": "liē"
      },
      {
        "id": "B",
        "text": "lié"
      },
      {
        "id": "C",
        "text": "liě"
      },
      {
        "id": "D",
        "text": "liè"
      }
    ],
    "correctOptionId": "D",
    "source": "课本第一单元“列车”"
  },
  {
    "id": "PY-004",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“世界”的“界”读什么？",
    "options": [
      {
        "id": "A",
        "text": "jiē"
      },
      {
        "id": "B",
        "text": "jié"
      },
      {
        "id": "C",
        "text": "jiě"
      },
      {
        "id": "D",
        "text": "jiè"
      }
    ],
    "correctOptionId": "D",
    "source": "课本第一单元“世界”"
  },
  {
    "id": "PY-005",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一项是“海浪”的正确拼音？",
    "options": [
      {
        "id": "A",
        "text": "hǎi làng"
      },
      {
        "id": "B",
        "text": "hǎi nàng"
      },
      {
        "id": "C",
        "text": "hāi lǎng"
      },
      {
        "id": "D",
        "text": "hái lán"
      }
    ],
    "correctOptionId": "A",
    "source": "课本第一单元“海浪”"
  },
  {
    "id": "PY-006",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一项是“朋友”的正确拼音？",
    "options": [
      {
        "id": "A",
        "text": "pén yǒu"
      },
      {
        "id": "B",
        "text": "péng yǒu"
      },
      {
        "id": "C",
        "text": "pěng yòu"
      },
      {
        "id": "D",
        "text": "pèng yǒu"
      }
    ],
    "correctOptionId": "B",
    "source": "课本第五单元“朋友”"
  },
  {
    "id": "PY-007",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一项是“观察”的正确拼音？",
    "options": [
      {
        "id": "A",
        "text": "guān cā"
      },
      {
        "id": "B",
        "text": "guàn cá"
      },
      {
        "id": "C",
        "text": "guǎn chā"
      },
      {
        "id": "D",
        "text": "guān chá"
      }
    ],
    "correctOptionId": "D",
    "source": "课本第六单元“观察”"
  },
  {
    "id": "PY-008",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一组两个词的拼音都正确？",
    "options": [
      {
        "id": "A",
        "text": "时间 shí jiān、世界 shì jiè"
      },
      {
        "id": "B",
        "text": "时间 sí jiān、世界 shì jiě"
      },
      {
        "id": "C",
        "text": "时间 shǐ jiàn、世界 sì jiè"
      },
      {
        "id": "D",
        "text": "时间 shì jiǎn、世界 shǐ jiè"
      }
    ],
    "correctOptionId": "A",
    "source": "课本第一、十七单元“世界、时间”"
  },
  {
    "id": "PY-009",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一组两个词的拼音都正确？",
    "options": [
      {
        "id": "A",
        "text": "科学 kě xué、春天 chūn tiān"
      },
      {
        "id": "B",
        "text": "科学 kē xuě、春天 cūn tiān"
      },
      {
        "id": "C",
        "text": "科学 kē xué、春天 chūn tiān"
      },
      {
        "id": "D",
        "text": "科学 kè xuě、春天 chǔn tián"
      }
    ],
    "correctOptionId": "C",
    "source": "课本第四、九单元“春天、科学”"
  },
  {
    "id": "PY-010",
    "knowledgePoint": "普通字音与拼音",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一组两个词的拼音都正确？",
    "options": [
      {
        "id": "A",
        "text": "校园 xiào yuán、教室 jiào shì"
      },
      {
        "id": "B",
        "text": "校园 xiǎo yuán、教室 jiāo shì"
      },
      {
        "id": "C",
        "text": "校园 xiāo yuán、教室 jiào sì"
      },
      {
        "id": "D",
        "text": "校园 xiào yán、教室 jiǎo shǐ"
      }
    ],
    "correctOptionId": "A",
    "source": "课本第一单元“校园、教室”"
  },
  {
    "id": "DY-001",
    "knowledgePoint": "多音字",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“高兴”的“兴”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "xìng"
      },
      {
        "id": "B",
        "text": "xīng"
      },
      {
        "id": "C",
        "text": "xǐng"
      },
      {
        "id": "D",
        "text": "xìn"
      }
    ],
    "correctOptionId": "A",
    "source": "课本第五单元“高兴”"
  },
  {
    "id": "DY-002",
    "knowledgePoint": "多音字",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“假山”的“假”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "jiā"
      },
      {
        "id": "B",
        "text": "jiǎ"
      },
      {
        "id": "C",
        "text": "jià"
      },
      {
        "id": "D",
        "text": "jiá"
      }
    ],
    "correctOptionId": "B",
    "source": "课本第九单元“假山”"
  },
  {
    "id": "DY-003",
    "knowledgePoint": "多音字",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“收藏”的“藏”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "cāng"
      },
      {
        "id": "B",
        "text": "càng"
      },
      {
        "id": "C",
        "text": "cáng"
      },
      {
        "id": "D",
        "text": "cǎng"
      }
    ],
    "correctOptionId": "C",
    "source": "课本语文乐园“收藏”"
  },
  {
    "id": "DY-004",
    "knowledgePoint": "多音字",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“漂亮”的“漂”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "piāo"
      },
      {
        "id": "B",
        "text": "piáo"
      },
      {
        "id": "C",
        "text": "piǎo"
      },
      {
        "id": "D",
        "text": "piào"
      }
    ],
    "correctOptionId": "D",
    "source": "课本及活动本“漂亮”"
  },
  {
    "id": "DY-005",
    "knowledgePoint": "多音字",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“自传”的“传”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "zhuàn"
      },
      {
        "id": "B",
        "text": "chuán"
      },
      {
        "id": "C",
        "text": "chuǎn"
      },
      {
        "id": "D",
        "text": "zhuǎn"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册“自传”"
  },
  {
    "id": "DY-006",
    "knowledgePoint": "多音字",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“差点儿”的“差”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "chā"
      },
      {
        "id": "B",
        "text": "chà"
      },
      {
        "id": "C",
        "text": "chāi"
      },
      {
        "id": "D",
        "text": "cī"
      }
    ],
    "correctOptionId": "B",
    "source": "第十三单元课文及活动本"
  },
  {
    "id": "DY-007",
    "knowledgePoint": "多音字",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“转圈”的“转”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "zhuān"
      },
      {
        "id": "B",
        "text": "zhuǎn"
      },
      {
        "id": "C",
        "text": "zhuàn"
      },
      {
        "id": "D",
        "text": "zuǎn"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本下册语文乐园四"
  },
  {
    "id": "DY-008",
    "knowledgePoint": "多音字",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“弄脏”的“脏”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "zǎng"
      },
      {
        "id": "B",
        "text": "zàng"
      },
      {
        "id": "C",
        "text": "zhāng"
      },
      {
        "id": "D",
        "text": "zāng"
      }
    ],
    "correctOptionId": "D",
    "source": "活动本下册第十四单元"
  },
  {
    "id": "DY-009",
    "knowledgePoint": "多音字",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“好奇”的“好”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "hào"
      },
      {
        "id": "B",
        "text": "hǎo"
      },
      {
        "id": "C",
        "text": "hāo"
      },
      {
        "id": "D",
        "text": "háo"
      }
    ],
    "correctOptionId": "A",
    "source": "课本第四单元“好奇”"
  },
  {
    "id": "DY-010",
    "knowledgePoint": "多音字",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“将来”的“将”应该怎么读？",
    "options": [
      {
        "id": "A",
        "text": "jiàng"
      },
      {
        "id": "B",
        "text": "jiāng"
      },
      {
        "id": "C",
        "text": "jiǎng"
      },
      {
        "id": "D",
        "text": "qiāng"
      }
    ],
    "correctOptionId": "B",
    "source": "课本第十五单元“将来”"
  },
  {
    "id": "BS-001",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一个字的部首是“木”？",
    "options": [
      {
        "id": "A",
        "text": "橱"
      },
      {
        "id": "B",
        "text": "浪"
      },
      {
        "id": "C",
        "text": "筒"
      },
      {
        "id": "D",
        "text": "脚"
      }
    ],
    "correctOptionId": "A",
    "source": "识字一“书橱”；教学提示部首归类"
  },
  {
    "id": "BS-002",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一个字的部首是“氵”？",
    "options": [
      {
        "id": "A",
        "text": "椅"
      },
      {
        "id": "B",
        "text": "波"
      },
      {
        "id": "C",
        "text": "跌"
      },
      {
        "id": "D",
        "text": "鸽"
      }
    ],
    "correctOptionId": "B",
    "source": "第一单元“波”；教学提示水部"
  },
  {
    "id": "BS-003",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一个字的部首是“竹”？",
    "options": [
      {
        "id": "A",
        "text": "灯"
      },
      {
        "id": "B",
        "text": "塘"
      },
      {
        "id": "C",
        "text": "筒"
      },
      {
        "id": "D",
        "text": "蝇"
      }
    ],
    "correctOptionId": "C",
    "source": "识字一“笔筒”"
  },
  {
    "id": "BS-004",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一个字的部首是“足”？",
    "options": [
      {
        "id": "A",
        "text": "脑"
      },
      {
        "id": "B",
        "text": "玻"
      },
      {
        "id": "C",
        "text": "莲"
      },
      {
        "id": "D",
        "text": "跌"
      }
    ],
    "correctOptionId": "D",
    "source": "第九单元“跌”；教学提示足部"
  },
  {
    "id": "BS-005",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“池塘”的“塘”，部首是什么？",
    "options": [
      {
        "id": "A",
        "text": "土"
      },
      {
        "id": "B",
        "text": "氵"
      },
      {
        "id": "C",
        "text": "木"
      },
      {
        "id": "D",
        "text": "口"
      }
    ],
    "correctOptionId": "A",
    "source": "第五单元；教学提示“塘”是土部"
  },
  {
    "id": "BS-006",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“蜗牛”的“蜗”，部首是什么？",
    "options": [
      {
        "id": "A",
        "text": "鸟"
      },
      {
        "id": "B",
        "text": "虫"
      },
      {
        "id": "C",
        "text": "艹"
      },
      {
        "id": "D",
        "text": "木"
      }
    ],
    "correctOptionId": "B",
    "source": "识字四；教学提示虫部"
  },
  {
    "id": "BS-007",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“懒”字的部首是哪一个？",
    "options": [
      {
        "id": "A",
        "text": "米"
      },
      {
        "id": "B",
        "text": "虫"
      },
      {
        "id": "C",
        "text": "忄"
      },
      {
        "id": "D",
        "text": "王"
      }
    ],
    "correctOptionId": "C",
    "source": "第十三单元；教学提示心部"
  },
  {
    "id": "BS-008",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一组的两个字都是“木”部？",
    "options": [
      {
        "id": "A",
        "text": "橱、椅"
      },
      {
        "id": "B",
        "text": "波、浪"
      },
      {
        "id": "C",
        "text": "蝇、蜗"
      },
      {
        "id": "D",
        "text": "跌、跑"
      }
    ],
    "correctOptionId": "A",
    "source": "识字一；第一、十三单元"
  },
  {
    "id": "BS-009",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一组的两个字都是“氵”部？",
    "options": [
      {
        "id": "A",
        "text": "筒、笆"
      },
      {
        "id": "B",
        "text": "波、漂"
      },
      {
        "id": "C",
        "text": "脏、脑"
      },
      {
        "id": "D",
        "text": "莲、草"
      }
    ],
    "correctOptionId": "B",
    "source": "第一、十三单元"
  },
  {
    "id": "BS-010",
    "knowledgePoint": "部首、偏旁与结构",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一组的两个字部首不同？",
    "options": [
      {
        "id": "A",
        "text": "蝇、蜗"
      },
      {
        "id": "B",
        "text": "橱、椰"
      },
      {
        "id": "C",
        "text": "波、浪"
      },
      {
        "id": "D",
        "text": "鸽、蜗"
      }
    ],
    "correctOptionId": "D",
    "source": "课本识字及教学提示"
  },
  {
    "id": "XJ-001",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“一（　）又一（　）的海浪”应该填哪个字？",
    "options": [
      {
        "id": "A",
        "text": "泼"
      },
      {
        "id": "B",
        "text": "波"
      },
      {
        "id": "C",
        "text": "破"
      },
      {
        "id": "D",
        "text": "坡"
      }
    ],
    "correctOptionId": "B",
    "source": "第一单元“一波又一波的海浪”；教学提示“泼、波”"
  },
  {
    "id": "XJ-002",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“（　）村”应该填哪个字？",
    "options": [
      {
        "id": "A",
        "text": "鱼"
      },
      {
        "id": "B",
        "text": "渔"
      },
      {
        "id": "C",
        "text": "余"
      },
      {
        "id": "D",
        "text": "雨"
      }
    ],
    "correctOptionId": "B",
    "source": "第八单元“渔村”"
  },
  {
    "id": "XJ-003",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“口（　）”应该填哪个字？",
    "options": [
      {
        "id": "A",
        "text": "喝"
      },
      {
        "id": "B",
        "text": "渴"
      },
      {
        "id": "C",
        "text": "河"
      },
      {
        "id": "D",
        "text": "何"
      }
    ],
    "correctOptionId": "B",
    "source": "第十六单元教学提示“喝、渴”"
  },
  {
    "id": "XJ-004",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“（　）水”应该填哪个字？",
    "options": [
      {
        "id": "A",
        "text": "烧"
      },
      {
        "id": "B",
        "text": "浇"
      },
      {
        "id": "C",
        "text": "绕"
      },
      {
        "id": "D",
        "text": "教"
      }
    ],
    "correctOptionId": "B",
    "source": "第九单元活动本“浇水”"
  },
  {
    "id": "XJ-005",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“这（　）工作很特别”应该填哪个字？",
    "options": [
      {
        "id": "A",
        "text": "分"
      },
      {
        "id": "B",
        "text": "份"
      },
      {
        "id": "C",
        "text": "纷"
      },
      {
        "id": "D",
        "text": "粉"
      }
    ],
    "correctOptionId": "B",
    "source": "第十单元教学提示“分、份”；活动本“这份工作”"
  },
  {
    "id": "XJ-006",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“风（　）”应该填哪个字？",
    "options": [
      {
        "id": "A",
        "text": "争"
      },
      {
        "id": "B",
        "text": "静"
      },
      {
        "id": "C",
        "text": "筝"
      },
      {
        "id": "D",
        "text": "净"
      }
    ],
    "correctOptionId": "C",
    "source": "第七单元“风筝”"
  },
  {
    "id": "XJ-007",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“（　）亮”应该填哪个字？",
    "options": [
      {
        "id": "A",
        "text": "漂"
      },
      {
        "id": "B",
        "text": "飘"
      },
      {
        "id": "C",
        "text": "票"
      },
      {
        "id": "D",
        "text": "波"
      }
    ],
    "correctOptionId": "A",
    "source": "教材多次出现“漂亮”；教学提示“飘、漂”"
  },
  {
    "id": "XJ-008",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句用字正确？",
    "options": [
      {
        "id": "A",
        "text": "睡莲的种子在水面飘流。"
      },
      {
        "id": "B",
        "text": "睡莲的种子在水面漂流。"
      },
      {
        "id": "C",
        "text": "睡莲的种子在水面票流。"
      },
      {
        "id": "D",
        "text": "睡莲的种子在水面波流。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十三单元“在水面漂流”"
  },
  {
    "id": "XJ-009",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句用字正确？",
    "options": [
      {
        "id": "A",
        "text": "我们坐小桥过河。"
      },
      {
        "id": "B",
        "text": "我们坐小骄过河。"
      },
      {
        "id": "C",
        "text": "我们坐小船过河。"
      },
      {
        "id": "D",
        "text": "我们坐小般过河。"
      }
    ],
    "correctOptionId": "C",
    "source": "第十六单元“过河”；教学提示“船、般”"
  },
  {
    "id": "XJ-010",
    "knowledgePoint": "形近字与同音字",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句用字正确？",
    "options": [
      {
        "id": "A",
        "text": "妹妹拿筷子吃饭。"
      },
      {
        "id": "B",
        "text": "妹妹拿快子吃饭。"
      },
      {
        "id": "C",
        "text": "妹妹拿块子吃饭。"
      },
      {
        "id": "D",
        "text": "妹妹拿决子吃饭。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十九单元教学提示“快、筷”；教材“吃饭”"
  },
  {
    "id": "ZZ-001",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“门”添“口”变成什么字？",
    "options": [
      {
        "id": "A",
        "text": "问"
      },
      {
        "id": "B",
        "text": "吹"
      },
      {
        "id": "C",
        "text": "吃"
      },
      {
        "id": "D",
        "text": "味"
      }
    ],
    "correctOptionId": "A",
    "source": "识字三《添“口”歌》"
  },
  {
    "id": "ZZ-002",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“欠”添“口”变成什么字？",
    "options": [
      {
        "id": "A",
        "text": "问"
      },
      {
        "id": "B",
        "text": "吹"
      },
      {
        "id": "C",
        "text": "吓"
      },
      {
        "id": "D",
        "text": "吐"
      }
    ],
    "correctOptionId": "B",
    "source": "识字三《添“口”歌》"
  },
  {
    "id": "ZZ-003",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“乞”添“口”变成什么字？",
    "options": [
      {
        "id": "A",
        "text": "味"
      },
      {
        "id": "B",
        "text": "叮"
      },
      {
        "id": "C",
        "text": "吃"
      },
      {
        "id": "D",
        "text": "召"
      }
    ],
    "correctOptionId": "C",
    "source": "识字三《添“口”歌》"
  },
  {
    "id": "ZZ-004",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“未”添“口”变成什么字？",
    "options": [
      {
        "id": "A",
        "text": "吐"
      },
      {
        "id": "B",
        "text": "吓"
      },
      {
        "id": "C",
        "text": "问"
      },
      {
        "id": "D",
        "text": "味"
      }
    ],
    "correctOptionId": "D",
    "source": "识字三《添“口”歌》"
  },
  {
    "id": "ZZ-005",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“少”加“氵”变成什么字？",
    "options": [
      {
        "id": "A",
        "text": "沙"
      },
      {
        "id": "B",
        "text": "炒"
      },
      {
        "id": "C",
        "text": "吵"
      },
      {
        "id": "D",
        "text": "抄"
      }
    ],
    "correctOptionId": "A",
    "source": "识字五“沙、炒、吵、抄、秒”字族"
  },
  {
    "id": "ZZ-006",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“少”加“火”变成什么字？",
    "options": [
      {
        "id": "A",
        "text": "沙"
      },
      {
        "id": "B",
        "text": "炒"
      },
      {
        "id": "C",
        "text": "吵"
      },
      {
        "id": "D",
        "text": "秒"
      }
    ],
    "correctOptionId": "B",
    "source": "识字五字族文"
  },
  {
    "id": "ZZ-007",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“少”加“口”变成什么字？",
    "options": [
      {
        "id": "A",
        "text": "抄"
      },
      {
        "id": "B",
        "text": "秒"
      },
      {
        "id": "C",
        "text": "吵"
      },
      {
        "id": "D",
        "text": "沙"
      }
    ],
    "correctOptionId": "C",
    "source": "识字五字族文"
  },
  {
    "id": "ZZ-008",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“秒”的左边是什么部件？",
    "options": [
      {
        "id": "A",
        "text": "氵"
      },
      {
        "id": "B",
        "text": "火"
      },
      {
        "id": "C",
        "text": "扌"
      },
      {
        "id": "D",
        "text": "禾"
      }
    ],
    "correctOptionId": "D",
    "source": "识字五“分秒必争”"
  },
  {
    "id": "ZZ-009",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一组都是由“少”加部件组成的字？",
    "options": [
      {
        "id": "A",
        "text": "沙、炒、吵、抄"
      },
      {
        "id": "B",
        "text": "问、吹、吃、味"
      },
      {
        "id": "C",
        "text": "波、浪、漂、流"
      },
      {
        "id": "D",
        "text": "跌、跑、路、跳"
      }
    ],
    "correctOptionId": "A",
    "source": "识字五字族文"
  },
  {
    "id": "ZZ-010",
    "knowledgePoint": "加减笔画、添部件与字族规律",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“丁”添“口”后，可以组成哪个词语？",
    "options": [
      {
        "id": "A",
        "text": "发问"
      },
      {
        "id": "B",
        "text": "叮咬"
      },
      {
        "id": "C",
        "text": "味道"
      },
      {
        "id": "D",
        "text": "吹号"
      }
    ],
    "correctOptionId": "B",
    "source": "识字三“虫叮咬”"
  },
  {
    "id": "JY-001",
    "knowledgePoint": "近义词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪个词和“开心”的意思最接近？",
    "options": [
      {
        "id": "A",
        "text": "快乐"
      },
      {
        "id": "B",
        "text": "难过"
      },
      {
        "id": "C",
        "text": "慌张"
      },
      {
        "id": "D",
        "text": "害怕"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元“开心、快乐”"
  },
  {
    "id": "JY-002",
    "knowledgePoint": "近义词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪个词和“美丽”的意思最接近？",
    "options": [
      {
        "id": "A",
        "text": "热闹"
      },
      {
        "id": "B",
        "text": "漂亮"
      },
      {
        "id": "C",
        "text": "干净"
      },
      {
        "id": "D",
        "text": "聪明"
      }
    ],
    "correctOptionId": "B",
    "source": "第一、十九单元“美丽、漂亮”"
  },
  {
    "id": "JY-003",
    "knowledgePoint": "近义词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪个词和“老师”的意思最接近？",
    "options": [
      {
        "id": "A",
        "text": "学生"
      },
      {
        "id": "B",
        "text": "朋友"
      },
      {
        "id": "C",
        "text": "教师"
      },
      {
        "id": "D",
        "text": "医生"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本下册“教师、导师”"
  },
  {
    "id": "JY-004",
    "knowledgePoint": "近义词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪个词和“有名”的意思最接近？",
    "options": [
      {
        "id": "A",
        "text": "勤劳"
      },
      {
        "id": "B",
        "text": "特别"
      },
      {
        "id": "C",
        "text": "重要"
      },
      {
        "id": "D",
        "text": "著名"
      }
    ],
    "correctOptionId": "D",
    "source": "第九单元“有名”；拓展阅读“著名”"
  },
  {
    "id": "JY-005",
    "knowledgePoint": "近义词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“带路”可以换成哪个词，意思不变？",
    "options": [
      {
        "id": "A",
        "text": "领路"
      },
      {
        "id": "B",
        "text": "迷路"
      },
      {
        "id": "C",
        "text": "走路"
      },
      {
        "id": "D",
        "text": "马路"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册词语练习“带路—领路”"
  },
  {
    "id": "JY-006",
    "knowledgePoint": "近义词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“漂走”可以换成哪个词，意思最接近？",
    "options": [
      {
        "id": "A",
        "text": "走开"
      },
      {
        "id": "B",
        "text": "流走"
      },
      {
        "id": "C",
        "text": "带走"
      },
      {
        "id": "D",
        "text": "拿走"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本下册词语练习“漂走—流走”"
  },
  {
    "id": "JY-007",
    "knowledgePoint": "近义词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“习写”可以换成哪个词，意思最接近？",
    "options": [
      {
        "id": "A",
        "text": "朗读"
      },
      {
        "id": "B",
        "text": "背诵"
      },
      {
        "id": "C",
        "text": "练写"
      },
      {
        "id": "D",
        "text": "观察"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本下册词语练习“练写—习写”"
  },
  {
    "id": "JY-008",
    "knowledgePoint": "近义词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“大家赞赏这位同学。”哪一个词可以换掉“赞赏”？",
    "options": [
      {
        "id": "A",
        "text": "责骂"
      },
      {
        "id": "B",
        "text": "害怕"
      },
      {
        "id": "C",
        "text": "怀疑"
      },
      {
        "id": "D",
        "text": "称赞"
      }
    ],
    "correctOptionId": "D",
    "source": "第九单元“赞赏”；教材常用“称赞”"
  },
  {
    "id": "JY-009",
    "knowledgePoint": "近义词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“他忽然听见一声响。”哪一个词最接近“忽然”？",
    "options": [
      {
        "id": "A",
        "text": "突然"
      },
      {
        "id": "B",
        "text": "慢慢"
      },
      {
        "id": "C",
        "text": "常常"
      },
      {
        "id": "D",
        "text": "悄悄"
      }
    ],
    "correctOptionId": "A",
    "source": "第九单元“忽然”；教材“突然”"
  },
  {
    "id": "JY-010",
    "knowledgePoint": "近义词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“鳄鱼马上松口。”哪一个词最接近“马上”？",
    "options": [
      {
        "id": "A",
        "text": "终于"
      },
      {
        "id": "B",
        "text": "赶快"
      },
      {
        "id": "C",
        "text": "以前"
      },
      {
        "id": "D",
        "text": "已经"
      }
    ],
    "correctOptionId": "B",
    "source": "第十六单元“马上”；教材“赶快”"
  },
  {
    "id": "FY-001",
    "knowledgePoint": "反义词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“高”的反义词是什么？",
    "options": [
      {
        "id": "A",
        "text": "矮"
      },
      {
        "id": "B",
        "text": "大"
      },
      {
        "id": "C",
        "text": "长"
      },
      {
        "id": "D",
        "text": "远"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册识字四反义词练习"
  },
  {
    "id": "FY-002",
    "knowledgePoint": "反义词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“多”的反义词是什么？",
    "options": [
      {
        "id": "A",
        "text": "大"
      },
      {
        "id": "B",
        "text": "少"
      },
      {
        "id": "C",
        "text": "长"
      },
      {
        "id": "D",
        "text": "高"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本下册识字四反义词练习"
  },
  {
    "id": "FY-003",
    "knowledgePoint": "反义词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“成功”的反义词是什么？",
    "options": [
      {
        "id": "A",
        "text": "学习"
      },
      {
        "id": "B",
        "text": "教导"
      },
      {
        "id": "C",
        "text": "失败"
      },
      {
        "id": "D",
        "text": "勤劳"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本下册识字四反义词练习"
  },
  {
    "id": "FY-004",
    "knowledgePoint": "反义词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“黑暗”的反义词是什么？",
    "options": [
      {
        "id": "A",
        "text": "热闹"
      },
      {
        "id": "B",
        "text": "安静"
      },
      {
        "id": "C",
        "text": "美丽"
      },
      {
        "id": "D",
        "text": "明亮"
      }
    ],
    "correctOptionId": "D",
    "source": "第十九、二十单元教材词语"
  },
  {
    "id": "FY-005",
    "knowledgePoint": "反义词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“雾消失了，太阳又（　）了。”应该填什么？",
    "options": [
      {
        "id": "A",
        "text": "出现"
      },
      {
        "id": "B",
        "text": "躲藏"
      },
      {
        "id": "C",
        "text": "离开"
      },
      {
        "id": "D",
        "text": "下降"
      }
    ],
    "correctOptionId": "A",
    "source": "第十一单元“出现、消失”"
  },
  {
    "id": "FY-006",
    "knowledgePoint": "反义词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“垃圾山原来很肮脏，后来变得很（　）。”",
    "options": [
      {
        "id": "A",
        "text": "热闹"
      },
      {
        "id": "B",
        "text": "干净"
      },
      {
        "id": "C",
        "text": "丑"
      },
      {
        "id": "D",
        "text": "黑暗"
      }
    ],
    "correctOptionId": "B",
    "source": "第十四单元“肮脏、干干净净”"
  },
  {
    "id": "FY-007",
    "knowledgePoint": "反义词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“小鸟飞得快，小朋友走得（　）。”",
    "options": [
      {
        "id": "A",
        "text": "早"
      },
      {
        "id": "B",
        "text": "远"
      },
      {
        "id": "C",
        "text": "慢"
      },
      {
        "id": "D",
        "text": "高"
      }
    ],
    "correctOptionId": "C",
    "source": "第十七单元时间与动作词改编"
  },
  {
    "id": "FY-008",
    "knowledgePoint": "反义词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一组词语意思相反？",
    "options": [
      {
        "id": "A",
        "text": "开心、快乐"
      },
      {
        "id": "B",
        "text": "美丽、漂亮"
      },
      {
        "id": "C",
        "text": "观看、观赏"
      },
      {
        "id": "D",
        "text": "勤劳、懒惰"
      }
    ],
    "correctOptionId": "D",
    "source": "识字四“勤劳”；第十五单元“懒惰”"
  },
  {
    "id": "FY-009",
    "knowledgePoint": "反义词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句同时用了意思相反的词？",
    "options": [
      {
        "id": "A",
        "text": "这世界有真也有假。"
      },
      {
        "id": "B",
        "text": "同学们又唱又跳。"
      },
      {
        "id": "C",
        "text": "河水慢慢地流。"
      },
      {
        "id": "D",
        "text": "小鱼开心地笑。"
      }
    ],
    "correctOptionId": "A",
    "source": "深广课文《世界很小又很大》"
  },
  {
    "id": "FY-010",
    "knowledgePoint": "反义词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“姐姐个子高，我长得比她（　）。”最恰当的是哪一个词？",
    "options": [
      {
        "id": "A",
        "text": "长"
      },
      {
        "id": "B",
        "text": "矮"
      },
      {
        "id": "C",
        "text": "少"
      },
      {
        "id": "D",
        "text": "低"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本下册识字四原题型"
  },
  {
    "id": "CY-001",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“胆子壮”是什么意思？",
    "options": [
      {
        "id": "A",
        "text": "胆子大"
      },
      {
        "id": "B",
        "text": "身体高"
      },
      {
        "id": "C",
        "text": "跑得快"
      },
      {
        "id": "D",
        "text": "力气小"
      }
    ],
    "correctOptionId": "A",
    "source": "第九单元教学提示"
  },
  {
    "id": "CY-002",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“小朋友是个钓鱼能手”是什么意思？",
    "options": [
      {
        "id": "A",
        "text": "他有一支钓竿"
      },
      {
        "id": "B",
        "text": "他很会钓鱼"
      },
      {
        "id": "C",
        "text": "他爱吃鱼"
      },
      {
        "id": "D",
        "text": "他画了一条鱼"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本上册“钓鱼能手”改编"
  },
  {
    "id": "CY-003",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“多有意思”中的“意思”是什么？",
    "options": [
      {
        "id": "A",
        "text": "心意"
      },
      {
        "id": "B",
        "text": "意见"
      },
      {
        "id": "C",
        "text": "趣味"
      },
      {
        "id": "D",
        "text": "不好意思"
      }
    ],
    "correctOptionId": "C",
    "source": "第四单元读读比比"
  },
  {
    "id": "CY-004",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“好脏的山”中的“脏”是什么意思？",
    "options": [
      {
        "id": "A",
        "text": "心脏"
      },
      {
        "id": "B",
        "text": "重要"
      },
      {
        "id": "C",
        "text": "干净"
      },
      {
        "id": "D",
        "text": "不干净"
      }
    ],
    "correctOptionId": "D",
    "source": "第十四单元“垃圾山消失了”"
  },
  {
    "id": "CY-005",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“小朋友向老师领了一本书”中的“领”是什么意思？",
    "options": [
      {
        "id": "A",
        "text": "拿"
      },
      {
        "id": "B",
        "text": "带领"
      },
      {
        "id": "C",
        "text": "衣领"
      },
      {
        "id": "D",
        "text": "领路"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册“领、带领”改编"
  },
  {
    "id": "CY-006",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“姐姐把弟弟领到教室”中的“领”是什么意思？",
    "options": [
      {
        "id": "A",
        "text": "拿走"
      },
      {
        "id": "B",
        "text": "带领"
      },
      {
        "id": "C",
        "text": "得到"
      },
      {
        "id": "D",
        "text": "收下"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本下册“领、带领”改编"
  },
  {
    "id": "CY-007",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“松鼠随手把种子丢在地上”中的“随手”是什么意思？",
    "options": [
      {
        "id": "A",
        "text": "跟着水流"
      },
      {
        "id": "B",
        "text": "一起走"
      },
      {
        "id": "C",
        "text": "顺便"
      },
      {
        "id": "D",
        "text": "认真"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本下册第十三单元"
  },
  {
    "id": "CY-008",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“这些种子随着水流漂动”中的“随着”是什么意思？",
    "options": [
      {
        "id": "A",
        "text": "顺便"
      },
      {
        "id": "B",
        "text": "马上"
      },
      {
        "id": "C",
        "text": "离开"
      },
      {
        "id": "D",
        "text": "跟着"
      }
    ],
    "correctOptionId": "D",
    "source": "活动本下册第十三单元"
  },
  {
    "id": "CY-009",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“千万盏彩灯”中的“千万”是什么意思？",
    "options": [
      {
        "id": "A",
        "text": "数量很多"
      },
      {
        "id": "B",
        "text": "一定要"
      },
      {
        "id": "C",
        "text": "非常小心"
      },
      {
        "id": "D",
        "text": "十万盏"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册语文乐园七"
  },
  {
    "id": "CY-010",
    "knowledgePoint": "词义辨析与一词多义",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“这地方很危险，你千万要小心”中的“千万”是什么意思？",
    "options": [
      {
        "id": "A",
        "text": "数量很多"
      },
      {
        "id": "B",
        "text": "一定要"
      },
      {
        "id": "C",
        "text": "值得同情"
      },
      {
        "id": "D",
        "text": "数量很少"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本下册语文乐园七"
  },
  {
    "id": "LC-001",
    "knowledgePoint": "量词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "校园像一（　）乐园。",
    "options": [
      {
        "id": "A",
        "text": "座"
      },
      {
        "id": "B",
        "text": "条"
      },
      {
        "id": "C",
        "text": "颗"
      },
      {
        "id": "D",
        "text": "支"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元“一座乐园”"
  },
  {
    "id": "LC-002",
    "knowledgePoint": "量词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "老师在黑板上画了一（　）大马路。",
    "options": [
      {
        "id": "A",
        "text": "座"
      },
      {
        "id": "B",
        "text": "条"
      },
      {
        "id": "C",
        "text": "轮"
      },
      {
        "id": "D",
        "text": "串"
      }
    ],
    "correctOptionId": "B",
    "source": "第二单元“一条大马路”"
  },
  {
    "id": "LC-003",
    "knowledgePoint": "量词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "家，是一（　）太阳。",
    "options": [
      {
        "id": "A",
        "text": "条"
      },
      {
        "id": "B",
        "text": "座"
      },
      {
        "id": "C",
        "text": "轮"
      },
      {
        "id": "D",
        "text": "只"
      }
    ],
    "correctOptionId": "C",
    "source": "第三单元“一轮太阳”"
  },
  {
    "id": "LC-004",
    "knowledgePoint": "量词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "小朋友有一（　）好钓竿。",
    "options": [
      {
        "id": "A",
        "text": "颗"
      },
      {
        "id": "B",
        "text": "幅"
      },
      {
        "id": "C",
        "text": "座"
      },
      {
        "id": "D",
        "text": "支"
      }
    ],
    "correctOptionId": "D",
    "source": "活动本上册“钓竿”改编"
  },
  {
    "id": "LC-005",
    "knowledgePoint": "量词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "童年是一（　）画。",
    "options": [
      {
        "id": "A",
        "text": "幅"
      },
      {
        "id": "B",
        "text": "串"
      },
      {
        "id": "C",
        "text": "阵"
      },
      {
        "id": "D",
        "text": "堂"
      }
    ],
    "correctOptionId": "A",
    "source": "第九单元“童年是一幅画”"
  },
  {
    "id": "LC-006",
    "knowledgePoint": "量词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "童年还是一（　）长长的问号。",
    "options": [
      {
        "id": "A",
        "text": "轮"
      },
      {
        "id": "B",
        "text": "串"
      },
      {
        "id": "C",
        "text": "条"
      },
      {
        "id": "D",
        "text": "颗"
      }
    ],
    "correctOptionId": "B",
    "source": "第九单元“一串长长的问号”"
  },
  {
    "id": "LC-007",
    "knowledgePoint": "量词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "小朋友找到一（　）种子。",
    "options": [
      {
        "id": "A",
        "text": "支"
      },
      {
        "id": "B",
        "text": "只"
      },
      {
        "id": "C",
        "text": "颗"
      },
      {
        "id": "D",
        "text": "座"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本下册“种子”改编"
  },
  {
    "id": "LC-008",
    "knowledgePoint": "量词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "花儿散发一（　）让人作呕的臭味。",
    "options": [
      {
        "id": "A",
        "text": "幅"
      },
      {
        "id": "B",
        "text": "条"
      },
      {
        "id": "C",
        "text": "轮"
      },
      {
        "id": "D",
        "text": "阵"
      }
    ],
    "correctOptionId": "D",
    "source": "第十三单元“一阵臭味”改编"
  },
  {
    "id": "LC-009",
    "knowledgePoint": "量词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "我们在教室里上了一（　）又一（　）课。",
    "options": [
      {
        "id": "A",
        "text": "堂"
      },
      {
        "id": "B",
        "text": "支"
      },
      {
        "id": "C",
        "text": "座"
      },
      {
        "id": "D",
        "text": "串"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本上册第一单元"
  },
  {
    "id": "LC-010",
    "knowledgePoint": "量词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一个量词最适合“灯”？",
    "options": [
      {
        "id": "A",
        "text": "条"
      },
      {
        "id": "B",
        "text": "盏"
      },
      {
        "id": "C",
        "text": "颗"
      },
      {
        "id": "D",
        "text": "幅"
      }
    ],
    "correctOptionId": "B",
    "source": "第十九、二十单元“彩灯、灯”"
  },
  {
    "id": "DP-001",
    "knowledgePoint": "词语搭配",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪个词最适合形容“同学”？",
    "options": [
      {
        "id": "A",
        "text": "活泼的"
      },
      {
        "id": "B",
        "text": "刺鼻的"
      },
      {
        "id": "C",
        "text": "坚硬的"
      },
      {
        "id": "D",
        "text": "黑暗的"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元“活泼的同学”"
  },
  {
    "id": "DP-002",
    "knowledgePoint": "词语搭配",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪个词最适合形容“读书声”？",
    "options": [
      {
        "id": "A",
        "text": "甜甜的"
      },
      {
        "id": "B",
        "text": "朗朗的"
      },
      {
        "id": "C",
        "text": "弯弯的"
      },
      {
        "id": "D",
        "text": "软软的"
      }
    ],
    "correctOptionId": "B",
    "source": "第一单元“朗朗的读书声”"
  },
  {
    "id": "DP-003",
    "knowledgePoint": "词语搭配",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪个词最适合形容“阳光”？",
    "options": [
      {
        "id": "A",
        "text": "顽皮的"
      },
      {
        "id": "B",
        "text": "聪明的"
      },
      {
        "id": "C",
        "text": "温暖的"
      },
      {
        "id": "D",
        "text": "刺鼻的"
      }
    ],
    "correctOptionId": "C",
    "source": "第三单元“温暖的阳光”"
  },
  {
    "id": "DP-004",
    "knowledgePoint": "词语搭配",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪个词最适合形容“年糕”？",
    "options": [
      {
        "id": "A",
        "text": "长长的"
      },
      {
        "id": "B",
        "text": "热闹的"
      },
      {
        "id": "C",
        "text": "黑暗的"
      },
      {
        "id": "D",
        "text": "甜甜的"
      }
    ],
    "correctOptionId": "D",
    "source": "第四单元“甜甜的年糕”"
  },
  {
    "id": "DP-005",
    "knowledgePoint": "词语搭配",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一个搭配正确？",
    "options": [
      {
        "id": "A",
        "text": "聪明的小朋友"
      },
      {
        "id": "B",
        "text": "聪明的臭味"
      },
      {
        "id": "C",
        "text": "聪明的海浪"
      },
      {
        "id": "D",
        "text": "聪明的灯火"
      }
    ],
    "correctOptionId": "A",
    "source": "第四单元“聪明”改编"
  },
  {
    "id": "DP-006",
    "knowledgePoint": "词语搭配",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一个搭配正确？",
    "options": [
      {
        "id": "A",
        "text": "珍贵的马路"
      },
      {
        "id": "B",
        "text": "珍贵的友情"
      },
      {
        "id": "C",
        "text": "珍贵的垃圾"
      },
      {
        "id": "D",
        "text": "珍贵的雨声"
      }
    ],
    "correctOptionId": "B",
    "source": "第五单元单元主题"
  },
  {
    "id": "DP-007",
    "knowledgePoint": "词语搭配",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一个搭配正确？",
    "options": [
      {
        "id": "A",
        "text": "刺鼻的阳光"
      },
      {
        "id": "B",
        "text": "刺鼻的笑声"
      },
      {
        "id": "C",
        "text": "刺鼻的臭味"
      },
      {
        "id": "D",
        "text": "刺鼻的时间"
      }
    ],
    "correctOptionId": "C",
    "source": "第十三单元“大王花”"
  },
  {
    "id": "DP-008",
    "knowledgePoint": "词语搭配",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句词语搭配最恰当？",
    "options": [
      {
        "id": "A",
        "text": "顽皮的时间在观察。"
      },
      {
        "id": "B",
        "text": "顽皮的年糕在团圆。"
      },
      {
        "id": "C",
        "text": "顽皮的友情在漂流。"
      },
      {
        "id": "D",
        "text": "顽皮的雾把太阳藏起来。"
      }
    ],
    "correctOptionId": "D",
    "source": "第十一单元《雾》"
  },
  {
    "id": "DP-009",
    "knowledgePoint": "词语搭配",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句词语搭配最恰当？",
    "options": [
      {
        "id": "A",
        "text": "坚硬的椰子被海浪冲到海岸。"
      },
      {
        "id": "B",
        "text": "坚硬的歌声被海浪冲到海岸。"
      },
      {
        "id": "C",
        "text": "坚硬的笑容被海浪冲到海岸。"
      },
      {
        "id": "D",
        "text": "坚硬的时间被海浪冲到海岸。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十三单元“椰子外壳又坚又硬”"
  },
  {
    "id": "DP-010",
    "knowledgePoint": "词语搭配",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句词语搭配最恰当？",
    "options": [
      {
        "id": "A",
        "text": "热闹的宝藏在发芽。"
      },
      {
        "id": "B",
        "text": "热闹的夜市有许多彩灯。"
      },
      {
        "id": "C",
        "text": "热闹的种子在生根。"
      },
      {
        "id": "D",
        "text": "热闹的雾把城市藏起来。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十九单元《美丽的夜市》"
  },
  {
    "id": "XQ-001",
    "knowledgePoint": "情境选词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "同学们在草地上玩（　）。",
    "options": [
      {
        "id": "A",
        "text": "游戏"
      },
      {
        "id": "B",
        "text": "世界"
      },
      {
        "id": "C",
        "text": "教室"
      },
      {
        "id": "D",
        "text": "列车"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本上册第一单元"
  },
  {
    "id": "XQ-002",
    "knowledgePoint": "情境选词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "我们在（　）里上课。",
    "options": [
      {
        "id": "A",
        "text": "列车"
      },
      {
        "id": "B",
        "text": "教室"
      },
      {
        "id": "C",
        "text": "世界"
      },
      {
        "id": "D",
        "text": "游戏"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本上册第一单元"
  },
  {
    "id": "XQ-003",
    "knowledgePoint": "情境选词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "这班（　）将开到我住的地方去。",
    "options": [
      {
        "id": "A",
        "text": "教室"
      },
      {
        "id": "B",
        "text": "世界"
      },
      {
        "id": "C",
        "text": "列车"
      },
      {
        "id": "D",
        "text": "游戏"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本上册第一单元"
  },
  {
    "id": "XQ-004",
    "knowledgePoint": "情境选词",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "我们要慢慢认识这（　）。",
    "options": [
      {
        "id": "A",
        "text": "教室"
      },
      {
        "id": "B",
        "text": "列车"
      },
      {
        "id": "C",
        "text": "游戏"
      },
      {
        "id": "D",
        "text": "世界"
      }
    ],
    "correctOptionId": "D",
    "source": "第一单元及活动本"
  },
  {
    "id": "XQ-005",
    "knowledgePoint": "情境选词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "植物用不同的方法（　）种子。",
    "options": [
      {
        "id": "A",
        "text": "传播"
      },
      {
        "id": "B",
        "text": "观察"
      },
      {
        "id": "C",
        "text": "收藏"
      },
      {
        "id": "D",
        "text": "朗读"
      }
    ],
    "correctOptionId": "A",
    "source": "第十三单元《种子的旅行》"
  },
  {
    "id": "XQ-006",
    "knowledgePoint": "情境选词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "睡莲的种子随着水流（　）。",
    "options": [
      {
        "id": "A",
        "text": "发芽"
      },
      {
        "id": "B",
        "text": "漂动"
      },
      {
        "id": "C",
        "text": "朗读"
      },
      {
        "id": "D",
        "text": "拜年"
      }
    ],
    "correctOptionId": "B",
    "source": "第十三单元及活动本"
  },
  {
    "id": "XQ-007",
    "knowledgePoint": "情境选词",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "为了看清花瓣，妹妹走近去（　）花朵。",
    "options": [
      {
        "id": "A",
        "text": "收拾"
      },
      {
        "id": "B",
        "text": "保护"
      },
      {
        "id": "C",
        "text": "观察"
      },
      {
        "id": "D",
        "text": "练习"
      }
    ],
    "correctOptionId": "C",
    "source": "第十二、十三单元“观察、花朵”"
  },
  {
    "id": "XQ-008",
    "knowledgePoint": "情境选词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "我们应该（　）时间，认真学习。",
    "options": [
      {
        "id": "A",
        "text": "传播"
      },
      {
        "id": "B",
        "text": "漂流"
      },
      {
        "id": "C",
        "text": "收藏"
      },
      {
        "id": "D",
        "text": "珍惜"
      }
    ],
    "correctOptionId": "D",
    "source": "第十七单元“珍惜时间”"
  },
  {
    "id": "XQ-009",
    "knowledgePoint": "情境选词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "奶奶用洗米水浇花，用洗衣服的水洗刷厕所。她这样做是为了什么？",
    "options": [
      {
        "id": "A",
        "text": "节约用水"
      },
      {
        "id": "B",
        "text": "浪费水"
      },
      {
        "id": "C",
        "text": "传播种子"
      },
      {
        "id": "D",
        "text": "收藏宝物"
      }
    ],
    "correctOptionId": "A",
    "source": "第十四单元《家有环保大使》"
  },
  {
    "id": "XQ-010",
    "knowledgePoint": "情境选词",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "求取学问要（　），学习才会有进步。",
    "options": [
      {
        "id": "A",
        "text": "懒惰"
      },
      {
        "id": "B",
        "text": "勤劳"
      },
      {
        "id": "C",
        "text": "慌张"
      },
      {
        "id": "D",
        "text": "顽皮"
      }
    ],
    "correctOptionId": "B",
    "source": "识字四《求取学问要勤劳》"
  },
  {
    "id": "DC-001",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一个是AABB形式的词语？",
    "options": [
      {
        "id": "A",
        "text": "蹦蹦跳跳"
      },
      {
        "id": "B",
        "text": "又红又香"
      },
      {
        "id": "C",
        "text": "一心一意"
      },
      {
        "id": "D",
        "text": "越来越亮"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元"
  },
  {
    "id": "DC-002",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一个是AABB形式的词语？",
    "options": [
      {
        "id": "A",
        "text": "又黑又小"
      },
      {
        "id": "B",
        "text": "叽叽喳喳"
      },
      {
        "id": "C",
        "text": "一阵一阵"
      },
      {
        "id": "D",
        "text": "又大又香"
      }
    ],
    "correctOptionId": "B",
    "source": "第一单元"
  },
  {
    "id": "DC-003",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一个是AABB形式的词语？",
    "options": [
      {
        "id": "A",
        "text": "又臭又懒"
      },
      {
        "id": "B",
        "text": "一起学习"
      },
      {
        "id": "C",
        "text": "嘻嘻哈哈"
      },
      {
        "id": "D",
        "text": "越飞越高"
      }
    ],
    "correctOptionId": "C",
    "source": "第一单元"
  },
  {
    "id": "DC-004",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一个词可以形容“很干净”？",
    "options": [
      {
        "id": "A",
        "text": "又干又净"
      },
      {
        "id": "B",
        "text": "干净干净"
      },
      {
        "id": "C",
        "text": "越来越净"
      },
      {
        "id": "D",
        "text": "干干净净"
      }
    ],
    "correctOptionId": "D",
    "source": "第十四单元"
  },
  {
    "id": "DC-005",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“渔船（　）地从海上回来。”最恰当的是哪个词？",
    "options": [
      {
        "id": "A",
        "text": "三三两两"
      },
      {
        "id": "B",
        "text": "又大又香"
      },
      {
        "id": "C",
        "text": "肥肥大大"
      },
      {
        "id": "D",
        "text": "高高低低"
      }
    ],
    "correctOptionId": "A",
    "source": "第八单元《鱼米之乡——适耕庄》"
  },
  {
    "id": "DC-006",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“垃圾山变得（　），谁都不喜欢。”最恰当的是哪个词？",
    "options": [
      {
        "id": "A",
        "text": "子子孙孙"
      },
      {
        "id": "B",
        "text": "肮肮脏脏"
      },
      {
        "id": "C",
        "text": "红红火火"
      },
      {
        "id": "D",
        "text": "来来回回"
      }
    ],
    "correctOptionId": "B",
    "source": "第十四单元"
  },
  {
    "id": "DC-007",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一个叠词使用正确？",
    "options": [
      {
        "id": "A",
        "text": "甜甜蜜蜜的时间"
      },
      {
        "id": "B",
        "text": "高高低低的年糕"
      },
      {
        "id": "C",
        "text": "许许多多好故事"
      },
      {
        "id": "D",
        "text": "干干净净的臭味"
      }
    ],
    "correctOptionId": "C",
    "source": "第二十二单元《百宝箱》"
  },
  {
    "id": "DC-008",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句用了“又……又……”的格式？",
    "options": [
      {
        "id": "A",
        "text": "河水慢慢地流。"
      },
      {
        "id": "B",
        "text": "同学们一起学习。"
      },
      {
        "id": "C",
        "text": "渔船三三两两回来。"
      },
      {
        "id": "D",
        "text": "芒果又大又香。"
      }
    ],
    "correctOptionId": "D",
    "source": "活动本下册语文乐园四"
  },
  {
    "id": "DC-009",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“木瓜的种子又黑又小”可以换成哪一句？",
    "options": [
      {
        "id": "A",
        "text": "木瓜的种子黑黑的，小小的。"
      },
      {
        "id": "B",
        "text": "木瓜的种子黑小黑小的。"
      },
      {
        "id": "C",
        "text": "木瓜的种子越来越黑。"
      },
      {
        "id": "D",
        "text": "木瓜的种子一黑一小。"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册语文乐园四"
  },
  {
    "id": "DC-010",
    "knowledgePoint": "叠词与词语构成",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句的叠词使用最恰当？",
    "options": [
      {
        "id": "A",
        "text": "臭味香香的。"
      },
      {
        "id": "B",
        "text": "同学们嘻嘻哈哈地笑着。"
      },
      {
        "id": "C",
        "text": "黑暗亮亮的。"
      },
      {
        "id": "D",
        "text": "时间甜甜的。"
      }
    ],
    "correctOptionId": "B",
    "source": "第一单元“嘻嘻哈哈的笑声”"
  },
  {
    "id": "GL-001",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "小鱼想到岸上玩，（　）它不能离开水。",
    "options": [
      {
        "id": "A",
        "text": "但是"
      },
      {
        "id": "B",
        "text": "就"
      },
      {
        "id": "C",
        "text": "因为"
      },
      {
        "id": "D",
        "text": "如果"
      }
    ],
    "correctOptionId": "A",
    "source": "语文乐园二连接句子练习"
  },
  {
    "id": "GL-002",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "小袋鼠没有锄头，（　）不能挖洞种树。",
    "options": [
      {
        "id": "A",
        "text": "但是"
      },
      {
        "id": "B",
        "text": "就"
      },
      {
        "id": "C",
        "text": "还是"
      },
      {
        "id": "D",
        "text": "无论"
      }
    ],
    "correctOptionId": "B",
    "source": "语文乐园二连接句子练习"
  },
  {
    "id": "GL-003",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "（　）天气不好，农民就没有好的收成。",
    "options": [
      {
        "id": "A",
        "text": "虽然"
      },
      {
        "id": "B",
        "text": "但是"
      },
      {
        "id": "C",
        "text": "如果"
      },
      {
        "id": "D",
        "text": "无论"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本下册句式练习"
  },
  {
    "id": "GL-004",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "（　）我们用心观察，（　）能发现神奇的世界。",
    "options": [
      {
        "id": "A",
        "text": "因为、所以"
      },
      {
        "id": "B",
        "text": "虽然、但是"
      },
      {
        "id": "C",
        "text": "无论、还是"
      },
      {
        "id": "D",
        "text": "只要、就"
      }
    ],
    "correctOptionId": "D",
    "source": "第十二单元教材句式"
  },
  {
    "id": "GL-005",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "（　）是小红花，（　）小黄花，都很漂亮。",
    "options": [
      {
        "id": "A",
        "text": "无论、还是"
      },
      {
        "id": "B",
        "text": "因为、所以"
      },
      {
        "id": "C",
        "text": "如果、就"
      },
      {
        "id": "D",
        "text": "虽然、但是"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本上册第十一单元句式"
  },
  {
    "id": "GL-006",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "小鱼（　）想到岸上玩，（　）它不能离开水。",
    "options": [
      {
        "id": "A",
        "text": "因为、所以"
      },
      {
        "id": "B",
        "text": "虽然、但是"
      },
      {
        "id": "C",
        "text": "如果、就"
      },
      {
        "id": "D",
        "text": "无论、还是"
      }
    ],
    "correctOptionId": "B",
    "source": "第五单元内容；活动本连接句子练习"
  },
  {
    "id": "GL-007",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "（　）大家注重环保，（　）城市变得干净。",
    "options": [
      {
        "id": "A",
        "text": "虽然、但是"
      },
      {
        "id": "B",
        "text": "无论、还是"
      },
      {
        "id": "C",
        "text": "因为、所以"
      },
      {
        "id": "D",
        "text": "只要、但是"
      }
    ],
    "correctOptionId": "C",
    "source": "第十四单元环保内容"
  },
  {
    "id": "GL-008",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句连接得最恰当？",
    "options": [
      {
        "id": "A",
        "text": "小鱼不能离开水，因为它想到岸上玩。"
      },
      {
        "id": "B",
        "text": "小鱼不能离开水，无论它想到岸上玩。"
      },
      {
        "id": "C",
        "text": "小鱼不能离开水，就它想到岸上玩。"
      },
      {
        "id": "D",
        "text": "小鱼想到岸上玩，但是它不能离开水。"
      }
    ],
    "correctOptionId": "D",
    "source": "语文乐园二原句式"
  },
  {
    "id": "GL-009",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句使用“如果……就……”是正确的？",
    "options": [
      {
        "id": "A",
        "text": "如果我们珍惜时间，就能完成应该做的事。"
      },
      {
        "id": "B",
        "text": "如果我们珍惜时间，但是完成应该做的事。"
      },
      {
        "id": "C",
        "text": "如果我们珍惜时间，因为完成应该做的事。"
      },
      {
        "id": "D",
        "text": "如果我们珍惜时间，无论完成应该做的事。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十七单元内容；活动本句式标准"
  },
  {
    "id": "GL-010",
    "knowledgePoint": "关联词与连接句子",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句使用“只要……就……”是正确的？",
    "options": [
      {
        "id": "A",
        "text": "只要种子发芽，但是能长出幼苗。"
      },
      {
        "id": "B",
        "text": "只要有适合的条件，种子就能发芽。"
      },
      {
        "id": "C",
        "text": "只要种子发芽，因为能长出幼苗。"
      },
      {
        "id": "D",
        "text": "只要种子发芽，无论能长出幼苗。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十三单元种子生长内容"
  },
  {
    "id": "BD-001",
    "knowledgePoint": "标点符号",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "小鱼兴奋地说：“青蛙大哥，你好（　）”句末应该用什么标点？",
    "options": [
      {
        "id": "A",
        "text": "！"
      },
      {
        "id": "B",
        "text": "。"
      },
      {
        "id": "C",
        "text": "，"
      },
      {
        "id": "D",
        "text": "？"
      }
    ],
    "correctOptionId": "A",
    "source": "第五单元对话与感叹号"
  },
  {
    "id": "BD-002",
    "knowledgePoint": "标点符号",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“岸上什么样（　）”句末应该用什么标点？",
    "options": [
      {
        "id": "A",
        "text": "。"
      },
      {
        "id": "B",
        "text": "？"
      },
      {
        "id": "C",
        "text": "！"
      },
      {
        "id": "D",
        "text": "、"
      }
    ],
    "correctOptionId": "B",
    "source": "第五单元《池塘边的叫声》"
  },
  {
    "id": "BD-003",
    "knowledgePoint": "标点符号",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“我们一起慢慢认识这世界（　）”句末应该用什么标点？",
    "options": [
      {
        "id": "A",
        "text": "？"
      },
      {
        "id": "B",
        "text": "！"
      },
      {
        "id": "C",
        "text": "。"
      },
      {
        "id": "D",
        "text": "："
      }
    ],
    "correctOptionId": "C",
    "source": "第一单元内容"
  },
  {
    "id": "BD-004",
    "knowledgePoint": "标点符号",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“青蛙大哥（　）你在做什么？”称呼后面应该用什么标点？",
    "options": [
      {
        "id": "A",
        "text": "。"
      },
      {
        "id": "B",
        "text": "？"
      },
      {
        "id": "C",
        "text": "！"
      },
      {
        "id": "D",
        "text": "，"
      }
    ],
    "correctOptionId": "D",
    "source": "第五单元对话形式"
  },
  {
    "id": "BD-005",
    "knowledgePoint": "标点符号",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“同学们一起朗读（　）歌唱和游戏。”空格应该用什么标点？",
    "options": [
      {
        "id": "A",
        "text": "、"
      },
      {
        "id": "B",
        "text": "。"
      },
      {
        "id": "C",
        "text": "？"
      },
      {
        "id": "D",
        "text": "！"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元活动内容改编"
  },
  {
    "id": "BD-006",
    "knowledgePoint": "标点符号",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“苹果为什么落到地上，而不是飞向天空呢（　）”应该用什么标点？",
    "options": [
      {
        "id": "A",
        "text": "。"
      },
      {
        "id": "B",
        "text": "？"
      },
      {
        "id": "C",
        "text": "！"
      },
      {
        "id": "D",
        "text": "，"
      }
    ],
    "correctOptionId": "B",
    "source": "第九单元《童年的问号》"
  },
  {
    "id": "BD-007",
    "knowledgePoint": "标点符号",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“多么美丽的夜市啊（　）”应该用什么标点？",
    "options": [
      {
        "id": "A",
        "text": "。"
      },
      {
        "id": "B",
        "text": "？"
      },
      {
        "id": "C",
        "text": "！"
      },
      {
        "id": "D",
        "text": "、"
      }
    ],
    "correctOptionId": "C",
    "source": "第十九单元内容改编"
  },
  {
    "id": "BD-008",
    "knowledgePoint": "标点符号",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句的标点使用正确？",
    "options": [
      {
        "id": "A",
        "text": "小鱼问。“岸上什么样？”"
      },
      {
        "id": "B",
        "text": "小鱼问！“岸上什么样。”"
      },
      {
        "id": "C",
        "text": "小鱼问？“岸上什么样！”"
      },
      {
        "id": "D",
        "text": "小鱼问：“岸上什么样？”"
      }
    ],
    "correctOptionId": "D",
    "source": "第五单元对话形式"
  },
  {
    "id": "BD-009",
    "knowledgePoint": "标点符号",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句的标点使用正确？",
    "options": [
      {
        "id": "A",
        "text": "老师说：“我们要珍惜时间。”"
      },
      {
        "id": "B",
        "text": "老师说？“我们要珍惜时间。”"
      },
      {
        "id": "C",
        "text": "老师说。“我们要珍惜时间？”"
      },
      {
        "id": "D",
        "text": "老师说！“我们要珍惜时间，”"
      }
    ],
    "correctOptionId": "A",
    "source": "第十七单元“珍惜时间”；教材对话形式"
  },
  {
    "id": "BD-010",
    "knowledgePoint": "标点符号",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句的标点使用正确？",
    "options": [
      {
        "id": "A",
        "text": "夜市里有锣鼓。筷子，玩具和糕点。"
      },
      {
        "id": "B",
        "text": "夜市里有锣鼓、筷子、玩具和糕点。"
      },
      {
        "id": "C",
        "text": "夜市里有锣鼓？筷子？玩具和糕点。"
      },
      {
        "id": "D",
        "text": "夜市里有锣鼓！筷子！玩具和糕点。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十九单元夜市内容"
  },
  {
    "id": "WZ-001",
    "knowledgePoint": "完整句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一句是完整的句子？",
    "options": [
      {
        "id": "A",
        "text": "同学们在操场上游戏。"
      },
      {
        "id": "B",
        "text": "在操场上。"
      },
      {
        "id": "C",
        "text": "活泼的同学们。"
      },
      {
        "id": "D",
        "text": "开心地。"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元内容"
  },
  {
    "id": "WZ-002",
    "knowledgePoint": "完整句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一句是完整的句子？",
    "options": [
      {
        "id": "A",
        "text": "美丽的荷花。"
      },
      {
        "id": "B",
        "text": "蜻蜓飞到荷叶上。"
      },
      {
        "id": "C",
        "text": "在水面上。"
      },
      {
        "id": "D",
        "text": "一片大荷叶。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十二单元内容"
  },
  {
    "id": "WZ-003",
    "knowledgePoint": "完整句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一句是完整的句子？",
    "options": [
      {
        "id": "A",
        "text": "又大又香的芒果。"
      },
      {
        "id": "B",
        "text": "果园里的芒果。"
      },
      {
        "id": "C",
        "text": "芒果挂满枝头。"
      },
      {
        "id": "D",
        "text": "在果园里。"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本下册语文乐园四"
  },
  {
    "id": "WZ-004",
    "knowledgePoint": "完整句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一句是完整的句子？",
    "options": [
      {
        "id": "A",
        "text": "一盏盏明亮的彩灯。"
      },
      {
        "id": "B",
        "text": "热闹的夜市。"
      },
      {
        "id": "C",
        "text": "夜市里的人们。"
      },
      {
        "id": "D",
        "text": "夜市里有许多彩灯。"
      }
    ],
    "correctOptionId": "D",
    "source": "第十九单元内容"
  },
  {
    "id": "WZ-005",
    "knowledgePoint": "完整句子",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一句把“谁、在哪里、做什么”说完整？",
    "options": [
      {
        "id": "A",
        "text": "同学们在教室里朗读课文。"
      },
      {
        "id": "B",
        "text": "在教室里朗读。"
      },
      {
        "id": "C",
        "text": "同学们在教室里。"
      },
      {
        "id": "D",
        "text": "朗读课文。"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元校园生活"
  },
  {
    "id": "WZ-006",
    "knowledgePoint": "完整句子",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一句把事情说得最完整？",
    "options": [
      {
        "id": "A",
        "text": "种子旅行。"
      },
      {
        "id": "B",
        "text": "椰子的种子随着水流漂动。"
      },
      {
        "id": "C",
        "text": "随着水流。"
      },
      {
        "id": "D",
        "text": "坚硬的椰子。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十三单元《种子的旅行》"
  },
  {
    "id": "WZ-007",
    "knowledgePoint": "完整句子",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一句意思完整而且通顺？",
    "options": [
      {
        "id": "A",
        "text": "雾把藏起来城市。"
      },
      {
        "id": "B",
        "text": "城市雾把藏起来。"
      },
      {
        "id": "C",
        "text": "雾把城市藏起来。"
      },
      {
        "id": "D",
        "text": "藏起来雾城市。"
      }
    ],
    "correctOptionId": "C",
    "source": "第十一单元《雾》"
  },
  {
    "id": "WZ-008",
    "knowledgePoint": "完整句子",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句把时间、人物、地点和事情说得最完整？",
    "options": [
      {
        "id": "A",
        "text": "同学们游戏。"
      },
      {
        "id": "B",
        "text": "在校园里游戏。"
      },
      {
        "id": "C",
        "text": "课间休息时很热闹。"
      },
      {
        "id": "D",
        "text": "课间休息时，同学们在校园里开心地游戏。"
      }
    ],
    "correctOptionId": "D",
    "source": "第一单元《热闹的乐园》"
  },
  {
    "id": "WZ-009",
    "knowledgePoint": "完整句子",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句最完整地介绍一种花？",
    "options": [
      {
        "id": "A",
        "text": "这种花会发出臭味，吸引苍蝇传播花粉。"
      },
      {
        "id": "B",
        "text": "这种花很大。"
      },
      {
        "id": "C",
        "text": "发出臭味。"
      },
      {
        "id": "D",
        "text": "苍蝇传播花粉。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十三单元“臭味、传播花粉”改编"
  },
  {
    "id": "WZ-010",
    "knowledgePoint": "完整句子",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句最完整地说明环保行动？",
    "options": [
      {
        "id": "A",
        "text": "把铁片和纸张。"
      },
      {
        "id": "B",
        "text": "人们把不要的铁片、玻璃和纸张送到工厂加工。"
      },
      {
        "id": "C",
        "text": "送到工厂。"
      },
      {
        "id": "D",
        "text": "有价值的宝物。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十四单元《垃圾山消失了》"
  },
  {
    "id": "KX-001",
    "knowledgePoint": "扩写句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一句比“同学们游戏”更具体？",
    "options": [
      {
        "id": "A",
        "text": "活泼的同学们开心地游戏。"
      },
      {
        "id": "B",
        "text": "同学们。"
      },
      {
        "id": "C",
        "text": "游戏。"
      },
      {
        "id": "D",
        "text": "开心的。"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元及活动本扩写"
  },
  {
    "id": "KX-002",
    "knowledgePoint": "扩写句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一句比“花儿开放”更具体？",
    "options": [
      {
        "id": "A",
        "text": "花儿。"
      },
      {
        "id": "B",
        "text": "万紫千红的花儿在阳光下开放。"
      },
      {
        "id": "C",
        "text": "开放。"
      },
      {
        "id": "D",
        "text": "阳光下。"
      }
    ],
    "correctOptionId": "B",
    "source": "第一单元原文"
  },
  {
    "id": "KX-003",
    "knowledgePoint": "扩写句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一句比“小鱼游”更具体？",
    "options": [
      {
        "id": "A",
        "text": "小鱼。"
      },
      {
        "id": "B",
        "text": "在水里。"
      },
      {
        "id": "C",
        "text": "小鱼在池塘里自由地游来游去。"
      },
      {
        "id": "D",
        "text": "游来游去。"
      }
    ],
    "correctOptionId": "C",
    "source": "第五单元池塘情境及教材教学提示"
  },
  {
    "id": "KX-004",
    "knowledgePoint": "扩写句子",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哪一句比“彩灯亮了”更具体？",
    "options": [
      {
        "id": "A",
        "text": "彩灯。"
      },
      {
        "id": "B",
        "text": "亮了。"
      },
      {
        "id": "C",
        "text": "夜市里。"
      },
      {
        "id": "D",
        "text": "夜市里五颜六色的彩灯亮了。"
      }
    ],
    "correctOptionId": "D",
    "source": "第十九单元夜市内容"
  },
  {
    "id": "KX-005",
    "knowledgePoint": "扩写句子",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "把“荷花的种子在水面漂流”加上“成熟”，哪一句正确？",
    "options": [
      {
        "id": "A",
        "text": "成熟的荷花种子在水面漂流。"
      },
      {
        "id": "B",
        "text": "荷花的种子成熟在水面漂流。"
      },
      {
        "id": "C",
        "text": "荷花的种子在成熟水面漂流。"
      },
      {
        "id": "D",
        "text": "荷花成熟的种子水面在漂流。"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册语文乐园五"
  },
  {
    "id": "KX-006",
    "knowledgePoint": "扩写句子",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "把“椰子树的果实像小船”加上“坚硬”，哪一句正确？",
    "options": [
      {
        "id": "A",
        "text": "椰子树像坚硬的果实小船。"
      },
      {
        "id": "B",
        "text": "椰子树的果实又坚又硬，像只小船。"
      },
      {
        "id": "C",
        "text": "椰子树的坚硬像果实小船。"
      },
      {
        "id": "D",
        "text": "椰子树的果实坚硬小船像。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十三单元及活动本下册语文乐园五"
  },
  {
    "id": "KX-007",
    "knowledgePoint": "扩写句子",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一句加入了“什么时候”和“在哪里”？",
    "options": [
      {
        "id": "A",
        "text": "同学们玩游戏。"
      },
      {
        "id": "B",
        "text": "同学们开心地玩游戏。"
      },
      {
        "id": "C",
        "text": "课间休息时，同学们在校园里玩游戏。"
      },
      {
        "id": "D",
        "text": "活泼的同学们玩游戏。"
      }
    ],
    "correctOptionId": "C",
    "source": "活动本上册第一单元写话训练"
  },
  {
    "id": "KX-008",
    "knowledgePoint": "扩写句子",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句扩写得最恰当？",
    "options": [
      {
        "id": "A",
        "text": "花儿发出美丽的臭味。"
      },
      {
        "id": "B",
        "text": "花儿发出甜甜的臭味。"
      },
      {
        "id": "C",
        "text": "花儿发出明亮的臭味。"
      },
      {
        "id": "D",
        "text": "花儿发出刺鼻的臭味，吸引苍蝇传播花粉。"
      }
    ],
    "correctOptionId": "D",
    "source": "第十三单元“刺鼻、传播花粉”改编"
  },
  {
    "id": "KX-009",
    "knowledgePoint": "扩写句子",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句把“雾藏起城市”扩写得最清楚？",
    "options": [
      {
        "id": "A",
        "text": "顽皮的雾把城市、房屋和街道都藏起来。"
      },
      {
        "id": "B",
        "text": "雾城市。"
      },
      {
        "id": "C",
        "text": "顽皮的城市藏起雾。"
      },
      {
        "id": "D",
        "text": "房屋和街道。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十一单元《雾》"
  },
  {
    "id": "KX-010",
    "knowledgePoint": "扩写句子",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句把“小朋友做功课”扩写得最完整？",
    "options": [
      {
        "id": "A",
        "text": "小朋友功课。"
      },
      {
        "id": "B",
        "text": "快要开学了，小朋友赶快完成华文写话。"
      },
      {
        "id": "C",
        "text": "华文写话。"
      },
      {
        "id": "D",
        "text": "小朋友赶快。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十七单元“时间、写话”改编"
  },
  {
    "id": "BY-001",
    "knowledgePoint": "比喻句",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“校园像一座乐园”把校园比作什么？",
    "options": [
      {
        "id": "A",
        "text": "乐园"
      },
      {
        "id": "B",
        "text": "海浪"
      },
      {
        "id": "C",
        "text": "列车"
      },
      {
        "id": "D",
        "text": "太阳"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元"
  },
  {
    "id": "BY-002",
    "knowledgePoint": "比喻句",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“笑声像海浪”把笑声比作什么？",
    "options": [
      {
        "id": "A",
        "text": "阳光"
      },
      {
        "id": "B",
        "text": "海浪"
      },
      {
        "id": "C",
        "text": "风筝"
      },
      {
        "id": "D",
        "text": "彩灯"
      }
    ],
    "correctOptionId": "B",
    "source": "第一单元"
  },
  {
    "id": "BY-003",
    "knowledgePoint": "比喻句",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“家，是一轮太阳”把家比作什么？",
    "options": [
      {
        "id": "A",
        "text": "彩虹"
      },
      {
        "id": "B",
        "text": "星星"
      },
      {
        "id": "C",
        "text": "太阳"
      },
      {
        "id": "D",
        "text": "小船"
      }
    ],
    "correctOptionId": "C",
    "source": "第三单元及活动本"
  },
  {
    "id": "BY-004",
    "knowledgePoint": "比喻句",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“椰子树的果实像只小船”把果实比作什么？",
    "options": [
      {
        "id": "A",
        "text": "太阳"
      },
      {
        "id": "B",
        "text": "雨伞"
      },
      {
        "id": "C",
        "text": "彩虹"
      },
      {
        "id": "D",
        "text": "小船"
      }
    ],
    "correctOptionId": "D",
    "source": "活动本下册语文乐园五"
  },
  {
    "id": "BY-005",
    "knowledgePoint": "比喻句",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“夜市的灯火像星星一样明亮”中，灯火像什么？",
    "options": [
      {
        "id": "A",
        "text": "星星"
      },
      {
        "id": "B",
        "text": "花朵"
      },
      {
        "id": "C",
        "text": "海浪"
      },
      {
        "id": "D",
        "text": "叶子"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册语文乐园七"
  },
  {
    "id": "BY-006",
    "knowledgePoint": "比喻句",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“这座桥像彩虹一样美丽”中，桥像什么？",
    "options": [
      {
        "id": "A",
        "text": "星星"
      },
      {
        "id": "B",
        "text": "彩虹"
      },
      {
        "id": "C",
        "text": "花朵"
      },
      {
        "id": "D",
        "text": "小船"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本下册语文乐园七"
  },
  {
    "id": "BY-007",
    "knowledgePoint": "比喻句",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "鱼儿说：“荷叶是我的雨伞。”荷叶像什么？",
    "options": [
      {
        "id": "A",
        "text": "机场"
      },
      {
        "id": "B",
        "text": "唱片"
      },
      {
        "id": "C",
        "text": "雨伞"
      },
      {
        "id": "D",
        "text": "彩灯"
      }
    ],
    "correctOptionId": "C",
    "source": "第十二单元《荷叶》"
  },
  {
    "id": "BY-008",
    "knowledgePoint": "比喻句",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句是比喻句？",
    "options": [
      {
        "id": "A",
        "text": "同学们在校园里游戏。"
      },
      {
        "id": "B",
        "text": "校园里有一座乐园。"
      },
      {
        "id": "C",
        "text": "同学们喜欢乐园。"
      },
      {
        "id": "D",
        "text": "校园像一座热闹的乐园。"
      }
    ],
    "correctOptionId": "D",
    "source": "第一单元句式"
  },
  {
    "id": "BY-009",
    "knowledgePoint": "比喻句",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句比喻最恰当？",
    "options": [
      {
        "id": "A",
        "text": "夜市的彩灯像星星一样明亮。"
      },
      {
        "id": "B",
        "text": "夜市的彩灯像臭味一样明亮。"
      },
      {
        "id": "C",
        "text": "夜市的彩灯像时间一样明亮。"
      },
      {
        "id": "D",
        "text": "夜市的彩灯像功课一样明亮。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十九单元；语文乐园七"
  },
  {
    "id": "BY-010",
    "knowledgePoint": "比喻句",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句比喻最恰当？",
    "options": [
      {
        "id": "A",
        "text": "大桥像声音一样弯弯的。"
      },
      {
        "id": "B",
        "text": "弯弯的大桥像一道彩虹。"
      },
      {
        "id": "C",
        "text": "大桥像臭味一样美丽。"
      },
      {
        "id": "D",
        "text": "大桥像时间一样长大。"
      }
    ],
    "correctOptionId": "B",
    "source": "第二十一单元桥；语文乐园七"
  },
  {
    "id": "JS-001",
    "knowledgePoint": "句式转换",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“鲜花又红又香”可以换成哪一句？",
    "options": [
      {
        "id": "A",
        "text": "鲜花红红的，香香的。"
      },
      {
        "id": "B",
        "text": "鲜花又红红又香香。"
      },
      {
        "id": "C",
        "text": "鲜花红香红香的。"
      },
      {
        "id": "D",
        "text": "鲜花越来越红香。"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册语文乐园四"
  },
  {
    "id": "JS-002",
    "knowledgePoint": "句式转换",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“芒果又大又香”可以换成哪一句？",
    "options": [
      {
        "id": "A",
        "text": "芒果又大大又香香。"
      },
      {
        "id": "B",
        "text": "芒果大大的，香香的。"
      },
      {
        "id": "C",
        "text": "芒果大香大香的。"
      },
      {
        "id": "D",
        "text": "芒果越来越大香。"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本下册语文乐园四"
  },
  {
    "id": "JS-003",
    "knowledgePoint": "句式转换",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“雾把太阳藏起来”可以换成哪一句？",
    "options": [
      {
        "id": "A",
        "text": "雾被太阳藏起来。"
      },
      {
        "id": "B",
        "text": "太阳把雾藏起来。"
      },
      {
        "id": "C",
        "text": "太阳被雾藏起来。"
      },
      {
        "id": "D",
        "text": "太阳和雾都藏起来。"
      }
    ],
    "correctOptionId": "C",
    "source": "第十一单元《雾》"
  },
  {
    "id": "JS-004",
    "knowledgePoint": "句式转换",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "“风吹走了种子”可以换成哪一句？",
    "options": [
      {
        "id": "A",
        "text": "风被种子吹走了。"
      },
      {
        "id": "B",
        "text": "种子把风吹走了。"
      },
      {
        "id": "C",
        "text": "风和种子走了。"
      },
      {
        "id": "D",
        "text": "种子被风吹走了。"
      }
    ],
    "correctOptionId": "D",
    "source": "第十三单元种子传播内容"
  },
  {
    "id": "JS-005",
    "knowledgePoint": "句式转换",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一句和“小鱼不能离开水”意思相同？",
    "options": [
      {
        "id": "A",
        "text": "小鱼离开水会干死。"
      },
      {
        "id": "B",
        "text": "小鱼离开水也能生活。"
      },
      {
        "id": "C",
        "text": "小鱼喜欢离开水。"
      },
      {
        "id": "D",
        "text": "小鱼在岸上生活。"
      }
    ],
    "correctOptionId": "A",
    "source": "第五单元《池塘边的叫声》"
  },
  {
    "id": "JS-006",
    "knowledgePoint": "句式转换",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "“垃圾山很脏，谁都受不了”可以换成哪一句？",
    "options": [
      {
        "id": "A",
        "text": "垃圾山虽然很脏，谁都喜欢。"
      },
      {
        "id": "B",
        "text": "垃圾山脏得谁都受不了。"
      },
      {
        "id": "C",
        "text": "垃圾山很干净，谁都受不了。"
      },
      {
        "id": "D",
        "text": "谁都把垃圾山变脏。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十四单元及活动本"
  },
  {
    "id": "JS-007",
    "knowledgePoint": "句式转换",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "哪一句和“只要用心观察，就能发现”意思相同？",
    "options": [
      {
        "id": "A",
        "text": "因为不用观察，所以能发现。"
      },
      {
        "id": "B",
        "text": "虽然用心观察，但是不能发现。"
      },
      {
        "id": "C",
        "text": "我们用心地观察，就能发现神奇的世界。"
      },
      {
        "id": "D",
        "text": "无论是否观察，都一定能发现。"
      }
    ],
    "correctOptionId": "C",
    "source": "第十二单元观察主题"
  },
  {
    "id": "JS-008",
    "knowledgePoint": "句式转换",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句把两个短句合成得最好？“小朋友还没做完功课。小朋友心里很着急。”",
    "options": [
      {
        "id": "A",
        "text": "小朋友心里很着急，但是做完功课。"
      },
      {
        "id": "B",
        "text": "小朋友做完功课，所以很着急。"
      },
      {
        "id": "C",
        "text": "小朋友心里不着急，也没做功课。"
      },
      {
        "id": "D",
        "text": "小朋友还没做完功课，心里很着急。"
      }
    ],
    "correctOptionId": "D",
    "source": "活动本下册语文乐园六改编"
  },
  {
    "id": "JS-009",
    "knowledgePoint": "句式转换",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "哪一句把两个短句合成得最好？“小朋友红着脸儿。小朋友羞得说不出话来。”",
    "options": [
      {
        "id": "A",
        "text": "小朋友红着脸儿，羞得说不出话来。"
      },
      {
        "id": "B",
        "text": "小朋友说不出话来，但是不害羞。"
      },
      {
        "id": "C",
        "text": "小朋友红着脸儿，所以不停说话。"
      },
      {
        "id": "D",
        "text": "小朋友没有红着脸儿，也没有害羞。"
      }
    ],
    "correctOptionId": "A",
    "source": "活动本下册语文乐园六改编"
  },
  {
    "id": "JS-010",
    "knowledgePoint": "句式转换",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "“天气不好，农民没有好的收成。”<br>改成“如果……就……”，哪一句是正确的？",
    "options": [
      {
        "id": "A",
        "text": "如果农民有好的收成，天气就不好。"
      },
      {
        "id": "B",
        "text": "如果天气不好，农民就没有好的收成。"
      },
      {
        "id": "C",
        "text": "如果天气不好，但是农民有好的收成。"
      },
      {
        "id": "D",
        "text": "如果农民不好，天气就没有收成。"
      }
    ],
    "correctOptionId": "B",
    "source": "活动本下册句式练习"
  },
  {
    "id": "RD-001",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：早上，妹妹把字典放进书包，把画纸留在书桌上。<br>妹妹把什么放进书包？",
    "options": [
      {
        "id": "A",
        "text": "字典"
      },
      {
        "id": "B",
        "text": "画纸"
      },
      {
        "id": "C",
        "text": "台灯"
      },
      {
        "id": "D",
        "text": "笔筒"
      }
    ],
    "correctOptionId": "A",
    "source": "识字一“字典、书桌、台灯、笔筒”；句式重组"
  },
  {
    "id": "RD-002",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：课间，同学们先在操场游戏，然后回教室朗读。<br>同学们在哪里朗读？",
    "options": [
      {
        "id": "A",
        "text": "操场"
      },
      {
        "id": "B",
        "text": "教室"
      },
      {
        "id": "C",
        "text": "渔村"
      },
      {
        "id": "D",
        "text": "夜市"
      }
    ],
    "correctOptionId": "B",
    "source": "第一单元“操场、游戏、教室、朗读”；句式重组"
  },
  {
    "id": "RD-003",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：桌上有一盏台灯。台灯旁边是笔筒，三支笔都在笔筒里。<br>三支笔在哪里？",
    "options": [
      {
        "id": "A",
        "text": "书包里"
      },
      {
        "id": "B",
        "text": "台灯下"
      },
      {
        "id": "C",
        "text": "笔筒里"
      },
      {
        "id": "D",
        "text": "书橱里"
      }
    ],
    "correctOptionId": "C",
    "source": "识字一“台灯、笔筒、书包、书橱”；句式重组"
  },
  {
    "id": "RD-004",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：雨停后，小华收起雨伞，走到池塘边观察荷花。<br>小华观察什么？",
    "options": [
      {
        "id": "A",
        "text": "海浪"
      },
      {
        "id": "B",
        "text": "彩灯"
      },
      {
        "id": "C",
        "text": "风筝"
      },
      {
        "id": "D",
        "text": "荷花"
      }
    ],
    "correctOptionId": "D",
    "source": "第十二单元“观察、荷花、池塘”；教材词语重组"
  },
  {
    "id": "RD-005",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "阅读：傍晚，渔船从海上回来。工人马上把鱼虾分门别类。<br>渔船什么时候回来？",
    "options": [
      {
        "id": "A",
        "text": "傍晚"
      },
      {
        "id": "B",
        "text": "早上"
      },
      {
        "id": "C",
        "text": "课间"
      },
      {
        "id": "D",
        "text": "半夜"
      }
    ],
    "correctOptionId": "A",
    "source": "第八单元“傍晚、渔船、鱼虾、分门别类”"
  },
  {
    "id": "RD-006",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "阅读：蓝色箱子收纸张，绿色箱子收玻璃。小明把报纸放进蓝色箱子。<br>蓝色箱子收什么？",
    "options": [
      {
        "id": "A",
        "text": "玻璃"
      },
      {
        "id": "B",
        "text": "纸张"
      },
      {
        "id": "C",
        "text": "玩具"
      },
      {
        "id": "D",
        "text": "糕点"
      }
    ],
    "correctOptionId": "B",
    "source": "第十四单元“纸张、玻璃、旧物分类”；情境重组"
  },
  {
    "id": "RD-007",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "阅读：小丽先读故事，再把最喜欢的一段抄进本子，最后画一幅画。<br>读完故事后，小丽先做什么？",
    "options": [
      {
        "id": "A",
        "text": "收拾书包"
      },
      {
        "id": "B",
        "text": "朗读课文"
      },
      {
        "id": "C",
        "text": "抄进本子"
      },
      {
        "id": "D",
        "text": "观察花朵"
      }
    ],
    "correctOptionId": "C",
    "source": "第二、十七单元“故事、抄、本子、画”；句式重组"
  },
  {
    "id": "RD-008",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "阅读：夜市左边卖糕点和晶露，右边卖玩具和风筝。妹妹想买风筝。<br>妹妹应该走向哪一边？",
    "options": [
      {
        "id": "A",
        "text": "教室"
      },
      {
        "id": "B",
        "text": "操场"
      },
      {
        "id": "C",
        "text": "左边"
      },
      {
        "id": "D",
        "text": "右边"
      }
    ],
    "correctOptionId": "D",
    "source": "第十九单元“夜市、糕点、晶露、玩具、风筝”；情境重组"
  },
  {
    "id": "RD-009",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "阅读：桌上有年画、字典、报纸和一盏台灯。哥哥拿走字典后，桌上还剩三样东西。<br>哪一样已经不在桌上？",
    "options": [
      {
        "id": "A",
        "text": "字典"
      },
      {
        "id": "B",
        "text": "年画"
      },
      {
        "id": "C",
        "text": "报纸"
      },
      {
        "id": "D",
        "text": "台灯"
      }
    ],
    "correctOptionId": "A",
    "source": "识字一及第四单元“年画、字典、报纸、台灯”；情境重组"
  },
  {
    "id": "RD-010",
    "knowledgePoint": "阅读理解：寻找明确信息",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "阅读：第一组观察荷花，第二组观察种子，第三组观察海浪。小芳在第二组。<br>小芳观察什么？",
    "options": [
      {
        "id": "A",
        "text": "荷花"
      },
      {
        "id": "B",
        "text": "种子"
      },
      {
        "id": "C",
        "text": "海浪"
      },
      {
        "id": "D",
        "text": "彩灯"
      }
    ],
    "correctOptionId": "B",
    "source": "第十二、十三单元“观察、荷花、种子”；情境重组"
  },
  {
    "id": "YG-001",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：下雨了，小芳撑着雨伞回家，衣服没有湿。<br>小芳的衣服为什么没有湿？",
    "options": [
      {
        "id": "A",
        "text": "她撑着雨伞。"
      },
      {
        "id": "B",
        "text": "她跑得很快。"
      },
      {
        "id": "C",
        "text": "她穿着校服。"
      },
      {
        "id": "D",
        "text": "她带着字典。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十二单元“雨伞”；教材生活情境重组"
  },
  {
    "id": "YG-002",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：弟弟把散在地上的玩具收拾好，房间变得干干净净。<br>房间为什么变干净？",
    "options": [
      {
        "id": "A",
        "text": "姐姐打开台灯。"
      },
      {
        "id": "B",
        "text": "弟弟收拾了玩具。"
      },
      {
        "id": "C",
        "text": "妹妹画了一幅画。"
      },
      {
        "id": "D",
        "text": "奶奶买了年糕。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十四单元“收拾、干干净净”；情境重组"
  },
  {
    "id": "YG-003",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：同学们天天认真朗读，现在读书声又清楚又响亮。<br>读书声为什么有进步？",
    "options": [
      {
        "id": "A",
        "text": "教室变大了。"
      },
      {
        "id": "B",
        "text": "课本变漂亮了。"
      },
      {
        "id": "C",
        "text": "同学们天天认真朗读。"
      },
      {
        "id": "D",
        "text": "操场上很热闹。"
      }
    ],
    "correctOptionId": "C",
    "source": "第一单元“朗读、朗朗的读书声”；句式重组"
  },
  {
    "id": "YG-004",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：小树几天没有水，叶子都弯下来了。<br>叶子为什么弯下来？",
    "options": [
      {
        "id": "A",
        "text": "风筝飞得太高。"
      },
      {
        "id": "B",
        "text": "阳光来到教室。"
      },
      {
        "id": "C",
        "text": "小鸟停在树上。"
      },
      {
        "id": "D",
        "text": "小树几天没有水。"
      }
    ],
    "correctOptionId": "D",
    "source": "第五单元“浇水、种树”；情境重组"
  },
  {
    "id": "YG-005",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "阅读：太阳出来了，雾慢慢消失，房屋和街道又出现了。<br>房屋和街道为什么又出现？",
    "options": [
      {
        "id": "A",
        "text": "雾消失了。"
      },
      {
        "id": "B",
        "text": "彩灯亮了。"
      },
      {
        "id": "C",
        "text": "夜市开了。"
      },
      {
        "id": "D",
        "text": "海浪来了。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十一单元“太阳、雾、消失、出现”"
  },
  {
    "id": "YG-006",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "阅读：小明用心观察，发现荷叶下有一条小鱼。<br>小明为什么能发现小鱼？",
    "options": [
      {
        "id": "A",
        "text": "他听见读书声。"
      },
      {
        "id": "B",
        "text": "他用心观察。"
      },
      {
        "id": "C",
        "text": "他收拾了书包。"
      },
      {
        "id": "D",
        "text": "他跑到夜市。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十二单元“用心观察、发现”；句式重组"
  },
  {
    "id": "YG-007",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "阅读：夜市里一盏盏彩灯都亮了，街道变得十分明亮。<br>街道为什么变明亮？",
    "options": [
      {
        "id": "A",
        "text": "太阳出来了。"
      },
      {
        "id": "B",
        "text": "花儿开放了。"
      },
      {
        "id": "C",
        "text": "彩灯都亮了。"
      },
      {
        "id": "D",
        "text": "渔船回来了。"
      }
    ],
    "correctOptionId": "C",
    "source": "第十九、二十单元“夜市、彩灯、明亮”；情境重组"
  },
  {
    "id": "YG-008",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "阅读：奶奶用洗米水浇花，又用洗衣服的水洗刷厕所，所以家里省下不少水。<br>家里为什么能省水？",
    "options": [
      {
        "id": "A",
        "text": "奶奶每天买水。"
      },
      {
        "id": "B",
        "text": "奶奶没有洗衣服。"
      },
      {
        "id": "C",
        "text": "奶奶不让大家喝水。"
      },
      {
        "id": "D",
        "text": "奶奶把用过的水再利用。"
      }
    ],
    "correctOptionId": "D",
    "source": "第十四单元“珍惜水、洗米水、洗刷厕所”"
  },
  {
    "id": "YG-009",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "阅读：第一组把纸张送去加工，第二组把玻璃送去加工。教室里的旧物少了，也更干净了。<br>教室为什么更干净？",
    "options": [
      {
        "id": "A",
        "text": "同学们把旧物分类送去加工。"
      },
      {
        "id": "B",
        "text": "老师关上教室的门。"
      },
      {
        "id": "C",
        "text": "大家把旧物藏在书桌下。"
      },
      {
        "id": "D",
        "text": "同学们都到操场游戏。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十四单元“纸张、玻璃、加工、干净”；情境重组"
  },
  {
    "id": "YG-010",
    "knowledgePoint": "阅读理解：原因与结果",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "阅读：小华先完成华文写话，才到操场玩。他不慌不忙，还能准时回家。<br>小华为什么不慌张？",
    "options": [
      {
        "id": "A",
        "text": "他没有带课本。"
      },
      {
        "id": "B",
        "text": "他先完成该做的事。"
      },
      {
        "id": "C",
        "text": "他把功课交给朋友。"
      },
      {
        "id": "D",
        "text": "他一直在操场游戏。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十七单元“完成写话、利用时间、慌张”；情境重组"
  },
  {
    "id": "SX-001",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：小华先打开书包，接着拿出课本，最后开始朗读。<br>打开书包后，小华接着做什么？",
    "options": [
      {
        "id": "A",
        "text": "拿出课本。"
      },
      {
        "id": "B",
        "text": "收拾玩具。"
      },
      {
        "id": "C",
        "text": "走到夜市。"
      },
      {
        "id": "D",
        "text": "观察荷花。"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元“书包、课本、朗读”；句式重组"
  },
  {
    "id": "SX-002",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：同学们先挖好树洞，接着放进小树，最后为小树浇水。<br>挖好树洞后，接着做什么？",
    "options": [
      {
        "id": "A",
        "text": "收集种子。"
      },
      {
        "id": "B",
        "text": "放进小树。"
      },
      {
        "id": "C",
        "text": "画一幅画。"
      },
      {
        "id": "D",
        "text": "搬走肥料。"
      }
    ],
    "correctOptionId": "B",
    "source": "第五单元“挖洞、种树、浇水”；情境重组"
  },
  {
    "id": "SX-003",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：妹妹先画大马路，再画两边的房屋，最后画上大树。<br>画完大马路后，她画什么？",
    "options": [
      {
        "id": "A",
        "text": "大树"
      },
      {
        "id": "B",
        "text": "海浪"
      },
      {
        "id": "C",
        "text": "房屋"
      },
      {
        "id": "D",
        "text": "彩灯"
      }
    ],
    "correctOptionId": "C",
    "source": "第二单元“画马路、房屋、大树”；句式重组"
  },
  {
    "id": "SX-004",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "阅读：小明先把纸张分类，再送到工厂，最后纸张被加工成有用的东西。<br>小明把纸张分类后，接着做什么？",
    "options": [
      {
        "id": "A",
        "text": "放进书包。"
      },
      {
        "id": "B",
        "text": "拿到夜市。"
      },
      {
        "id": "C",
        "text": "留在地上。"
      },
      {
        "id": "D",
        "text": "送到工厂。"
      }
    ],
    "correctOptionId": "D",
    "source": "第十四单元“纸张、分类、工厂、加工”；情境重组"
  },
  {
    "id": "SX-005",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "阅读：雨先停了，接着太阳出来，最后同学们到操场游戏。<br>第二件发生的事是什么？",
    "options": [
      {
        "id": "A",
        "text": "太阳出来。"
      },
      {
        "id": "B",
        "text": "雨停了。"
      },
      {
        "id": "C",
        "text": "同学们游戏。"
      },
      {
        "id": "D",
        "text": "花儿开放。"
      }
    ],
    "correctOptionId": "A",
    "source": "第一、十一单元“雨、太阳、操场、游戏”；句式重组"
  },
  {
    "id": "SX-006",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "阅读：渔船回到渔村后，工人先为鱼虾称重，再把鱼虾分门别类。<br>称重后，工人接着做什么？",
    "options": [
      {
        "id": "A",
        "text": "驾驶渔船。"
      },
      {
        "id": "B",
        "text": "把鱼虾分门别类。"
      },
      {
        "id": "C",
        "text": "到稻田留影。"
      },
      {
        "id": "D",
        "text": "回家朗读。"
      }
    ],
    "correctOptionId": "B",
    "source": "第八单元“渔船、称重、分门别类”；句式重组"
  },
  {
    "id": "SX-007",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "阅读：种子落进泥土。雨水把泥土浇湿，过了一些日子，种子发芽了。<br>泥土变湿后，接着发生什么事？",
    "options": [
      {
        "id": "A",
        "text": "种子飞走了。"
      },
      {
        "id": "B",
        "text": "泥土变干净。"
      },
      {
        "id": "C",
        "text": "种子发芽了。"
      },
      {
        "id": "D",
        "text": "雨水回到天空。"
      }
    ],
    "correctOptionId": "C",
    "source": "第十二、十三单元“泥土、雨水、种子、发芽”；情境重组"
  },
  {
    "id": "SX-008",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "阅读：小丽先观察花朵，再把发现写进本子，然后画下花朵，最后收拾书桌。<br>写进本子后，小丽接着做什么？",
    "options": [
      {
        "id": "A",
        "text": "收拾书桌。"
      },
      {
        "id": "B",
        "text": "离开教室。"
      },
      {
        "id": "C",
        "text": "把本子送人。"
      },
      {
        "id": "D",
        "text": "画下花朵。"
      }
    ],
    "correctOptionId": "D",
    "source": "第十二单元“观察、发现”；第一单元“写、画、书桌”；情境重组"
  },
  {
    "id": "SX-009",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "阅读：老师先打开书橱，取出一本故事书，读完故事后把书放回书橱。<br>老师取出故事书后，接着做什么？",
    "options": [
      {
        "id": "A",
        "text": "读故事。"
      },
      {
        "id": "B",
        "text": "关闭图书馆。"
      },
      {
        "id": "C",
        "text": "画大马路。"
      },
      {
        "id": "D",
        "text": "整理鱼虾。"
      }
    ],
    "correctOptionId": "A",
    "source": "识字一“书橱、看书”；第二十二单元“故事”；情境重组"
  },
  {
    "id": "SX-010",
    "knowledgePoint": "阅读理解：事情先后",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "阅读：哥哥先完成写话，再教妹妹做功课，最后两人才一起游戏。<br>哥哥完成写话后，接着做什么？",
    "options": [
      {
        "id": "A",
        "text": "一个人去游戏。"
      },
      {
        "id": "B",
        "text": "教妹妹做功课。"
      },
      {
        "id": "C",
        "text": "收拾夜市。"
      },
      {
        "id": "D",
        "text": "到森林观察。"
      }
    ],
    "correctOptionId": "B",
    "source": "第十七、十八单元“完成写话、功课、帮助”；情境重组"
  },
  {
    "id": "TL-001",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "小华看见朋友跌倒，马上扶他起来。可以看出小华怎样？",
    "options": [
      {
        "id": "A",
        "text": "愿意帮助朋友"
      },
      {
        "id": "B",
        "text": "顽皮"
      },
      {
        "id": "C",
        "text": "懒惰"
      },
      {
        "id": "D",
        "text": "慌张"
      }
    ],
    "correctOptionId": "A",
    "source": "第五、十八单元“朋友、扶、帮助”；情境重组"
  },
  {
    "id": "TL-002",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "小丽每天观察种子的变化，还把发现写进本子。可以看出她怎样？",
    "options": [
      {
        "id": "A",
        "text": "不喜欢学习"
      },
      {
        "id": "B",
        "text": "观察得很认真"
      },
      {
        "id": "C",
        "text": "只想玩游戏"
      },
      {
        "id": "D",
        "text": "不愿意写字"
      }
    ],
    "correctOptionId": "B",
    "source": "第十二、十三单元“观察、种子、发现”；情境重组"
  },
  {
    "id": "TL-003",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "弟弟先完成写话，才和朋友游戏。可以看出他怎样？",
    "options": [
      {
        "id": "A",
        "text": "不爱游戏"
      },
      {
        "id": "B",
        "text": "害怕朋友"
      },
      {
        "id": "C",
        "text": "懂得利用时间"
      },
      {
        "id": "D",
        "text": "忘了做功课"
      }
    ],
    "correctOptionId": "C",
    "source": "第十七单元“完成写话、利用时间”；情境重组"
  },
  {
    "id": "TL-004",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "basic",
    "difficultyLabel": "🌱基础",
    "prompt": "哥哥读完故事书，再借给妹妹看。可以看出哥哥怎样？",
    "options": [
      {
        "id": "A",
        "text": "只爱收藏"
      },
      {
        "id": "B",
        "text": "不喜欢妹妹"
      },
      {
        "id": "C",
        "text": "不爱看书"
      },
      {
        "id": "D",
        "text": "愿意和家人分享"
      }
    ],
    "correctOptionId": "D",
    "source": "第十八、二十二单元“故事、妹妹、家人、分享”；情境重组"
  },
  {
    "id": "TL-005",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "大家离开教室后，小明留下来把纸张和玻璃分开放好。最可能说明什么？",
    "options": [
      {
        "id": "A",
        "text": "小明注重环保。"
      },
      {
        "id": "B",
        "text": "小明想把教室弄脏。"
      },
      {
        "id": "C",
        "text": "小明不知道怎样分类。"
      },
      {
        "id": "D",
        "text": "小明不愿意回家。"
      }
    ],
    "correctOptionId": "A",
    "source": "第十四单元“纸张、玻璃、分类、环保”；情境重组"
  },
  {
    "id": "TL-006",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "小芳遇到不明白的词，先查字典，再请教老师。可以看出她怎样？",
    "options": [
      {
        "id": "A",
        "text": "害怕提问"
      },
      {
        "id": "B",
        "text": "愿意想办法学习"
      },
      {
        "id": "C",
        "text": "只喜欢画画"
      },
      {
        "id": "D",
        "text": "不想知道答案"
      }
    ],
    "correctOptionId": "B",
    "source": "识字一“查字典”；第九单元“提问、学习”；情境重组"
  },
  {
    "id": "TL-007",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "advanced",
    "difficultyLabel": "⭐进阶",
    "prompt": "天空越来越黑，妈妈出门时带上雨伞。最可能发生什么事？",
    "options": [
      {
        "id": "A",
        "text": "太阳更明亮。"
      },
      {
        "id": "B",
        "text": "夜市马上开。"
      },
      {
        "id": "C",
        "text": "可能快下雨了。"
      },
      {
        "id": "D",
        "text": "海浪来到校园。"
      }
    ],
    "correctOptionId": "C",
    "source": "第十一、十二单元“天空、黑、雨、雨伞”；情境重组"
  },
  {
    "id": "TL-008",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "小华发现花儿旁边的泥土很干，叶子也弯了，便马上为花浇水。可以看出小华怎样？",
    "options": [
      {
        "id": "A",
        "text": "只喜欢玩水。"
      },
      {
        "id": "B",
        "text": "不愿意观察。"
      },
      {
        "id": "C",
        "text": "想把花搬走。"
      },
      {
        "id": "D",
        "text": "能从变化想到合适的做法。"
      }
    ],
    "correctOptionId": "D",
    "source": "第五、十二单元“泥土、叶子、观察、浇水”；情境重组"
  },
  {
    "id": "TL-009",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "第一组朗读得很流利，还天天练习；第二组很少练习，朗读时常停住。我们可以知道什么？",
    "options": [
      {
        "id": "A",
        "text": "多练习能帮助朗读进步。"
      },
      {
        "id": "B",
        "text": "朗读和练习没有关系。"
      },
      {
        "id": "C",
        "text": "很少练习一定读得更好。"
      },
      {
        "id": "D",
        "text": "只要声音大就能读好。"
      }
    ],
    "correctOptionId": "A",
    "source": "第一单元“朗读”；教材“练习、流利”；情境重组"
  },
  {
    "id": "TL-010",
    "knowledgePoint": "阅读理解：简单推断",
    "difficulty": "brave",
    "difficultyLabel": "🔥勇者",
    "prompt": "妹妹把喜欢的糕点分给家人，又把故事书借给同学。可以看出她怎样？",
    "options": [
      {
        "id": "A",
        "text": "只喜欢收藏东西。"
      },
      {
        "id": "B",
        "text": "愿意分享，也关心别人。"
      },
      {
        "id": "C",
        "text": "不喜欢和同学相处。"
      },
      {
        "id": "D",
        "text": "只想一个人游戏。"
      }
    ],
    "correctOptionId": "B",
    "source": "第四、十八、二十二单元“糕点、家人、故事、同学”；情境重组"
  }
];
