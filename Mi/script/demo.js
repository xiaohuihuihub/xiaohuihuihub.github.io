var img = document.querySelectorAll(".ban li")
var lun = document.querySelectorAll(".lunbo .dian")
var banner = document.querySelector(".banner")
var zuojian = document.querySelector(".zjs")
var youjian = document.querySelector(".yjs")
var obj = img[0]
var obj1 = lun[0]
Array.from(lun).forEach(function (value, index) {

    value.onmouseover = function () {
        num = index;
        obj1.style.background = "black"
        obj.style.opacity = 0;
        obj.style.zIndex = 1;
        lun[index].style.background = "white"
        img[index].style.opacity = 1;
        img[index].style.zIndex = 2;
        obj1 = lun[index];
        obj = img[index];
    }
})
var t = setInterval(move, 2000);
var num = 0;
function move() {
    num++;
    if (num == lun.length) {
        num = 0;
    }
    if (num == -1) {
        num = lun.length - 1;
    }
    obj1.style.background = "black"
    obj.style.zIndex = 1;
    obj.style.opacity = 0;
    lun[num].style.background = "white"
    img[num].style.zIndex = 2;
    img[num].style.opacity = 1;
    obj1 = lun[num];
    obj = img[num]
}

banner.onmouseover = function () {
    clearInterval(t)
}
banner.onmouseout = function () {
    t = setInterval(move, 2000)
}
youjian.onclick = function () {
    move();
}
zuojian.onclick = function () {
    num -= 2
    move();
}
//购物车
var gouwu = document.querySelector(".gouwu")
var menu = document.querySelector(".menu")
gouwu.onmouseover = function () {
    menu.style.height = 98 + "px"
}
gouwu.onmouseout = function () {
    menu.style.height = 0;
}
//nav
// console.log(navli)

$(".nav-right ul>.li1").each(function (i,v) {
    var isShow=false;
    $(this).mouseover(function(){
        $(".clearfix").eq(i).show();
    });
    $(this).mouseout(function () {
        $(".clearfix").eq(i).hide()
    })
    $(".clearfix").eq(i).mouseover(function(){
        // isShow=true;
        $(this).show();
    });
    $(".clearfix").eq(i).mouseout(function(){

            $(this).hide();
            // isShow=false;
       

    });
})
//aside
$("aside>ul>li").each(function (i, v) {
    $(this).hover(function () {
        $(".child").eq(i).show()
    }, function () {
        $(".child").eq(i).hide()
    })
    $(".child").eq(i).hover(function () {
        $(this).show()
    },function () {
        $(this).hide()
    })
})
//单品
var danpin = setInterval(moves, 5000)
var dan = 0;
function moves() {
    // console.log(dan)
    dan++;
    if (dan == 1) {
        $("figure").css("marginLeft", "-1240px")
        $(".lunbo2-you").css("color", "#ccc")
        $(".lunbo2-zuo").css("color", "#b0b0b0")
    }
    else if (dan == 2) {
        $("figure").css({marginLeft: 0})
        $(".lunbo2-you").css("color", "#b0b0b0")
        $(".lunbo2-zuo").css("color", "#ccc")
        dan = 0;
    }
}
$("article").hover(function () {
    clearInterval(danpin)
}, function () {
    danpin = setInterval(moves, 5000)
})
var flagdan = true;
$(".lunbo2-zuo").click(function () {
    if (flagdan) {
        moves()
    }
    flagdan = false;
})
$(".lunbo2-you").click(function () {
    if (flagdan == false) {
        num = 2;
        moves()
    }
    flagdan = true;
})
$(".lunbo2-you").hover(function () {
    if (flagdan) {
        $(this).css("color", "orange")
    }
}, function () {
    if (flagdan) {
        $(this).css("color", "")
    }
})
$(".lunbo2-zuo").hover(function () {
    if (flagdan == false) {
        $(this).css("color", "orange")
    }
}, function () {
    if (flagdan == false) {
        $(this).css("color", "")
    }
})
//切换
function qiehuan(ea,ele) {
    var hh = 5;
    ea.each(function (i) {
        $(this).hover(function () {
            hh++;
            ele.eq(i).css("z-index", hh)
            ea.removeClass("actives").filter(this).addClass("actives")
        })
    })
}
qiehuan($(".r"),$(".ca"))
qiehuan($(".da"),$(".da-he"))
qiehuan($(".pj"),$(".pei"))
qiehuan($(".zhou"),$(".zh"))
//内容
var flagn = true;
function neirong(neli, qu, yk, zk,i) {
    var flagku = true;
    var mo;
    var index;
    neli.click(function () {
        index = $(this).index();
        li = index;
        mo = index * 296;
        neli.filter(".activess").removeClass("activess").end().eq(index).addClass("activess");
        qu.css("marginLeft", -mo + "px");
    }).hover(function () {
        $(this).addClass("or")
    }, function () {
        $(this).removeClass("or")
    })
    var li = 0;
    function mov() {
        li++;
        qu.css("marginLeft", -li * 296 + "px");
    }
    yk.click(function () {
        if (li == 0 || li == 1||li==i) {
            mov()
            neli.filter(".activess").removeClass("activess").end().eq(li).addClass("activess");
        }

    })
    zk.click(function () {
        if (li==(i+1)||li == 2 || li == 1) {
            li -= 2;
            mov()
            neli.filter(".activess").removeClass("activess").end().eq(li).addClass("activess");
        }

    })
}

neirong($(".neli1 .lun .lun1"), $(".neli1 .quan"), $(".neli1 .youkuang"), $(".neli1 .zuokuang"),1);
neirong($(".neli2 .lun .lun1"), $(".neli2 .quan2"), $(".neli2 .youkuang"), $(".neli2 .zuokuang"),2);
neirong($(".neli3 .lun .lun1"), $(".neli3 .quan3"), $(".neli3 .youkuang"), $(".neli3 .zuokuang"),2);
neirong($(".neli4 .lun .lun1"), $(".neli4 .quan4"), $(".neli4 .youkuang"), $(".neli4 .zuokuang"),2);











