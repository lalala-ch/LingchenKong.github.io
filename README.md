# Lingchen Kong — Personal Academic Homepage

独立的 GitHub Pages 个人主页，不依赖 ChatGPT 登录、数据库或服务。

## 首次上线

1. 创建公开仓库 `LingchenKong.github.io`，勾选 Add a README file，使默认分支为 main。
2. 将本目录所有文件上传到仓库根目录。
3. Settings → Pages → Build and deployment：Source 选 Deploy from a branch，Branch 选 main，目录选 / (root)，Save。
4. 等待 GitHub 发布，打开 https://lalala-ch.github.io/LingchenKong.github.io/ 。

## 自己维护，不必修改 HTML

- 在主页页底点击 Edit / 编辑内容。
- 修改表单、添加论文及 BibTeX，下载新的 profile.json。
- 点击上传链接，上传 profile.json 覆盖同名文件，然后 Commit changes。只有有仓库写入权限的人能发布修改。
- 也可以直接在 GitHub 编辑 profile.json。
- 照片：上传 photo.jpg，在编辑面板将照片路径设为 photo.jpg。
- CV：上传 cv.pdf，将 CV 路径设为 cv.pdf；也支持外部 https 链接。
- 开源仓库：在编辑面板的 Repository 栏目填写仓库名称、链接和简介，可添加或删除条目。下载并上传 profile.json 后生效。
- News 留空时隐藏；每行一条动态。
- 论文年份和期刊状态都由你填写，不会自动推断。

GitHub Pages 是静态托管。编辑表单的下载并不等于发布，必须提交到 GitHub。网站无需额外付费的后端、账号服务或浏览器中存储令牌。

文件：index.html / style.css / app.js 为展示页面；edit.html / editor.js 为编辑表单；profile.json 为内容数据。
