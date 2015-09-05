define('comp/format/result',['require','exports','module'],function(require, exports, module) {

	module.exports = function(str){
		console.log('exec result');
		return "RESULT: " + str;
	}
});
define('comp/math/minus',['require','exports','module'],function(require, exports, module){
	module.exports = function(a, b){
		console.log('exec minus');
		return a - b;
	};
});
define('app/page-sub',['require','comp/format/result','comp/math/minus'],function(require){
	var result = require('comp/format/result');
	var plus = require('comp/math/minus');
	console.log('minus', result(plus(1, 2)));
})
;
