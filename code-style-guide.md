# Code Style Guide #

## JavaScript语言规则 ##

1.	声明新变量时要是使用`var`关键字
2.	静态变量命名规则`CONSTANT_VALUE_CASE`
3.	在语句的结尾使用分号
4.	函数内部的声明函数时使用`var`关键字
5.	非必要的时候尽量减少`delete`关键字的使用，采取变量置空来实现
6.	谨慎使用闭包，尽量降低作用域链查找的路径长度。
7.	避免使用`eval`函数
8.	避免使用`with`函数
9.	只在必要的时候（遍历对象时）使用for-in循环。对数组使用如下方式遍历。  
```javascript
  for(var i = 0, len = array.length; i < len; i++){  
      //do something  
  }
```
10.	避免使用多行字符串声明，使用字符串拼接来代替。
11.	使用字面量来实例化数组和对象。  
```javascript
  var array = [1, 2, 3];  
  var obj = {a: ‘xx’, b: ‘xx’}
```
12.	禁止修改内建的对象prototype
13.	避免使用ie条件注释


## JavaScript命名规则 ##

1.	私有方法使用下划线(`_`)作为开始字符，保护和公共方法按驼峰式命名规则
2.	函数可选参数采用`opt_`开头
3.	如果函数接受一系列的可变参数，应当在传参处添加`var_args`，在函数体内部则使用`arguments`对象。
4.	避免使用`getter`和`setter`，使用赋值和取值方法代替
```javascript
  getYourProperty()  
  setYourProperty(value)
```

5.	尽量延迟实例实例化的时间。尽量明确变量的作用域。
6.	花括号{}的使用，开始的花括号总是与它开始时的代码在同一行。
```javascript
  if(something){
  	//….
  } else {
  	//…..
  }
```

7.	数组和对象的初始化  
```javascript
  var arr = [1, 2, 3];  //  [后面, ]前面都没空格.  
  var obj = {a: 1, b: 2, c: 3};  // {后面, }前面都没空格.  
  var arr = [  
    1,  
    2,  
    3  
  ];  
  var obj = {  
    a: 1,  
    bb: 2,  
    ccc: 3  
  };  
```
8. 传递匿名函数
```javascript
  foo(function(param1, param2){
    //your code
  });
```
9. 代码内部小功能区块添加空行分隔
```javascript
  doButtonEventBind();
  doButtonWaitingState();
  doButtonHide();

  doFormSubmit();
  doCheckForm();
```
10. 字符串声明使用'代替"
11. 可实例化的类对象采用首字母大写的驼峰式命名方式`MyClassName`
12. 类方法和普通变量以及函数采用首字母小写的驼峰式命名风格`myMethod`
13. 文件名采用全部小写，单词以中划线风格的风格 `my-custom-module.js`

## JSDoc基本用法 ##

1. 以 `/**` 开始将作为JSDoc解析的注释内容，其他的注释方式均不解析(`//`, `/*`, `/***`)。
2. 简单的说明
```javascript
  /** 这里是对函数的描述 */
  function foo(){
      //do something
  }
```
3. 指定构造函数
```javascript
  /**
   * 图书对象
   * @constructor
   */
  function Book(){
      //do something
  }
```
4. 指定更多内容
```javascript
  /**
   * 图书对象
   * @constructor
   * @param {string} title - title of the book
   * @param {string} author - author of the book
   */
  function Book(title, author){
      //do something
  }
```
5. 描述返回值
```javascript
  /**
   * 相加
   * @param {int} a - first number
   * @param {int} b - second number
   * @return {int}
   */
  function add(a, b){
      return a+b;
  }
```
## HTML 规范 ##

1. 页头
```html
  <!doctype html>
```
2. 编码
```html
  <meta charset="utf-8">
```
3. script标签不需加type或者language，link或style标签不需加type
```html
  <script src="..."></script>
  <script></script>
  <link rel="stylesheet" href="...">
  <style></style>
```
