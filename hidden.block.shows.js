jQuery(function($) {
 	var closeItem   = $( ".js-close" ); //非表示に設定しているクラス名を定義
 	var category = $( ".category" );//対象とするクラスの親要素
	var setCategory = new Array();//カテゴリ名を取得
	for( var c = 0; c < category.length; c++ ) {//カテゴリを格納
		setCategory.push( category[c].className.split(" ")[1] );
	}
	var categoryNum = setCategory.length; //カテゴリの数
	var viewItem = 2 //表示する1カテゴリあたりのアイテム数
	var feadSpeed = 500;
	var $setMore = $( ".readmore-bt" );

	$setMore.click( function() {
		var itemCnt = 0; //取得した要素全体から非表示要素だけをカウントする変数
		var max; //非表示から表示にするアイテムの残り数に応じて入れる値を変動させる
		var hiddenItem = $( "." + setCategory[0] ).find( "ul" ).children( "li.js-close" ).length; //非表示アイテムの残り数

		for( var j = 0; j < categoryNum; j++ ){
			if( hiddenItem - viewItem > 0 ) {
				max = viewItem;
			} else {
				max =　hiddenItem;
			}
			if( hiddenItem > 0 ) {
				for( var k = 0; itemCnt < max; k++ ){
					if( $( "." + setCategory[j] ).find( "ul li" ).eq(k).hasClass( "js-close" ) ) {
						$( "." + setCategory[j] ).find( "ul li" ).eq(k).removeClass( "js-close" );
						$( "." + setCategory[j] ).find( "ul li" ).eq(k).addClass( "js-open" );
						itemCnt++;//表示要素の場合はカウントを足さない
					}
				}
				itemCnt = 0;
			}
		}
		if( max < viewItem ) {
			$( this ).css( "display", "none" ); //全要素が表示された場合、ボタンを非表示
		}
		return false;
	});//$setMore.click( function()
});
