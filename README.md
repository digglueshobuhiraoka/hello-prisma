# hello-prisma

- モジュールインストール

```sh
npm install prisma typescript ts-node @types/node --save-dev
```

- PostgreSQL起動

```sh
docker-compose up -d
```

- PostgreSQL接続

```sh
psql -h localhost -p 15432 -U admin -d prisma
```

- Prismaからクエリ発行

```sh
npx ts-node index.ts
```
