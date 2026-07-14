# UA Lawyers 官网

UA Lawyers 律师事务所官方网站，基于 Next.js（App Router）+ Tailwind CSS 构建，通过 Vercel 自动部署。

- 线上地址：https://ua-lawyers.vercel.app
- 部署分支：`main`（推送后 1–2 分钟自动上线，无需手动操作 Vercel）

## 网站内容在哪

| 内容 | 文件 |
|---|---|
| 首页 | `src/app/page.tsx` |
| 我们的服务 | `src/data/services.ts` |
| 律师团队 | `src/data/people.ts` |
| 博客文章 | `src/data/posts.ts` |
| 全站信息（公司名 / 电话 / 地址 / 邮箱） | `src/data/site.ts` |
| 图片 | `public/images/` |

> 大多数「改文字」的需求，答案在 `src/data/` 里，而不是页面文件里。

## 本地开发

```bash
npm install
npm run dev     # 打开 http://localhost:3000
npm run build   # 生产构建
```
