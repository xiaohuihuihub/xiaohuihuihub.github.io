$(function () {
   /* $(".lun .lun1").click(function () {
        $(".lun .lun1").removeClass("active")
        $(this).addClass("active")
    })*///第一种
   /* $(".lun .lun1").click(function () {
        $(".lun .lun1").removeClass("active").filter(this).addClass("active")
    })*///第二种
    /*$(".lun .lun1").click(function () {
        $(this).addClass("active")
        $(".lun .lun1").not(this).removeClass("active")
    })*///第三种
   /* $(".lun .lun1").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })*///第四种
   /* $(".lun .lun1").click(function () {
        $(".lun .lun1").filter(".active").removeClass("active")
        $(this).addClass("active")
    })*///第五种
    // var index=$(".lun .lun1").index(this);
// var btns= $(".lun .lun1")
//     console.log(btns)
    $(".lun .lun1").click(function () {
        var index=$(this).index()
        $(".lun .lun1").filter(".active").removeClass("active").end().eq(index).addClass("active"),
        $(".bannerbox li").filter(".active").removeClass("active").end().eq(index).addClass("active")
    })
    var num=0;
    var t=setInterval(move,3000)
    function move() {
            num++;
            if(num==$(".lun .lun1").length){
                num=0
            }
        $(".lun .lun1").filter(".active").removeClass("active").end().eq(num).addClass("active"),
             $(".bannerbox li").filter(".active").removeClass("active").end().eq(num).addClass("active")
    }
    $(".bann").hover(function () {
        clearInterval(t)
    },function () {
        t=setInterval(move,3000)
    })
    //楼层跳转
})//结束
