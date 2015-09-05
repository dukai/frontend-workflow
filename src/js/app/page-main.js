requirejs.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-1.11.3.min'
    }
});

requirejs(['comp/format/result', 'comp/math/plus', 'jquery'],function(result, plus){
	console.log('add', result(plus(1, 2)));
})
