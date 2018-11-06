$(function() {
    $('.sc1 .t1').hover(
            function(){$(this).find("span").animate({"top":"0px","opacity": 0.6},500);},
            function(){$(this).find("span").animate({"top":"-259px","opacity":1 },500);});
    $('.sc1 .t1').hover(
            function(){$(this).find("p").animate({"bottom":"10px"},500);},
            function(){$(this).find("p").animate({"bottom":"-32px"},500);});
    $('.sc5 li').hover(
            function(){$(this).find("a:first s").animate({"top":"0px"},500);},
            function(){$(this).find("a:first s").animate({"top":"108px"},500);});
    $('.sc2 li,.s2').hover(
            function() {$(this).find("img").fadeTo("fast", 0.8);},
            function() {$(this).find("img").fadeTo("slow", 1);});
    $('.sc1 li,.sc5 li').hover(
            function() {$(this).find("img").fadeTo("fast", 0.60);},
            function() {$(this).find("img").fadeTo("slow", 1);});
});

// footer
$(function(){
    $(`<link rel="stylesheet" href="css/footer.css" type="text/css"/>`).appendTo("head");
    $.ajax({
        url:"footer.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#footer")
        }
    })
})

// header
$(function(){
    $(`<link rel="stylesheet" href="css/header.css" type="text/css"/>`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#header")
        }
    })
})



