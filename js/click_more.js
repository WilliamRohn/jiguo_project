// todo 点击加载更多
var click_more = document.getElementsByClassName('click_more')[0];
var play_hidden = document.getElementsByClassName('play_hidden')[0];

click_more.onclick= ()=>{
    click_more.style.display = 'none';
    play_hidden.style.display = 'flex';

}

// todo 轮播图热门试用的点击跳转
var hot_try = document.getElementsById('hot_try');
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