// todo 点击加载更多
var click_more = document.getElementsByClassName('click_more')[0];
var play_hidden = document.getElementsByClassName('play_hidden')[0];
let loading = document.getElementById('loading');
function play(){
    click_more.style.display = 'none';
    play_hidden.style.display = 'flex';
}
click_more.onclick= ()=>{
    loading.src = '../src/img/loading.png';
    loading.style.animation = 'load 1.8s linear'
    setTimeout(play,2000);
}

// todo 轮播图热门试用的点击跳转
var hot_try = document.getElementById('hot_try');
hot_try.onclick= ()=>{
    window.location.href ='/jiguo_project/home/try.html';
}


// todo 查看更多的点击事件
var more = document.getElementsByClassName('more');
more[0].onclick= ()=>{
    window.location.href ='/jiguo_project/home/rep.html';
}
more[1].onclick= ()=>{
    window.location.href ='/jiguo_project/home/guid.html';
}
more[2].onclick= ()=>{
    window.location.href ='/jiguo_project/home/kuwan.html';
}