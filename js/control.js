$(function(){
	//执行首页动画效果
	FirstMuenAnimation();
	var aList = $(".nav-bar .nav-bar-tip");
	var meanList = $(".body-content").children("div");
	//判断当前所处位置
	var a = 0;
	
	//总控内容切换
	aList.click(function(){
		//还原位置
		a = 0;
		$(".skills p").remove();
		$(".project-right p").remove();
		$(".project-right h2").remove();
		
		
		var x = $(this).index();
		//控制导航样式切换
		$(".nav-bar-tip a").removeClass("active");
		$(".nav-bar-tip a").eq(x).addClass("active");
		//控制主题内容切换
		x += 1;
		//隐藏非选中div
		meanList.hide();
		//显示选中样式
		$(".muen-"+ x).show();
		muenClearone();
		if(x == 1){
		//清除动画后的样式
			FirstMuenAnimation();
		}
		/*以上页面一*/
			muenCleartwo();
		/*页面二*/
		if(x == 2){
			SecondMuenAnimation();
		}
		
		if(x == 3){
			ThirdMuenAnimation();
		}
	});
	
	/*skills touched*/
	$(".muen-2 ul li").click(function(){
		var x = $(this).index();
		if(x == 0 && a != 1){
			$(".skills p").remove();
			setTimeout(function(){$(".skills").append("<p>Html+Css</p>");},0);
			setTimeout(function(){$(".skills").append("<p>熟练使用js，dom操作</p>");},100);
			setTimeout(function(){$(".skills").append("<p>了解less，sass</p>");},200);
			setTimeout(function(){$(".skills").append("<p>熟悉js框架jquery</p>");},300);
			a = 1;
		}
		if(x == 1 && a != 2){
			$(".skills p").remove();
			setTimeout(function(){$(".skills").append("<p>熟悉html5,css3应用</p>");},0);
			setTimeout(function(){$(".skills").append("<p>自适应布局</p>");},100);
			setTimeout(function(){$(".skills").append("<p>了解Ajax异步交互</p>");},200);
			setTimeout(function(){$(".skills").append("<p>热爱前端，渴望进入前端行业发展</p>");},300);
			a = 2;
		}
		if(x == 2 && a != 3){
			$(".skills p").remove();
			$(".skills").append("<p>notepad++</p>");
			setTimeout(function(){$(".skills").append("<p>Hbuilder</p>");},100);
			setTimeout(function(){$(".skills").append("<p>Editplus</p>");},200);
			a = 3;
		}
		if(x == 3 && a != 4){
			$(".skills p").remove();
			setTimeout(function(){$(".skills").append("<p>责任心强</p>");},0);
			setTimeout(function(){$(".skills").append("<p>有执行力</p>");},100);
			setTimeout(function(){$(".skills").append("<p>阳光开朗</p>");},200);
			setTimeout(function(){$(".skills").append("<p>学习力强</p>");},300);
			a = 4;
		}
	});
	
	//skillimg被点击
	$(".warp").click(function(){
		var x = $(this).index();
		if(x == 0 && a != 1){
			$(".project-right p").remove();
			$(".project-right h2").remove();
			$(".project-right").append("<h2>仿天猫首页</h2>");
			setTimeout(function(){$(".project-right").append("<p>html/css/js/jquery制作</p>");},100);
			setTimeout(function(){$(".project-right").append("<p>导航条，jquery animation等动画效果</p>");},200);
			setTimeout(function(){$(".project-right").append("<p>实现回到顶部，轮播图等特效</p>");},300);
			setTimeout(function(){$(".project-right").append("<p>第一个次尝试模仿首页</p>");},400);
			setTimeout(function(){$(".project-right").append("<p>2017.2.14 - 2017.2.20</p>");},500);
			a = 1;
		}
		if(x == 1 && a != 2){
			$(".project-right p").remove();
			$(".project-right h2").remove();
			$(".project-right").append("<h2>仿知乎首页</h2>");
			setTimeout(function(){$(".project-right").append("<p>实现网页自适应效果，js，css，html分离</p>");},100);
			setTimeout(function(){$(".project-right").append("<p>注释良好，代码整洁</p>");},200);
			setTimeout(function(){$(".project-right").append("<p>font-awesome引入效果，减少http请求</p>");},300);
			setTimeout(function(){$(".project-right").append("<p>学习引入sprite图，优化网页</p>");},400);
			setTimeout(function(){$(".project-right").append("<p>2017.4.2 - 2017.4.8</p>");},400);
			a = 2;
		}
		if(x == 2 && a != 3){
			$(".project-right p").remove();
			$(".project-right h2").remove();
			$(".project-right").append("<h2>毕业设计-荐书网(兼职)</h2>");
			setTimeout(function(){$(".project-right").append("<p>与好友协作，完成的大型网页</p>");},100);
			setTimeout(function(){$(".project-right").append("<p>学习合作，共同进步</p>");},200);
			setTimeout(function(){$(".project-right").append("<p>途中了解了github</p>");},300);
			setTimeout(function(){$(".project-right").append("<p>基于github-page搭建了简易博客</p>");},400);
			setTimeout(function(){$(".project-right").append("<p>2017.3.20 - 2017.4.1</p>");},400);
			a = 3;
		}
		if(x == 3 && a != 4){
			$(".project-right p").remove();
			$(".project-right h2").remove();
			$(".project-right").append("<h2>2048小游戏</h2>");
			setTimeout(function(){$(".project-right").append("<p>适配移动端</p>");},100);
			setTimeout(function(){$(".project-right").append("<p>熟悉js事件监听</p>");},200);
			setTimeout(function(){$(".project-right").append("<p>初步编程思想</p>");},300);
			setTimeout(function(){$(".project-right").append("<p>字符串拼接，巩固jquery</p>");},400);
			setTimeout(function(){$(".project-right").append("<p>2017.2.23 - 2017.2.25</p>");},400);
			a = 4;
		}
	});
});

