# sample-counter
React + Redux のモダンjsサンプル

## 動作環境

|アプリ|バージョン|
|---|---|
|Node.js|v6.7.0|

## 構築

ワーキングディレクトリで以下のコマンドを実行する  
`package.json`にもとづいて、必要なパッケージをインストールする  
```sh
$ npm install
```

## ビルド

`gulp`によって以下のコマンドが使えるようになっている
```sh
$ gulp browserify
```

`gulp`を使わない場合は以下のコマンドを実行する
```sh
$ browserify src/index.js -o dist/index.js -t [ babelify --presets [ react es2015 ] ]
```

## 監視

 *現在動作未確認*
```sh
$ gulp watchify
```
