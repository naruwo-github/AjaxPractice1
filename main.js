function refreshServerInfo() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', function() {
    //ここで値を埋め込むコードをかく
    //JSONデータを含む文字列
    console.log(this.responseText);
    //オブジェクトに変換したものをdataへ
    const data = JSON.parse(this.responseText);
    //serverInfoクラスを持つものを取得
    const serverInfo = document.querySelector('.serverInfo');
    //サーバーから返されたオブジェクトの全てのキーについて処理を行う
    Object.keys(data).forEach(p => {
      //プロパティがマッチする要素を探す
      const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"]`);
      //置換する
      for(let r of replacements) {
        r.textContent = data[p];
      }
    });
  });

  req.open('GET', 'http://localhost:7070', true);
  req.send();
}

//refreshServerInfo();
setInterval(refreshServerInfo, 1000*0.2);
