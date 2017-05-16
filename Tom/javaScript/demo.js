var lianyi = document.querySelectorAll(".huibo a");
var a = document.querySelectorAll(".xiaotu a")
var you = document.querySelectorAll(".lianyou li")
var juxing = document.querySelectorAll(".juxing")
var miao2 = document.querySelectorAll(".miaom")
var small = document.querySelectorAll(".small")
var banner = document.querySelectorAll(".ba li")
var lun = document.querySelectorAll(".lun .lun1")
var ba = document.querySelector(".banner")
var ban = document.querySelector(".banner .ban")
var mask = document.querySelectorAll(".lianzuo .mask")
var left = document.querySelector(".lianzuo .x-left")
var right = document.querySelector(".lianzuo .x-right")
var big = document.querySelector(".big")
var big2=document.querySelector(".big2")
//header
var list = document.querySelectorAll(".list>li")
var lists = document.querySelectorAll(".lists")
var arr1=[]
Array.from(lists).forEach(function (value, index) {
    var listsLi=value.querySelectorAll(".lists>li")
    var height=listsLi.length*32;
    arr1.push(height)
})
arr1.splice(-1,1,200)
arr1.splice(4,1,215)
console.log(arr1)
Array.from(list).forEach(function (value,index) {
    value.onmouseover=function () {
        lists[index].style.height=arr1[index]+"px"
    }
    value.onmouseout=function () {
        lists[index].style.height=0;
    }
})
//banner动效
var obj = lun[0];
var obj1 = banner[0];
var colorArr = ["#e8e8e8", "#1751D8", "#D6E064", "#8F6BEE", "#e8e8e8", "#FCA031"]

Array.from(lun).forEach(function (value, index3) {
hover(value,
    value.onmouseover = function () {
        num = index3;
        obj.style.background = "rgba(0,0,0,0.5)"
        obj1.style.zIndex = 1;
        obj1.style.opacity = 0;
        lun[index3].style.background = "rgba(255,255,255,0.5)"
        banner[index3].style.zIndex = 2;
        banner[index3].style.opacity = 1;
        ban.style.background = colorArr[index3];
        obj1 = banner[index3];
        obj = lun[index3];
    })
})
var num = 0;
function move() {
    num++;
    if (num == lun.length) {
        num = 0;
    }
    obj.style.background = "rgba(0,0,0,0.5)"
    obj1.style.zIndex = 3;
    obj1.style.opacity = 0;
    lun[num].style.background = "rgba(255,255,255,0.5)"
    banner[num].style.zIndex = 4;
    banner[num].style.opacity = 1;
    ban.style.background = colorArr[num];
    obj1 = banner[num];
    obj = lun[num];
}
var y = setInterval(move, 2000)
ba.onmouseover = function () {
    clearInterval(y)
}
ba.onmouseout = function () {
    y = setInterval(move, 2000)
}
//section lianyou
Array.from(you).forEach(function (value, index) {
    value.onmouseover = function () {
        juxing[index].style.opacity = 1;

    }
    value.onmouseout = function () {
        juxing[index].style.opacity = 0;

    }
})
//lianzuo 下面的小猫
//lianzuo动效
var objnn = lianyi[0]
var objmiao = miao2[0]
var objmask = mask[0]
console.log(objmask)
Array.from(a).forEach(function (value1, index1) {
    value1.onmouseover = function () {
        objnn.style.opacity = 0;
        objnn.style.zIndex = 1;
        objmiao.style.display = "none";
        objmask.style.opacity = 0;
        lianyi[index1].style.opacity = 1;
        lianyi[index1].style.zIndex = 2;
        miao2[index1].style.display = "block";
        mask[index1].style.opacity = 1;
        objnn = lianyi[index1]
        objmask = mask[index1]
        objmiao = miao2[index1]
    }
})
var num = 0;
function move1() {
    num++;
    if (num == a.length) {
        num = 0;
    }
    objnn.style.opacity = 0;
    objnn.style.zIndex = 1;
    objmiao.style.display = "none";
    objmask.style.opacity = 0;
    lianyi[num].style.opacity = 1;
    lianyi[num].style.zIndex = 2;
    mask[num].style.opacity = 1;
    objnn = lianyi[num]
    objmask = mask[num]
    objmiao = miao2[num]
}
//lianzuo 点击事件

