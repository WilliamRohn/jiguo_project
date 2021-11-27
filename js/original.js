// todo 元旦倒计时部分
var time = document.getElementsByClassName('volice_title3')[0];
function cha() {
    var yuan_ = new Date(2022, 0, 1);
    var now_ = new Date;
    var timer = yuan_ - now_;
    var s = parseInt(timer / 1000 % 60);
    s = s > 9 ? s : '0' + s;
    var min = parseInt(timer / 1000 / 60 % 60);
    min = min > 9 ? min : '0' + min;
    var h = parseInt(timer / 1000 / 60 / 60 % 24);
    h = h > 9 ? h : '0' + h;
    var day = parseInt(timer / 1000 / 60 / 60 / 24 % 30);
    day = day > 9 ? day : '0' + day;
    var month = parseInt(timer / 1000 / 60 / 60 / 24 / 30 % 12) ;
    let time = document.getElementsByClassName('volice_title3')[0];
    time.innerHTML = '申请时间剩余：'+month + '个月' + day + '天' + h + '小时' + min + '分钟' + s + '秒';
};
setInterval(cha,1000);


var apply = document.getElementById('apply');
let ren = document.getElementById('ren');
let tai = document.getElementById('tai');
apply.onclick=()=>{
    if(apply.innerHTML=='立即申请'){
        apply.innerHTML='取消申请';
        ren.innerHTML = Number(ren.innerHTML)+1;
        tai.innerHTML = Number(tai.innerHTML)-1;
    }else if(apply.innerHTML=='取消申请'){
        apply.innerHTML='立即申请';
        ren.innerHTML = Number(ren.innerHTML)-1;
        tai.innerHTML = Number(tai.innerHTML)+1;
    }
}
