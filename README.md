# Booknob

本屋の Web アプリを作りながら

- Stripe の決済機能
- Slack API による自動化
- UI ライブラリ Mantine

## setup

```sh
yarn add stripe @stripe/stripe-js magic-sdk @prisma/client @slack/web-api cookie @mantine/hooks @mantine/core @mantine/next
yarn add -D tailwindcss postcss autoprefixer prisma
```

## feature

- 本の購入機能
- 会員機能
  - 新規登録
  - 登録後 Slack のワークスペースに自動招待
  - ユーザー情報の変更
  - クレジットカード情報の保存
  - 会員特典の利用
  - サブスクリプションプランへの変更
  - 退会機能
- 管理者ダッシュボード
  - 商品の追加
  - 顧客の管理
  - 売上を Slack に定期投稿

## libs

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stripe](https://stripe.com/)
- [Magic](https://magic.link/)
- [PlanetScale](https://planetscale.com/)
- [Prisma](https://www.prisma.io/)
- [Cookie](https://www.npmjs.com/package/cookie)
- [Slack API](https://api.slack.com/)
- [Node Slack SDK](https://slack.dev/node-slack-sdk/)
- [TailwindCSS](https://tailwindcss.com/)
- [Mantine](https://mantine.dev/)
