// 必要なモジュールをインポート
const express = require('express');

// Expressアプリケーションのインスタンスを作成
const app = express();

// ルートパスにアクセスした際の処理を定義
app.get('/', (req, res) => {
  res.send('Hello world');
});

// サーバを起動し、ポート9000でリクエストを待機
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// src > serverへ移動し、node index.jsでサーバー起動