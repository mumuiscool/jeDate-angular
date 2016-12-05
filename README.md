# <center>jeDate-angular</center>
## 一、功能介绍
* 1.jeDate日期选择插件除了包含 日历可以直接显示与点击显示、日期标注点、设定年月（YYYY-MM）、日期范围限制、开始日期设定、自定义日期格式、时间戳转换、当天的前后若干天返回、时分秒选择、智能响应、自动纠错、节日识别，操作等常规功能外，还拥有更多趋近完美的解决方案。您可以免费将她用于任何个人项目。但是不能去除头部信息。  
* 2.此插件基于jQuery版本（https://github.com/singod/jeDate）开发


## 二、使用方法
* 1.引入所有依赖的js文件：
	`<script type="text/javascript" charset="utf-8" src="./bower_components/jedate/jquery-1.7.2.js"></script>`
	`<script type="text/javascript" charset="utf-8" src="./bower_components/jedate/jquery.jedate.js"></script>`
	`<script type="text/javascript" charset="utf-8" src="./bower_components/angular/angular.js"></script>`
	`<script type="text/javascript" charset="utf-8" src="./datePicker.js"></script>`  
	  
	    
	    
* 2.初始化app：  
 	`var app = angular.module('app',['datePicker']);`  
 	  
 	  
* 3.使用指令：  
	`<input type="text" readonly date-picker>`  
	
* 4.参数(请查看：http://www.jayui.com/jedate/)  
		
		skinCell:"jedateblue",                //日期风格样式，默认蓝色  
	
		format:"YYYY-MM-DD hh:mm:ss",         //日期格式  

		minDate:"1900-01-01 00:00:00",        //最小日期  

		maxDate:"2099-12-31 23:59:59",        //最大日期  

		insTrigger:true,                      //是否为内部触发事件，默认为内部触发事件  

		startMin:"",                          //清除日期后返回到预设的最小日期  

		startMax:"",                          //清除日期后返回到预设的最大日期  

		isinitVal:false,                      //是否初始化时间，默认不初始化时间  

		initAddVal:[0],                       //初始化时间，加减 天 时 分  

		isTime:true,                          //是否开启时间选择  

		ishmsLimit:false,                     //时分秒限制  

		ishmsVal:true,                        //是否限制时分秒输入框输入，默认可以直接输入时间  

		isClear:true,                         //是否显示清空  

		isToday:true,                         //是否显示今天或本月  

		clearRestore:true,                    //清空输入框，返回预设日期，输入框非空的情况下有效  

		festival:false,                       //是否显示农历节日  

		fixed:true,                           //是否静止定位，为true时定位在输入框，为false时居中定位  

		zIndex:2099,                          //弹出层的层级高度  

		marks:null,                           //给日期做标注  

		choosefun:function(elem, val) {},     //选中日期后的回调, elem当前输入框ID, val当前选择的值  

		clearfun:function(elem, val) {},      //清除日期后的回调, elem当前输入框ID, val当前选择的值  
 
		okfun:function(elem, val) {},         //点击确定后的回调, elem当前输入框ID, val当前选择的值  

		success:function(elem) {},            //层弹出后的成功回调方法, elem当前输入框ID

	