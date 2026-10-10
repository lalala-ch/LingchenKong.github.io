# Lingchen Kong — Personal Academic Homepage

个人学术主页，包含简介、研究兴趣、论文及开源仓库。

## 维护内容

网站提供浏览功能，不包含网页编辑页面。内容修改由仓库所有者通过 GitHub 或本地文件完成。

- `profile.json`：姓名、简介、Gmail、Google Scholar、LinkedIn、研究兴趣、论文及开源仓库。
- `repositories` 中的每个条目包含 `name`、`url`、`description`。
- `assets/portrait.png`：用户提供的圆形照片，保留上传原文件。主页只调整显示尺寸，不裁剪或重绘图片。
- `LingchenKong_CV.pdf`：个人简历。
- `app.js`、`style.css`、`index.html`：页面结构、排版和样式。
- `bibtex.js`：BibTeX 解析与 IEEE 风格引用。

修改后提交到 `main`。论文可在 `profile.json.publications` 中维护 BibTeX；仓库链接可在 `profile.json.repositories` 中添加或删除。

## 论文引用

论文正文采用 IEEE 引用格式，期刊使用 ISO 4 缩写，引用正文不显示 DOI。

- `citationTitle` 可填写用于引用的句式大小写标题。
- `journalAbbreviation` 可填写经核实的 ISO 4 期刊缩写；当前期刊使用 `IEEE Trans. Antennas Propag.`。
- BibTeX 的 `month`、`year`、`volume`、`number` 和 `pages` 用于生成出版信息。原始 DOI 保留在 BibTeX 中，供文献管理使用。

## 托管与可见性

GitHub Free 的 Pages 仅支持公开仓库。将本仓库设为私密后，不再以 GitHub Pages 托管。若以后使用支持私密源仓库的账户方案或其他托管服务，可重新部署同一套静态文件。

网站公开访问与源仓库可见性是不同设置；修改源文件仍需 GitHub 写入权限。

## 设计参考与图标

布局、字体、配色参考 [szl2/jemdoc-new-design](https://github.com/szl2/jemdoc-new-design)，保留简洁的学术主页排版，并增加适合手机的折叠菜单。

第三方来源与授权见 `THIRD_PARTY_NOTICES.md` 及 `licenses/jemdoc-new-design.txt`。
