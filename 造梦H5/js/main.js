var ratio = $(window).width() / 750;
var wh = $(window).height();

var asList = [{
	"q": "独步街头，突然听见一首熟悉的曲调传来，望着路边深情的歌手，你会想到：",
	"a": "A. 我也会唱，没什么了不起",
	"b": "B. 静静聆听，轻声合唱",
	"c": "C. 转身走开"
}, {
	"q": "汗臭味、吵杂声，当你在公交车上被前拥后挤时会想到：",
	"a": "A. 怀疑自己为什么要离开家乡",
	"b": "B. 滴滴、优步才是最佳出现方式",
	"c": "C. 一定要买属于自己的车"
}, {
	"q": "当独自一人听到街边饮品店里男男女女遗漏出的觥筹交错声时，你会想到：",
	"a": "A. 我不喜欢社交",
	"b": "B. 这才是生活，我也要约朋友",
	"c": "C. 想这么多干嘛，还得去加班"
}, {
	"q": "城市喧哗逐渐褪去，暗楼矗立，望着大楼唯一亮着灯的一户人家，你会想到：",
	"a": "A. 在等未归的家人",
	"b": "B. 跟我一样的加班“狗”",
	"c": "C. 我也想拥有一座属于自己的房子"
}]

var rolelist = [{
	"move":"images/role/role1.gif",
	"quiet":"images/role/1.png",
	"front":"images/role/w11.png"
},{
	"move":"images/role/role2.gif",
	"quiet":"images/role/2.png",
	"front":"images/role/w21.png"
},{
	"move":"images/role/role3.gif",
	"quiet":"images/role/3.png",
	"front":"images/role/w31.png"
},{
	"move":"images/role/role4.gif",
	"quiet":"images/role/4.png",
	"front":"images/role/m41.png"
},{
	"move":"images/role/role5.gif",
	"quiet":"images/role/5.png",
	"front":"images/role/m51.png"
},{
	"move":"images/role/role6.gif",
	"quiet":"images/role/6.png",
	"front":"images/role/m61.png"
}]

var resultList=[[
	["忙着忙着就不知道自己在忙啥了"],
	["慢慢地就不知道自己为什么而活了"],
	["寻找初心"],
	["为梦想加油"],
	["你知道自己的梦想加油站在哪吗？"]
],[
	["在转弯处寻找方向"],
	["在坚持中规划梦想"],
	["坚持下去，做一个有规划的人"],
	["为梦想加油"],
	["你知道自己的梦想加油站在哪吗？"]
],[
	["梦想不会逃跑"],
	["会逃跑的永远是自己"],
	["适当的思维转换能照亮通向前行的路"],
	["为梦想加油"],
	["你知道自己的梦想加油站在哪吗？"]
],[
	["偶尔的冒险和长期的积累"],
	["会让你更踏实自信"],
	["迷失希望和信心时，不妨尝试未知"],
	["为梦想加油"],
	["你知道自己的梦想加油站在哪吗？"]
],[
	["热爱什么很重要"],
	["把热爱的事情做好更重要"],
	["别被现实吓倒"],
	["为梦想加油"],
	["你知道自己的梦想加油站在哪吗？"]
]]

var leftmove = [{"from":362*ratio,"to":362*ratio},{"from":582*ratio,"to":582*ratio},{"from":512*ratio,"to":512*ratio},{"from":362*ratio,"to":362*ratio}]

var scene = [ratio * 9103 - wh, ratio * 7236 - wh, ratio * 5650 - wh, ratio * 3806 - wh,ratio * 2473 - wh, 0];
// ratio * 2473 - wh,
var role = {
	"quiet":rolelist[0].quiet,
	"move":rolelist[0].move,
	"front":rolelist[0].front
}
var index = 0;
var role_i=0;
var answer=[];
var name="";


var Mmove=document.getElementById("move"),
	Mbgm=document.getElementById("bgm"),
	Mlist=document.getElementById("Mlist");

var Marr=["images/music/1.mp3","images/music/2.mp3","images/music/3.mp3","images/music/4.mp3","images/music/5.mp3","images/music/6.mp3"]

function init(){
	index = 0;
	role_i=0;
	$(".main").hide();
	$(".result").hide();
	$(".entrance").hide();
	$(".sex").show();
	$(".name").hide().find("input").val("");
	resultList.sort(function() {
		return Math.random() - Math.random();
	});
	console.table(resultList[0])
	
}

