$(".bgindex").each(function (index,v) {
    $(v).hover(function () {
        $(".dropdown-menu").eq(index).css("display","block");
    },function () {
        $(".dropdown-menu").eq(index).css("display","none");
    })
});
var nums=0;
setInterval(function () {
    nums++;
    if(nums==2){
        nums=0;
    }
    $(".bn-imgs a").filter(".active").removeClass("active").end().eq(nums).addClass("active");
},5000)
$(".list>li").each(function (i,app) {
    $(app).hover(function () {
        $(".app-block-over").eq(i).addClass("active");
    },function () {
        $(".app-block-over").eq(i).removeClass("active");
    })

})
$(".r-list .active .r-title").each(function (r,rc) {
    $(rc).mouseover(function () {
        $(".active>div").filter(".actives").removeClass("actives").end().eq(r).addClass("actives")
    })
})