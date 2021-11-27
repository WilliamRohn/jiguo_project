//获取元素
var li_ = document.getElementsByClassName('try-li');
var ul1=document.getElementsByClassName('call')[0];
var try_box = document.getElementsByClassName('try-box')[0];
// var value_ = li_[1].firstChild.nodeValue;
// console.log(value_);
// console.log(li_[3]);
//触发showData
window.onload = showData;
//大众试用 点击事件
li_[0].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    li_[1].style.borderBottom = 'none';
    li_[1].style.color = '';
    this.style.borderBottom = 'solid 4px #fe5431';
    this.style.color = '#fe5431';
    showData();
}
//大众试用 渲染事件
function showData() {
    ul1.style.display='flex';
    ul2.style.display='none';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/public');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);
                // console.log(res);
                // console.log("没有哎");

                //把数据渲染到页面上
                render_html(res);
            }
        }
    }

    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';

            str += '<div>首发</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span class="green red">2023</span><span class="green red">20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report red2 green2">报告数量：8</span>';
            str += '</li>';
            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
    // var look=document.getElementsByClassName('look')[0];
    // look.innerHTML='查看试用名单';
    // console.log(look);
    call();
}
li_[0].onmouseup=function(){
    try_box.style.animation='interim 1.5s';
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
}
li_[1].onmouseup=function(){
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='interim 1.5s';
}
li_[2].onmouseup=function(){
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='interim 1.5s';

}
li_[3].onmouseup=function(){
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='interim 1.5s';
}
li_[4].onmouseup=function(){
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='interim 1.5s';
}
li_[5].onmouseup=function(){
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='interim 1.5s';
}
// 大众试用 全部
li_[2].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    call();
}
function call() {
    li_[3].style.color = '#a3a3a3';
    li_[4].style.color = '#a3a3a3';
    li_[5].style.color = '#a3a3a3';
    li_[2].style.color = '#ccc';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/public');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);

                //把数据渲染到页面上
                render_html(res);
            }
        }
    }

    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';
            str += '<div>首发</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span class="green red">2023</span><span class="green red">20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report red2 green2">报告数量</span>';
            str += '</li>';

            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
}
// 大众试用 申请中
li_[3].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    li_[2].style.color = '#a3a3a3';
    li_[4].style.color = '#a3a3a3';
    li_[5].style.color = '#a3a3a3';
    li_[3].style.color = '#ccc';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/public');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);

                //把数据渲染到页面上
                render_html(res);
            }
        }
    }
    var value_ = li_[1].firstChild.nodeValue;
    console.log(value_);
    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';
            // if (value_ == 体验师专享) {
            //     str += '<div class="experience">体验师专享</div>';
            // }if else(value_ == 体验师专享){
            //     
            // }
            str += '<div>首发</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span class="redall">2023</span><span class="redall">20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report red2all">报告数量:8</span>';
            str += '</li>';

            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
}
// 大众试用 试用中
li_[4].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    li_[2].style.color = '#a3a3a3';
    li_[3].style.color = '#a3a3a3';
    li_[5].style.color = '#a3a3a3';
    li_[4].style.color = '#ccc';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/public');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);

                //把数据渲染到页面上
                render_html(res);
            }
        }
    }

    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';
            str += '<div>首发</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span class="greenall">2023</span><span class="greenall">20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report green2all">查看试用名单</span>';
            str += '</li>';

            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
}
li_[5].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    li_[2].style.color = '#a3a3a3';
    li_[3].style.color = '#a3a3a3';
    li_[4].style.color = '#a3a3a3';
    li_[5].style.color = '#ccc';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/public');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);

                //把数据渲染到页面上
                render_html(res);
            }
        }
    }

    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';
            str += '<div>首发</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span>2023</span><span>20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report">报告数量</span>';
            str += '</li>';

            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
}
//体验师专享 点击事件
var ul2=document.getElementsByClassName('call2')[0];
var li2=document.getElementsByClassName('call2')[0].children;
// console.log(li2[0]);
li_[1].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    call3();
    ul1.style.display='';
    ul2.style.display='flex';
    li_[0].style.borderBottom = 'none';
    li_[0].style.color = '#a3a3a3';
    this.style.borderBottom = 'solid 4px #fe5431';
    this.style.color = 'red';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/master');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);
                //把数据渲染到页面上
                render_html(res);
            }
        }
    }
    //体验师专享 渲染事件
    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';
            str += '<div class="experience">体验师专享</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span class="green red">2023</span><span class="green red">20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report red2 green2">报告数量</span>';
            str += '</li>';

            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
}
// 体验师专享 全部
li2[0].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    call3();
}
function call3() {
    li2[1].style.color = '#a3a3a3';
    li2[2].style.color = '#a3a3a3';
    li2[3].style.color = '#a3a3a3';
    li2[0].style.color = '#ccc';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/public');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);

                //把数据渲染到页面上
                render_html(res);
            }
        }
    }

    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';
            str += '<div class="experience">体验师专享</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span class="green red">2023</span><span class="green red">20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report red2 green2">报告数量</span>';
            str += '</li>';

            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
}
// 体验师专享 申请中
li2[1].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    li2[0].style.color = '#a3a3a3';
    li2[2].style.color = '#a3a3a3';
    li2[3].style.color = '#a3a3a3';
    li2[1].style.color = '#ccc';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/public');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);

                //把数据渲染到页面上
                render_html(res);
            }
        }
    }
    var value_ = li_[1].firstChild.nodeValue;
    console.log(value_);
    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';
            // if (value_ == 体验师专享) {
            //     str += '<div class="experience">体验师专享</div>';
            // }if else(value_ == 体验师专享){
            //     
            // }
            str += '<div class="experience">体验师专享</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span class="redall">2023</span><span class="redall">20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report red2all">报告数量:8</span>';
            str += '</li>';

            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
}
// 大众试用 试用中
li2[2].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    li2[0].style.color = '#a3a3a3';
    li2[1].style.color = '#a3a3a3';
    li2[3].style.color = '#a3a3a3';
    li2[2].style.color = '#ccc';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/public');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);

                //把数据渲染到页面上
                render_html(res);
            }
        }
    }

    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';
            str += '<div class="experience">体验师专享</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span class="greenall">2023</span><span class="greenall">20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report green2all">查看试用名单</span>';
            str += '</li>';

            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
}
li2[3].onmousedown = function () {
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
    try_box.style.animation='none';
    li2[0].style.color = '#a3a3a3';
    li2[1].style.color = '#a3a3a3';
    li2[2].style.color = '#a3a3a3';
    li2[3].style.color = '#ccc';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/useing/public');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);

                //把数据渲染到页面上
                render_html(res);
            }
        }
    }

    function render_html(val) {
        var str = '';
        for (var i of val) {
            str += '<li>';
            str += '<div class="experience">体验师专享</div>';
            str += '<img src="' + i.img + '" alt="">';
            str += '<h2>' + i.text + '</h2>';
            str += '<span>2023</span><span>20台</span>';
            str += '<p><span>1392</span>申请</p>';
            str += '<span class="report">报告数量</span>';
            str += '</li>';

            var try_box = document.getElementsByClassName('try-box')[0];
            try_box.innerHTML = str;
        }
    }
}
li2[0].onmouseup=function(){
    try_box.style.animation='interim 1.5s';
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
}
li2[1].onmouseup=function(){
    try_box.style.animation='interim 1.5s';
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
}
li2[2].onmouseup=function(){
    try_box.style.animation='interim 1.5s';
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
}
li2[3].onmouseup=function(){
    try_box.style.animation='interim 1.5s';
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
}

