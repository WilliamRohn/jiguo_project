//todo 获取数据渲染
window.onload = showData;
// showData();
function showData() {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft XMLHTTP');
    ajax.open('get', '../json/showdata.json');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                show(data.list);
            }
        }
    }
}
function show(list) {
    var str = '';
    for (var i of list) {
        str += '<li>';
        str += '<button>首发</button>';
        str += '<div><img src="' + i.imgurl + '"></div>';
        str += '<p>' + i.note + '</p>';
        str += '<div><span>2030</span><span>20台</span></div>';
        str += '<p><span>1392</span><span>申请</span></p>';
        str += '<p>剩余时间2天</p>';
        str += '</li>';
    }
    var ul = document.getElementsByClassName('list')[0];
    ul.innerHTML = str;
}
