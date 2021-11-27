var li_=document.getElementsByTagName('li');
console.log(li_[0]);
window.onload = show;
li_[0].onclick = function () {
    li_[1].style.borderBottom = '';
    li_[1].style.color = '';
    this.style.borderBottom = 'solid 4px #fe5431';
    this.style.color = '#fe5431';
    show();
}
function show() {
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/report/new');
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
            str += '<div class="bigboxx">';
            str += '<img src="'+i.img+'" alt="">';
            str += '<div class="boxx">';
            str += '<p>空气净化器里面学问多得惊呆你，你选对了吗？</p>';
            str += '<div class="minbox1">';
            str += '<img src="../src/img/tx.jpg" alt="">';
            str += '<p><span>苏苏</span>2016-01-25</p>';
            str += '</div>';
            str += '<div class="minbox2">';
            str += '<span>';
            str += '<img src="../src/img/zan_n.png" alt="">';
            str += '3';
            str += '</span>';
            str += '<span>';
            str += '<img src="../src/img/p_n.png" alt="">';
            str += '3';
            str += '</span>';
            str += '</div>';
            str += '</div>';
            str += '</div>';
            str += '<div class="as-regards">';
            str += '<p>关于格林威特空气净化器还有 4 篇报告，点击查看</p>';
            str += '</div>';
            str += '</div>';

            var report_ul = document.getElementsByClassName('report-ul')[0];
            report_ul.innerHTML = str;
        }
    }
}
li_[1].onclick=function(){
    li_[0].style.borderBottom = 'none';
    li_[0].style.color = '#a3a3a3';
    this.style.borderBottom = 'solid 4px #fe5431';
    this.style.color = '#fe5431';
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://192.168.31.5:3000/report/hot');
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
            str += '<div class="bigboxx">';
            str += '<img src="'+i.img+'" alt="">';
            str += '<div class="boxx">';
            str += '<p>空气净化器里面学问多得惊呆你，你选对了吗？</p>';
            str += '<div class="minbox1">';
            str += '<img src="../src/img/tx.jpg" alt="">';
            str += '<p><span>苏苏</span>2016-01-25</p>';
            str += '</div>';
            str += '<div class="minbox2">';
            str += '<span>';
            str += '<img src="../src/img/zan_n.png" alt="">';
            str += '3';
            str += '</span>';
            str += '<span>';
            str += '<img src="../src/img/p_n.png" alt="">';
            str += '3';
            str += '</span>';
            str += '</div>';
            str += '</div>';
            str += '</div>';
            str += '<div class="as-regards">';
            str += '<p>关于格林威特空气净化器还有 4 篇报告，点击查看</p>';
            str += '</div>';
            str += '</div>';

            var report_ul = document.getElementsByClassName('report-ul')[0];
            report_ul.innerHTML = str;
        }
    }
}