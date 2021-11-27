

// todo 获取所有的对号图标
var right = document.getElementsByClassName('right');

// todo手机号验证
var phone = document.getElementsByClassName('phone')[0];
// console.log(phone);
phone.onblur = function () {
    let value_ = phone.value;
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (value_.length == '') {
        right[0].src = '../src/img/erro.png';
    } else if (!reg.test(value_)) {
        right[0].src = '../src/img/erro.png';
    } else {
        right[0].src = '../src/img/right.png';
    }
}

// todo 图片验证
var img_ma = document.getElementsByClassName('img_ma')[0];
// console.log(phone);
img_ma.onblur = function () {
    let value_ = img_ma.value;
    if (value_.length == '') {
        right[1].src = '../src/img/erro.png';
        alert('图片验证码不能为空');
    } else if (value_ != 'r2B7' && value_ != 'r2b7' && value_ != 'R2B7' && value_ != 'R2b7') {
        alert('图片验证码输入错误');
        right[1].src = '../src/img/erro.png';
    } else {
        right[1].src = '../src/img/right.png';
    }
}

// todo 图片验证
var phone_ma = document.getElementsByClassName('phone_ma')[0];
function phonema() {
    alert('6688');
}
phone_ma.onblur = function () {
    let value_ = phone_ma.value;
    if (value_.length == '') {
        right[2].src = '../src/img/erro.png';
        alert('验证码不能为空');
    } else if (value_ != '6688') {
        alert('验证码输入错误');
        right[2].src = '../src/img/erro.png';
    } else {
        right[2].src = '../src/img/right.png';
    }
}

// todo 用户名验证
var user = document.getElementsByClassName('user')[0];
user.onblur = function () {
    let value_ = user.value;
    if (value_.length == '' || value_.length < 2 || value_.length > 6) {
        right[3].src = '../src/img/erro.png';
    } else {
        right[3].src = '../src/img/right.png';
    }
}

// todo 密码验证
var psw = document.getElementsByClassName('psw')[0];
psw.onblur = function () {
    let value_ = psw.value;
    if (value_.length == '' || value_.length < 8 || value_.length > 16) {
        right[4].src = '../src/img/erro.png';
    } else {
        right[4].src = '../src/img/right.png';
    }
}
// todo 确认密码验证
var psw1 = document.getElementsByClassName('psw1')[0];
psw1.onblur = function () {
    let value_ = psw1.value;
    if (value_.length == '' || value_.length < 8 || value_.length > 16) {
        right[5].src = '../src/img/erro.png';
    } else if (value_ != psw.value) {
        right[5].src = '../src/img/erro.png';
    } else {
        right[5].src = '../src/img/right.png';
    }
}

// todo 登录按钮的点击
let login_box = document.getElementsByClassName('login_box')[0];
var masking = document.createElement('div');    //创建一个div
function login() {
    var body_ = document.getElementsByTagName('body')[0];//  通过标签名找到body
    masking.className = 'mk';                             //给div起一个类名
    body_.appendChild(masking);                            //把这个div添加进body
    login_box.style.display = 'block';
}
// todo 立即登录的点击事件
function reg() {
    register_box.style.display = 'none';
    masking.className = '';              //给div类名清空
    alert('登录成功！');
}

// todo 注册按钮的点击
let register_box = document.getElementsByClassName('register_box')[0];
// var masking1 = document.createElement('div');    //创建一个div
function register() {
    var body_ = document.getElementsByTagName('body')[0];//  通过标签名找到body
    masking.className = 'mk';                             //给div起一个类名
    body_.appendChild(masking);                            //把这个div添加进body
    register_box.style.display = 'block';
}
// todo 立即注册的点击事件
function log() {
    login_box.style.display = 'none';
    masking.className = '';              //给div类名清空
    alert('注册成功！');

}



// todo 锚点的事件
var mao = document.getElementById('mao');
window.onscroll = function () {
    if (window.pageYOffset >= 0 && window.pageYOffset < 420) {
        mao.style.display = 'none';
        mao.style.opacity = '0';
    } else {
        mao.style.display = 'block';
        mao.style.opacity = '1';

    }
}

// todo a标签的样式
var a = document.getElementsByClassName('jump');
window.onload = () => {
    // console.log(123);
    if (window.location.href == 'http://127.0.0.1:5500/jiguo_project/home/index.html') {
        a[0].style.color = '#ff413d';
    } else if (window.location.href == 'http://127.0.0.1:5500/jiguo_project/home/kuwan.html') {
        a[1].style.color = '#ff413d';
    } else if (window.location.href == 'http://127.0.0.1:5500/jiguo_project/home/guid.html') {
        a[2].style.color = '#ff413d';
    } else if (window.location.href == 'http://127.0.0.1:5500/jiguo_project/home/try.html') {
        a[3].style.color = '#ff413d';
        console.log(window.location.href);
    } else if (window.location.href == 'http://127.0.0.1:5500/jiguo_project/home/rep.html') {
        a[4].style.color = '#ff413d';
    }
    // showData();
}

// todo 锚点的事件
var mao = document.getElementById('mao');
window.onscroll = function () {
    if (window.pageYOffset >= 0 && window.pageYOffset < 420) {
        mao.style.display = 'none';
        mao.style.opacity = '0';
    } else {
        mao.style.display = 'block';
        mao.style.opacity = '1';

    }
}






