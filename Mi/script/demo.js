var img=document.querySelectorAll(".ban li")
var lun=document.querySelectorAll(".lunbo .dian")
var banner=document.querySelector(".banner")
var zuojian=document.querySelector(".zjs")
var youjian=document.querySelector(".yjs")
var obj=img[0]
var obj1=lun[0]
Array.from(lun).forEach(function (value,index) {

    value.onmouseover=function () {
        num=index;
        obj1.style.background="black"
        obj.style.opacity=0;
        obj.style.zIndex=1;
        lun[index].style.background="white"
        img[index].style.opacity=1;
        img[index].style.zIndex=2;
        obj1=lun[index];
        obj=img[index];
    }
})
var t=setInterval(move,2000);
var num=0;
function move() {
    num++;
    if(num==lun.length){
        num=0;
    }
    if(num==-1){
        num=lun.length-1;
    }
    obj1.style.background="black"
    obj.style.zIndex=1;
    obj.style.opacity=0;
    lun[num].style.background="white"
    img[num].style.zIndex=2;
    img[num].style.opacity=1;
    obj1=lun[num];
    obj=img[num]
}

banner.onmouseover=function () {
    clearInterval(t)
}
banner.onmouseout=function () {
    t=setInterval(move,2000)
}
youjian.onclick=function(){
    move();
}
zuojian.onclick=function(){
    num-=2
    move();
}
//购物车
var gouwu=document.querySelector(".gouwu")
var menu=document.querySelector(".menu")
gouwu.onmouseover=function () {
    menu.style.height=98+"px"
}
gouwu.onmouseout=function () {
    menu.style.height=0;
}
//nav
var clearfix=document.querySelectorAll(".clear .clearfix")
var navli=document.querySelectorAll(".nav-right ul>.li1 a")
// console.log(navli)
Array.from(navli).forEach(function (v,i) {
    v.onmouseover=function () {
        clearfix[i].style.height=230+"px"
        clearfix[i].style.borderTop="1px solid #000";
    }
    v.onmouseout=function () {
        clearfix[i].style.height=0
        clearfix[i].style.borderTop="0px solid #000";
    }
})
//aside
console.log($(".child").eq(2))
$("aside>ul>li").each(function (i,v) {
    $(this).hover(function () {
      $(".child").eq(i).css("display","block")
        console.log(i)
    },function () {
        $(".child").eq(i).css("display","none")
    })
})
//单品
var danpin=setInterval(moves,2000)
function moves() {
    $(".lunbo2-zuo").css("marginLeft","1240px")
}


