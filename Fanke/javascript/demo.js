var li = document.querySelectorAll(".banner ul li")
var banner = document.querySelector(".banner")
var gunlun = document.querySelectorAll(".gunlun .yuan");
var left=document.querySelector(".banner .left")
var right=document.querySelector(".banner .right")
var wei=document.querySelector(".wei")
var er=document.querySelector(".er")
var dingbu=document.querySelector(".dingbu")
var obj = gunlun[0]
var obj1 = li[0]
console.log(lists)
//nav
var listLi=document.querySelectorAll(".list>li")
var lists=document.querySelectorAll(".lists")
var arr=[]//保存每一个ul高度
 Array.from(lists).forEach(function (value,index) {
 var listsLi= value.querySelectorAll("li")
 var height=listsLi.length*30
 arr.push(height)
 })
 Array.from(listLi).forEach(function (value,index) {
 console.log(index)
 value.onmouseover=function () {
 lists[index].style.height=arr[index]+"px"
 }
 value.onmouseout=function () {
 lists[index].style.height=0;
 }
 })

wei.onmouseover=function () {
    er.style.display="block"
}
wei.onmouseout=function () {
    er.style.display="none"
}
Array.from(gunlun).forEach(function (value, index) {
    hover(value,function () {
        num=index;
        obj1.style.opacity = 0;
        obj1.style.zIndex = 1;
        obj.style.background = "#dddddd";
        li[index].style.opacity = 1;
        li[index].style.zIndex = 2;
        gunlun[index].style.background = "red";
        obj = gunlun[index];
        obj1 = li[index];
    },function () {
        
    })
    
})
var num=0;
function move() {
    num++;
    if(num==gunlun.length){
        num=0;
    }
    if(num==-1){
        num=gunlun.length-1
    }
    obj1.style.opacity = 0;
    obj1.style.zIndex = 1;
    obj.style.background = "#dddddd";
    li[num].style.opacity = 1;
    li[num].style.zIndex = 2;
    gunlun[num].style.background = "red";
    obj = gunlun[num];
    obj1 = li[num];
}
var t=setInterval(move,2000)
banner.onmouseover=function () {
   clearInterval(t)
}
banner.onmouseout=function () {
    t=setInterval(move,2000)
}
left.onclick=function(){
    num=num-2;
    move()
}
right.onclick=function(){
    move()
}

//返回顶部
dingbu.onclick=function () {animate(document.body,{scrollTop:0})}