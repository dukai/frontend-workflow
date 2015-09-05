define('comp/format/result',['require','exports','module'],function(require, exports, module) {

	module.exports = function(str){
		console.log('exec result');
		return "RESULT: " + str;
	}
});
define('comp/math/plus',['require','exports','module'],function(require, exports, module){
	module.exports = function(a, b){
		console.log('exec plus');
		return a + b;
	};
});
requirejs.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-1.11.3.min'
    }
});

requirejs(['comp/format/result', 'comp/math/plus', 'jquery'],function(result, plus){
	console.log('add', result(plus(1, 2)));
})
;
define("app/page-main", function(){});

