//新闻轮播
jQuery(".news").slide({mainCell:".bd",effect:"left",autoPlay:true,interTime:5000,delayTime:800,switchLoad:"data-src"});

//微博轮播
jQuery(".sc5").slide({titCell:".hd",mainCell:".bd",autoPage:"<li></li>",effect:"topLoop",autoPlay:true,vis:4 });

//服务咨询轮播
jQuery(".sc6").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,easing:"easeOutCirc",scroll:4,vis:4,interTime:3000,delayTime:800});

//热门城市
jQuery(".sc9").slide({titCell:".hd li",mainCell:".bd",effect:"fold",autoPlay:true,interTime:5000,delayTime:800,startFun: function(i, c, s, tit) {jQuery(".sc9 .hd span").stop().animate({"left": tit.eq(i).position().left},400,"easeOutBack")} });


// 公共轮播
jQuery(".indexlunbo").slide({titCell:".hd",mainCell:".bd",autoPage:"<li></li>",effect:"fold",autoPlay:true,interTime:5000,delayTime:800});
$(".indexlunbo").hover(
function() {$(this).find(".prev,.next").stop(true, true).fadeTo("show",1)},
function() {$(this).find(".prev,.next").fadeOut()});