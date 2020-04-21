---
id: markdown-to-json-with-processmd
title: processmdでマークダウンをjsonに変換する
created_at: 2020-02-23
image:
---

## processmdとは？
マークダウン形式・YAML形式のファイルから、htmlタグを含むjson形式ファイルを生成するnpmパッケージです。
ブログなどの静的コンテンツを作成するのに便利です。

詳細はこちらで  
[https://github.com/tscanlin/processmd](https://github.com/tscanlin/processmd)


## これが
```md:test.md
---
title: イカ焼きおいしいです。
created_at: 2096-02-01
image: splatoon.jpg
---
# 見出し1

## 見出し2

がんばるぞい。
がんばるぞい。
がんばるぞい。
がんばるぞい。
がんばるぞい。
がんばるぞい。
がんばるぞい。
```

## こうなる
```json:test.json
{
  "title": "イカ焼きおいしいです。",
  "created_at": "2096-02-01T00:00:00.000Z",
  "image": "splatoon.jpg",
  "bodyContent": "# 見出し1\n\n## 見出し2\n\nがんばるぞい。\nがんばるぞい。\nがんばるぞい。\nがんばるぞい。\nがんばるぞい。\nがんばるぞい。\nがんばるぞい。",
  "bodyHtml": "<h1>見出し1</h1>\n<h2>見出し2</h2>\n<p>がんばるぞい。\nがんばるぞい。\nがんばるぞい。\nがんばるぞい。\nがんばるぞい。\nがんばるぞい。\nがんばるぞい。</p>\n",
  "dir": "output",
  "base": "test.json",
  "ext": ".json",
  "sourceBase": "test.md",
  "sourceExt": ".md"
}
```

## インストール
```bash:
npm install --save-dev processmd
```


## 使い方
```bash:
npm run processmd md/*.{yml,md} --outputDir output

#yarnを使用する場合
yarn processmd md/*.{yml,md} --outputDir output

#package.jsonが無くてエラーになる場合はnpm initで生成しましょう
```
上記コマンドを実行すると、

mdフォルダ内の拡張子がyml or mdのファイルを変換し、
outputフォルダ内にjsonファイルが出力されます。

npm installを行ったフォルダが基準です。
outputフォルダが無い場合は自動生成してくれます。

（公式にはprocessmdから始まるコマンドが紹介されていますが、command not foundになっちゃうのでこれで…）

## summaryファイルを出力する
```bash:
npm run processmd md/*.{yml,md} --stdout --outputDir output > output/summary.json
```
上記コマンドで、変換した全てのファイルのメタデータをsummary.jsonとして書き出してくれます。

やったね!!

ブログなら記事一覧はこのデータがあれば作れちゃいそうですね。

## npm scriptで実行すると楽チン
毎回コマンドを打つのは面倒なので…

```json:package.json
"scripts": {
    "md": "processmd md/*.{yml,md} --stdout --outputDir output > output/summary.json"
}
```
package.jsonのscriptsにこんな感じで追記しておくと、

```bash:
npm run md
```

だけで済むので楽です。神。
