// @flow

// 引数が文字列のみ許可
function concat(a: string, b: string){
	return a + b;
}
concat('a', 'b'); // ok
// concat('a'); // bの引数がundefinedなのでエラー
concat('', ''); // 空文字ok

// null, undefinedに関して
function nullSample(value: null){
}
nullSample(null);

function voidSample(value: void){
}
voidSample();
voidSample(undefined);

// type or null or undefined
function maybeSample(value: ?string){
}
maybeSample();
maybeSample('string');
maybeSample(null);
// maybesample(1);

// オブジェクトのプロパティが定義されてなかったり、
// undefinedでもokとする
function objectSample(value: { hoge?: string}){
}
objectSample({});
objectSample({hoge: 'string'});
objectSample({hoge: undefined});
// objectSample({hoge: 12}); // エラー
// objectSample({hoge: null}); // エラー

// デフォルトを指定する場合
function defaultSample(value: string = 'defalut'){
}
defaultSample();
defaultSample('string');
// defaultSample(null); // エラー
defaultSample(undefined);
// defaultSample(1);	// エラー

// シンボルは未対応

// mixed typesに関して
// typeを|(パイプ)で記述して複数の型を許容できる
function unionTypes(value: string | number | boolean ){	
}
unionTypes('1');
unionTypes(1);
unionTypes(false);
// unionTypes(undefined); // エラー
// unionTypes(null); // エラー
// unionTypes({}); // エラー

// ?つけたらどうなるのか
function unionTypes2(value: ?string | number | boolean ){	
}
unionTypes2('1');
unionTypes2(1);
unionTypes2(false);
unionTypes2(undefined);
unionTypes2(null);
// unionTypes2({}); // エラー
// ですよね

// 引数の型で返したい場合
function generic<T>(value: T): T{
	return value;
}
function generic2<T>(value: T): T{
	return `${value}`;
}
