//新闻轮播
jQuery(".news").slide({mainCell:".bd",effect:"left",autoPlay:true,interTime:5000,delayTime:800,switchLoad:"data-src"});
//微博轮播
jQuery(".sc5").slide({titCell:".hd",mainCell:".bd",autoPage:"<li></li>",effect:"topLoop",autoPlay:true,vis:4 });
//服务咨询轮播
jQuery(".sc6").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,easing:"easeOutCirc",scroll:4,vis:4,interTime:3000,delayTime:800});