function initplay(){
	$(".main").show();
	$(".entrance").hide();
	$(".bg").css("transform", "translate(0,-" + scene[0] + "px)")//初始化背景位置
	$(".role").attr("src", role.move).css({
		"top": scene[index] + wh + "px",
		"left": 362 * ratio
	})
	
	setTimeout(function() {
		$(".role").animate({
			top: scene[index] + wh - 400 * ratio + "px"
		}, 5000,function(){
			Mmove.currentTime=0;
			$(".role").attr("src", role.quiet)
			quiz();
		})
		Mmove.play();
		Mlist.src=Marr[0];
		Mlist.play();
	}, 500)
	
}

function quiz(){
	$(".question").show();
	$(".cover").show();
	$(".q").html(asList[index].q);
	$(".ask:eq(0)").html(asList[index].a);
	$(".ask:eq(1)").html(asList[index].b);
	$(".ask:eq(2)").html(asList[index].c);
	
	
	if(index==1){
		$(".q").addClass("big")
	}else{
		$(".q").removeClass("big")
	}
	
}

function bgMove(){
	Mlist.src=Marr[index];
	Mlist.play();
	
	var time=2;
	if(index == 4){
		var t=setTimeout(function(){
			Mlist.src=Marr[5];
			Mlist.play();
			$(".scene img").eq(0).attr("src","images/scene/scene"+6+".gif").addClass("a");
			$(".bg").css({
				"transform": "translate(0,-" + scene[5] + "px)",
				"transition": "transform "+ time +"s"
			});
			clearTimeout(t);
			setTimeout(function(){
				result();
			},8000);
		},4000)
	}
	$(".bg").css({
		"transform": "translate(0,-" + scene[index] + "px)",
		"transition": "transform "+ time +"s"
	});
}

function roleMove(){
	Mmove.play();
	
	$(".role").attr("src", role.move).css({
		"top": scene[index] + wh + "px",
		"left": leftmove[index].from
	}).animate({
		top: scene[index] + wh - 400 * ratio + "px",
		left:leftmove[index].to
	}, 5000,function(){
		Mmove.currentTime=0;
		Mmove.pause()
		$(".role").attr("src", role.quiet)
		if(index<4){
			quiz();
		}
	})
	
}

function result(){
	$(".result").show();
	$(".main").hide();
	$(".role_front").attr("src",rolelist[role_i-1].front);
	$(".result h2 span").html(name);
	
	var txthtml=''
	for (var i=0;i<resultList[0].length;i++) {
		txthtml += "<p>"+resultList[0][i]+"</p>"
	}
	$(".result .txt").html(txthtml);
	draw();
}


$(function(){
	
	$("#jump").click(function(){
		aud.pause();
		$(".titles").hide();
		Mbgm.play();
		Mbgm.volume=0.4;
		init();
	})
	
	$(".go").click(function(){
		$(this).parent().hide();
		$(".titles").show()
		aud.play();
		Mbgm.pause();
	});
	
	$(".sex>.sexbox>div").click(function(){
		$(this).addClass("a").siblings().removeClass("a");
		setTimeout(function(){
			if($(".man").hasClass("a")){
				$(".choice-role .m").show();
				$(".choice-role .w").hide()
			}else{
				$(".choice-role .m").hide();
				$(".choice-role .w").show()
			}
			$(".sex").hide();
			$(".choice-role").show();
		},1000)
	});
	
	$(".choice-role span").click(function(){
		
		$(this).addClass("a").siblings().removeClass("a");
		
		role_i=$(this).attr("index");
		
		role = {
			"quiet":rolelist[role_i-1].quiet,
			"move":rolelist[role_i-1].move,
			"front":rolelist[role_i-1].front
		}
		
		roleFront.src=role.front;
		
		setTimeout(function(){
			$(".name").show()
		},500)
		
	})
	
	
	$(".name button:eq(0)").click(function(){
		$(".sex").show();
		$(".choice-role").hide();
		$(".choice-role .c-box").find("div").hide();
		$(".name").hide().find("input").val("")
	})
	

	$(".name button:eq(1)").click(function(){
		if($(".name input").val()==""){
			alert("请输入你的名字")
		}else{
			name="您好，"+ $(".name input").val();
			setTimeout(function(){
				initplay()
				$(".choice-role").hide();
			},500)
		}
		
		
	})
	
	$(".again").click(function(){
		init();
	});
	
	
	$(".ask").click(function() {
		var _this = $(this);
		_this.addClass("current")
		$(".ask").attr("disabled","disabled");
	
		index++;
	
		var t2 = setTimeout(function() {//1秒后背景移动
			bgMove();
			_this.removeClass("current").parent().hide();
			$(".ask").removeAttr("disabled");
			$(".scene img").eq(5-index).attr("src","images/scene/scene"+parseInt(index+1)+".gif").addClass("a");
			$(".cover").hide();
			clearTimeout(t2)
			
			var t3 = setTimeout(function(){//2秒后人物移动
				console.log(index)
				if(index<4){
					roleMove()
				}
				clearTimeout(t3)
			},2000)
		}, 1000)
	})
	
	var aud = document.getElementById("myAudio");
	aud.addEventListener("ended", function(){
	   $(".titles").hide();
		Mbgm.play();
		Mbgm.volume=0.4
	   init();
	});


})





