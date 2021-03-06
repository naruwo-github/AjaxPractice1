## JavaScriptのAjaxを使って、サーバーとの非同期の通信をしてみます。
これによって、ページ全体を再ロードすることなく、ページの一部要素を書き換えることが可能になる。

### Ajaxってなんなん
概念
ブラウザのJavaScriptがサーバーに対してHTTPリクエストを発する。それに対してサーバー側は多くの場合、JSON形式のデータを返す。
他のウェブサイトと同様にHTTPに基づいて通信が行われるが、ページの転送やレンダリングにかかる時間が短縮され、アプリケーションのパフォーマンスが上がる(らしい)。

### このプロジェクトファイルの説明
ajaxServer.js: ローカルサーバーを構築するプログラム
index.html: Webページ
main.js: index.html内で使われているJavaScriptプログラム

このサーバーを起動するにはコマンドラインで以下を実行(nodeでやってます)
```
$ node ajaxServer.js
```
http://localhost:7070
を開くと今回サーバー側で用意したプロパティが表示されるはずです。
<kbd><img src="source/サーバーの方.png" width="800" /></kbd>

ここで、index.htmlファイルを任意の開くとサーバーから受け取った情報が表示できていること、また更新されていくことがわかると思います。
<kbd><img src="source/Webページの方.png" width="800" /></kbd>
