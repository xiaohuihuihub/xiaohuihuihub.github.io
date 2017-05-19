//秒杀



$(function () {
    ///秒杀
    var time =10800;
    var mins = 0;
    var secs = 0;
    var hours=0;
    var x= setInterval(times, 1000);
    function times() {
        time--;
        console.log(time);
        hours=Math.floor(time/3600);
        mins = Math.floor((time-hours*3600)/60);
        secs = Math.floor((time-hours*3600)% 60);
        var s3 = (secs < 10 ? "0" + secs : secs);
        var s2 = (mins < 10 ? "0" +mins : mins);
        var s1 = (hours < 10 ? "0" +hours : hours);
        $(".hour").html(s1);
        $(".minute").html(s2);
        $(".second").html(s3);

    }
    if(time==0){
        clearInterval(x);
    }else{
        x= setInterval(times, 1000);
    }

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
function banner(lun,banli,box,pre,next) {
    lun.mouseover(function () {
        var index=$(this).index()

        lun.filter(".active").removeClass("active").end().eq(index).addClass("active"),
            banli.filter(".active").removeClass("active").end().eq(index).addClass("active")
        num=index;
    })
    var num=0;
    var t=setInterval(move,3000)
    function move() {
        num++;
        if(num==lun.length){
            num=0
        }
        lun.filter(".active").removeClass("active").end().eq(num).addClass("active"),
            banli.filter(".active").removeClass("active").end().eq(num).addClass("active")
    }
    box.hover(function () {
        clearInterval(t)
    },function () {
        t=setInterval(move,3000)

    })
    next.click(function () {
        move()
    })
   pre.click(function () {
        num-=2;
        if(num==-2){
            num=lun.length-2;
        }
        move()
    })
}
    banner( $(".lun .lun1"),$(".bannerbox li"), $(".bann"),$(".ba-pre"),$(".ba-next"))
    banner( $(".lun2 .luns"),$(".chuchai"),$(".seck2"),$(".s-pre"),$(".s-next"))
    banner( $(".lun3 .lun3s"),$(".tu a"), $(".enjoy-zhibo"),$(".enjoy-zhibo .pre"),$(".enjoy-zhibo  .next"))

  /*  $(".lun .lun1").click(function () {
        var index=$(this).index()

        $(".lun .lun1").filter(".active").removeClass("active").end().eq(index).addClass("active"),
        $(".bannerbox li").filter(".active").removeClass("active").end().eq(index).addClass("active")
        num=index;
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

    })*/
    $(".listss").each(function (i,v) {
     console.log(i)
     $(this).hover(function () {
     $(".list").eq(i).css("display","block")
     },function () {
     $(".list").eq(i).css("display","none")
     console.log(2)
     })
     })
    // 优品专辑
//排行榜
    var yy=1;
    $(".nei-header>ul>li").each(function (i,v) {
        yy++;
        $(this).mouseover(function () {
            $(".chu").filter(".dis").removeClass("dis").end().eq(i).css("display","block")
        })
    })
    //小图函数
    function tranlate(val,pres,nexts,i) {
        var num=0;
        var flag=true;
        function move() {
            val.css("transition","all 1s linear");
            num++;
            val.css("margin-left",-num*i+"px");
            if(num==3){
                val.css("margin-left",0);
                val.css("transition","none");
                num=0;
            }

            // val.css("transition","all 1s")
     flag=false;
        }
        pres.click(function () {
            num-=2;
            if(num==-2){
                num=0
                val.css("transition","none");
            }
            move()
        })
        nexts.click(function () {
            move()
        })
    }
    tranlate($(".g1 .brands"),$(".g1 .ic-pre"),$(".g1 .ic-next"),570)
    tranlate($(".g2 .brands"),$(".g2 .ic-pre"),$(".g2 .ic-next"),570)
    tranlate($(".g3 .brands"),$(".g3 .ic-pre"),$(".g3 .ic-next"),570)
    tranlate($(".g4 .brands"),$(".g4 .ic-pre"),$(".g4 .ic-next"),570)
    tranlate($(".g5 .brands"),$(".g5 .ic-pre"),$(".g5 .ic-next"),1200)
    tranlate($(".g6 .brands"),$(".g6 .ic-pre"),$(".g6 .ic-next"),570)
    tranlate($(".g7 .brands"),$(".g7 .ic-pre"),$(".g7 .ic-next"),570)
    tranlate($(".g8 .brands"),$(".g8 .ic-pre"),$(".g8 .ic-next"),1200)
    tranlate($(".g9 .brands"),$(".g9 .ic-pre"),$(".g9 .ic-next"),570)
    tranlate($(".g10 .brands"),$(".g10 .ic-pre"),$(".g10 .ic-next"),570)
    tranlate($(".g11 .brands"),$(".g11 .ic-pre"),$(".g11 .ic-next"),570)
    tranlate($(".g12 .brands"),$(".g12 .ic-pre"),$(".g12 .ic-next"),570)
    tranlate($(".ic1 ul"),$(".ic1 .you-pre"),$(".ic1 .you-next"),380)
    tranlate($(".ic2 ul"),$(".ic2 .you-pre"),$(".ic2 .you-next"),380)
    tranlate($(".ic3 ul"),$(".ic3 .you-pre"),$(".ic3 .you-next"),380)
    //滚动事件
    var flag1=true;var flag2=true;
    $(window).scroll(function () {
        var st=$(this).scrollTop();
        if(st>800){
            $(".searchs").css("top",0)
        }else{
            $(".searchs").css("top",-50)
        }
        if(st>1000){
            if(flag1){
                flag1=false;flag2=true;
                $(".leftlan").animate({width:36,height:538});//左边小楼层
            }
        }else{
            if(flag2){
                flag2=false;flag1=true;
                $(".leftlan").animate({width:0,height:0});//左边小楼层
            }
        }

    })
    //回到顶部
    $(".indexbottom").click(function () {
        $("html,body").animate({scrollTop:0});
    })

    var c;
    $(window).scroll(function () {
        var st=$(this).scrollTop();
        clearTimeout(c);
        c=setTimeout(function () {
            $(".lou1").each(function (i,e) {
                if(st>=$(e).offset().top){
                    $(".leftlan .u").eq(i).addClass("active").siblings().removeClass("active")
                }
            })
        },100)
    })
//固定栏右侧
        $(".youlan .index").each(function (i,e) {
            $(this).hover(function () {
                $(this).css("background","#c81623");
                $(".math").eq(i).css({"right":28+"px","background":"#c81623"});
                console.log($(".math").eq(i))
            },function () {
                $(this).css("background","")
                $(".math").eq(i).css({"right":"","background":""});
            })
        })
    //左栏
    console.log( $(".leftlan .u"))
    $(".leftlan .dings").click(function () {
        $("html,body").animate({scrollTop:0});
    })
    $(".leftlan .u").click(function () {
        var index = $(this).index();
        var tops=$(".lou1").eq(index).offset().top;
        $("html,body").animate({scrollTop:tops})
    }).hover(function () {
        var index=$(this).index();
        $(this).css("background","#d70b1c");
    },function () {
        $(this).css("background","");
    })
//aside
    $("aside>ul>li").each(function (i,v) {
        $(v).mouseover(function () {
            $(".lis").eq(i).css("display","block")
        })
        $(v).mouseout(function () {
            $(".lis").eq(i).css("display","none")
        })
        $(".lis").eq(i).mouseover(function () {
            $(".lis").eq(i).css("display","block")
        })
         $(".lis").eq(i).mouseout(function () {
            $(".lis").eq(i).css("display","none")
        })
    })
})//结束
//header