var ctximg=new Image()
	ctximg2=new Image(),
	ctximg3=new Image(),
	ctximg4=new Image(),
	ctximg5=new Image();
	ctximg.src="images/rbg.jpg";
	ctximg2.src="images/imgbg.jpg";
	ctximg3.src="images/logo.png";
	ctximg4.src="images/ewm.png";
	ctximg5.src="images/tag.png";
	
var roleFront=new Image();
	

function draw(){
	
	var canvas=document.getElementById("canvas");
	canvas.width=750*ratio;
	canvas.height=1334*ratio;
	var ctx=canvas.getContext('2d');
	var canWidth = canvas.width;
	var canHeight = canvas.height;
	
	ctx.drawImage(ctximg,0,0,canWidth,canHeight);
	ctx.drawImage(ctximg2,ratio*60,ratio*137,ratio*639,ratio*551);
	ctx.drawImage(ctximg3,ratio*50,ratio*1186,ratio*190,ratio*78);
	ctx.drawImage(ctximg4,ratio*318,ratio*1131,ratio*412,ratio*173);
	ctx.drawImage(ctximg5,ratio*89,ratio*709,ratio*587,ratio*76);
	ctx.drawImage(roleFront,ratio*458,ratio*68,ratio*200,ratio*647);
	
	ctx.fillStyle="#333";
	ctx.font= 40*ratio + "px FZJunHJW_Zhun Microsoft Yahei";
	ctx.fillText(name,ratio*60,ratio*100);
	
	ctx.textAlign="center";
	ctx.fillStyle="#515254";
	ctx.font=32*ratio+"px FZJunHJW_Zhun Microsoft Yahei";
	var lineH=0;
	for (var i=0;i<resultList[0].length;i++) {
		ctx.fillText(resultList[0][i],ratio*375,ratio*830+ratio*lineH);
		lineH+=50;
	}
	$(".imgs").attr("src",canvas.toDataURL("../images/jpeg", 0.8))
}



//加载图片资源
function loadImg(url, cb) {
    var img = new Image();
    img.src = url;
    img.onload = cb;
}

function loadImages(urlArr, AllLoadedFunc) {
    var count = urlArr.length;
    var loadedCount = 0;

    for (var i = count - 1; i >= 0; i--) {
        loadImg(urlArr[i], function () {
            loadedCount += 1;
            if (count === loadedCount) {
                AllLoadedFunc();
            }
        });
    }
}


loadImages([
    'images/scene/scene1.gif',
    'images/scene/scene2.gif',
    'images/scene/scene3.gif',
    'images/scene/scene4.gif',
    'images/scene/scene5.gif',
    'images/scene/scene6.gif',
    'images/a1.png',
    'images/a0.png',
    'images/woman-a.png',
    'images/man-a.png',
    'images/woman.png',
    'images/man.png',
    'images/entrance.gif',
    'images/choice-role.jpg',
    'images/role/w11.png',
    'images/role/w21.png',
    'images/role/w31.png',
    'images/role/m41.png',
    'images/role/m51.png',
    'images/role/m61.png',
    'images/rbg.jpg',
    'images/logo.png',
    'images/ewm.png'
], function () {
	var audiodf = document.getElementById("bgm");
	audiodf.src="images/music/bgm.mp3";
	$("#bgm").load("images/music/bgm.mp3",function(){
		$(".box").show();
		$(".loading").hide();
    	Mbgm.play();
		Mbgm.volume=0.4
	});
	
});
