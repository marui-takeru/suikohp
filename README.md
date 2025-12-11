# ローカルでの実行方法

このウェブサイトをローカル環境で確認するための手順です。

## 推奨: Pythonの簡易サーバーを使用する

Macには標準でPythonがインストールされています。ターミナルで以下のコマンドを実行するだけで、実際のサーバー環境に近い状態で確認できます。

1. ターミナルを開きます。
2. このフォルダ (`lab-homepage-refresh`) に移動します。
    ```bash
    cd "/Users/maruitakeru/Documents/HP/GigaFile Transfer/lab-homepage-refresh"
    ```
3. サーバーを起動します。
    ```bash
    python3 -m http.server 8080
    ```
4. ブラウザで以下のURLにアクセスします。
    [http://localhost:8080](http://localhost:8080)

## 方法2: 直接ファイルを開く

`index.html` ファイルを直接ダブルクリックしてブラウザで開くことも可能です。
ただし、画像やフォントの読み込みなど、一部の機能がセキュリティ制限により正しく動作しない場合があります。