right.onclick = function () {
    big.style.marginLeft = -492 + "px"
    right.style.opacity = 0;
    left.style.opacity = 1;
    lianyi[3].style.opacity = 1;
    miao2[3].style.display = "block";
    lianyi[3].style.zIndex = 2;
}
left.onclick = function () {
    big.style.marginLeft = 0
    left.style.opacity = 0;
    right.style.opacity = 1;
    lianyi[0].style.opacity = 1;
    miao2[0].style.display = "block";
    lianyi[0].style.zIndex = 3;

}
//lianzuo 字的动效
var num1=0;
setInterval(function () {
    if(num1==0){
        big2.style.transition="all 1s";
    }
    num1++;
    big2.style.marginTop=-40*num1+"px";
},3000)
big2.addEventListener("transitionend",function () {
    if(num1==4){
        big2.style.marginTop=0;
        big2.style.transition="none";
        num1=0
    }
})

//nav 小喵咪
var inner = document.querySelector(".inner");
var a = document.querySelectorAll(".inner a")
var xiaomiaomi = document.querySelectorAll(".inner a .xiaomiaomi")
console.log(xiaomiaomi.length)
Array.from(a).forEach(function (value, index) {
    value.onmouseover = function () {
        xiaomiaomi[index].style.top = "-13" + "px";
        xiaomiaomi[index].style.opacity = 1;
    }
    value.onmouseout = function () {
        xiaomiaomi[index].style.top = 0;
        xiaomiaomi[index].style.opacity = 0;
    }

})
//楼梯
var zuolan=document.querySelector(".zuolan")
var zuolanul=document.querySelectorAll(".zuolan ul li")
var floor=document.querySelectorAll(".floor")
var pfc=document.querySelector(".pfc")
window.onscroll=function () {
    var top=document.body.scrollTop;
    if(top>900){
        zuolan.style.width="35px"
        zuolan.style.height="332px"
        pfc.style.top="0px"
    }else {
        zuolan.style.width=0;
        zuolan.style.height=0;
        pfc.style.top="-50px"
    }
}
Array.from(zuolanul).forEach(function (value,index) {
    value.onclick=function () {
        var top1=floor[index].offsetTop;
        animate(document.body,{scrollTop:top1})

       // document.body.scrollTop=top1

    }

})
//返回顶部
var dingbu=document.querySelector(".zuolan .top");
dingbu.onclick=function(){animate(document.body,{scrollTop:0})}
var youlan10=document.querySelector(".youlan10")
youlan10.onclick=function () {
    animate(document.body,{scrollTop:0})
}
//右栏效果
var Right=document.querySelectorAll(".Right")
var fly=document.querySelectorAll(".fly")
var ff;
Array.from(Right).forEach(function (value,index) {
   hover(value,function () {
        clearTimeout(ff)
        ff=setTimeout(function () {
            fly[index].classList.add("show")
            // value.style.background="red"
            
        },300)
    },function () {
        clearTimeout(ff)
        if(fly[index].classList.contains("show")){
            fly[index].classList.remove("show")
            fly[index].classList.add("hide")
            // value.style.background=""
        }
    })


})
fly.forEach(function (value,index) {
    value.addEventListener("animationend",function () {
        if(value.classList.contains("hide")){
            value.classList.remove("hide")
        }
    })
})
//右栏二维码效果
var youlan9=document.querySelector(".youlan9")
var saoma=document.querySelector(".saoma")
var ff1;
hover(youlan9,function () {
    clearTimeout(ff1)
    ff1=setTimeout(function () {
        saoma.classList.add("show")
    },100)
},function () {
    clearTimeout(ff1)
    if(saoma.classList.contains("show")){
        saoma.classList.remove("show")
        saoma.classList.add("hide")
    }
})
saoma.addEventListener("animationend",function () {
    if(saoma.classList.contains("hide")){
        saoma.classList.remove("hide")
    }
})
//二级页面效果
var erjili=document.querySelectorAll("aside>ul>li");
var innerCon=document.querySelectorAll(".inner-con")
var inn=0;
erjili.forEach(function (v,i) {
    v.onmouseover=function () {
      /*  e.stopPropagation()*/
        innerCon[i].style.display="block"
    }
    v.onmouseout=function () {

        innerCon[i].style.display="none"
    }


})

