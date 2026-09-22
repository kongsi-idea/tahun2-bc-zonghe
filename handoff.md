# 华文勇者大冒险（tahun2-bc-zonghe）交接

## 状态

- 2026-09-22：正式依赖已安装，Supabase migration 已执行；排行榜表读取返回 HTTP 200，RPC 无效参数校验返回 HTTP 400。
- 2026-09-22：已建立公开 GitHub 仓库 `kongsi-idea/tahun2-bc-zonghe`，并部署 Vercel preview：<https://tahun2-bc-zonghe-3z8g2goax-kongsi-idea.vercel.app>。
- 2026-09-22：已登记到 Kongsi Idea 课堂点子铺工具目录，Hub 卡片使用真实首页、难度、题目与排行榜截图；Hub preview 为 <https://kongsi-idea-ofgswnvvm-kongsi-idea.vercel.app>，正式 alias 尚未切换。
- 展示名称固定为《华文勇者大冒险》；slug 固定为 `tahun2-bc-zonghe`。
- 定位为二年级华文跨单元综合闯关，不宣称覆盖听说读写全部课程。

## 已定决定

- 保留原有知识岛绘本视觉、22站主线、三档难度、积分／宝石／Combo与无限挑战。
- 改用 Teaching Tools 的独立 Vercel 工具骨架。
- 排行榜沿用 Kongsi Idea 公开制度：有链接即可玩与记分；有班级代码时读取 Kelasku 名单并提供班级榜，无代码时可手填2–3人作为访客并记录，也可查看全部玩家榜。
- 不设教师登录、封闭场次或按日期切榜；同一班级的同一组保留历史最高正式积分并累计挑战次数，访客每局新增记录。无限挑战不写入正式榜。
- 题库重新审核一轮；只使用交接包指定的二年级华文课本与活动本。
- 优化字体与图片体积、手机遮挡和触控尺寸，但不得牺牲原视觉质感。

## 已完成

- 220题第二轮逐题审查并重写59题；转换脚本已由权威 Markdown 实际重建220题。
- Vite／React 前端完成访客与 Kelasku 多班名单、22站、三档难度、存档、音效、无限挑战及公开排行榜介面。
- Supabase 表与 RPC migration 已放进 Kongsi Idea 并执行；线上只读验证通过，未写入假的成绩。
- 字体由 10,185,640 bytes 子集化为 228,988 bytes；向导图缩至 600×720，背景维持 1672×941 无损优化。
- 原交接包已可恢复地移至 `~/Documents/待删除/华文勇者大冒险_完整交接包_2026-09-21/`；教材PDF与检索文本归入 `~/Documents/资料库/_待核实/华文课本资料/二年级/`。
- `npm install` 已生成正式 `package-lock.json`；`npm run check` 与 `npm run build` 均通过；Vercel preview 构建状态为 Ready。
- 线上验证只读检查通过；没有写入假的访客成绩，避免污染公开排行榜。

## 下一步

1. 老师从课堂点子铺卡片打开 preview，验收视觉、手机布局、音效和玩法。
2. 用真实班级代码与真实访客完成一次成绩写入／读取验证，不使用测试姓名。
3. 确认访问保护与朋友原作／插画授权后，再决定是否切正式 alias。

## 未解决限制

- Supabase migration 已执行；目前表为空，排行榜会显示「等待勇者出发」。
- preview 已建立；因 Kongsi Idea 团队默认启用 SSO，普通未登录访客会先看到 Vercel 登录页，本次未擅自改动项目保护设定。
- 已登记课堂点子铺；目前卡片链接指向受 Kongsi Idea 团队 SSO 保护的 Vercel preview，普通未登录访客会先看到登录页。
- 朋友提供的代码与生成插画公开授权仍需保留确认记录。
