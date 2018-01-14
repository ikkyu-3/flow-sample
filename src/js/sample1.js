// @flow

// 使い方
function foo(x: ?number): string{
	if(x){
		// return x; numberで返そうとするのでエラーとなる
		return `${x}`; // 文字列に変換して返す
	}
	return 'default string';
}
