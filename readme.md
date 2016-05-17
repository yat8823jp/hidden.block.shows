#非表示ブロックをボタンを押すたびに表示するスクリプト
##概要
複数のブロックを同数づつ表示していくスクリプトです。

```
ul.aaa>li*16
ul.bbb>li*16
ul.bbb>li*16
ul.bbb>li*16
```
というブロックが有り、最初の2つづつだけを表示しておいて、残りのブロックをボタンを押すたびに2つづつ表示するといったことが出来ます。

##依存関係
* jQuery

##初期設定
非表示要素のクラスに .js-close。表示しておく要素のクラスに .js-open を定義。親要素に共通のクラス名と、それぞれの独立したクラス名を定義。

例）
```
section class="category category1"
section class="category category2"
```

js側で設定を変更など

```
var closeItem   = $( ".js-close" );
//非表示に設定しているクラス名を定義

var category = $( ".category" );
//対象とするクラスの親要素

var viewItem = 2
//表示する1カテゴリあたりのアイテム数

var $setMore = $( ".readmore-bt" );
//ボタンのクラス名
```