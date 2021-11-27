let arr = [];
window.onload = () => {
    newest_click(self);
}
function newest_click(self) {
    $.ajax({
        type: "get",
        url: "http://192.168.31.5:3000/play/new",
        success: function (res) {
            arr = JSON.parse(JSON.stringify(res));
            show(res);
        }
    });
    if (self.className == 'tab_span') {
        $('.tab_span').each(function () {
            this.className = 'tab_span';
        });
        self.className += ' tab_span_clicked';
    }
}
function like(self) {
    let event = window.event || arguments.callee.caller.arguments[0];
    // target = event.srcElement || event.target
    event.stopPropagation();
    if (self.style.color == 'rgb(136, 136, 136)') {
        self.style.color = 'red';
        self.children[0].style.animation = 'rotate .7s ease forwards';
        self.childNodes[1].nodeValue = parseInt(self.childNodes[1].nodeValue) + 1;
    } else if (self.style.color == 'red') {
        self.style.color = 'rgb(136, 136, 136)';
        self.children[0].style.animation = '';
        self.childNodes[1].nodeValue -= 1;
    }
}
function hot_click(self) {
    $.ajax({
        type: "get",
        url: "http://192.168.31.5:3000/play/hot",
        success: function (res) {
            arr = JSON.parse(JSON.stringify(res));
            arr.reverse();
            show_hot(arr);
        }
    });
    if (self.className == 'tab_span') {
        $('.tab_span').each(function () {
            this.className = 'tab_span';
        })
        self.className += ' tab_span_clicked';
    }
}
function category_click(self) {
    $('.waterfall').fadeOut(300);
    if (self.className == 'tab_span') {
        $('.tab_span').each(function () {
            this.className = 'tab_span';
        });
        self.className += ' tab_span_clicked';
    }
    let timer = setTimeout(() => {
        $('.waterfall')[0].innerHTML = `
        <div class="category">
        <div class="bgc">
            <div class="pin-lei">
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                生活
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_1.png">
                                    <p class="info-kong">空气净化器（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_2.png">
                                    <p class="info-kong">吸尘器（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_3.png">
                                    <p class="info-kong">扫地机器人（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_4.png">
                                    <p class="info-kong">电风扇（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_5.png">
                                    <p class="info-kong">电风扇（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_6.png">
                                    <p class="info-kong">电饭煲（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_7.png">
                                    <p class="info-kong">咖啡机（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_8.png">
                                    <p class="info-kong">原汁机（21）</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">电视（21）</a></p>
                            <p><a href="javascript:void(0);">空调（21）</a></p>
                            <p><a href="javascript:void(0);">洗衣机（21）</a></p>
                            <p><a href="javascript:void(0);">加湿器（21）</a></p>
                            <p><a href="javascript:void(0);">净水壶（21）</a></p>
                            <p><a href="javascript:void(0);">热水器（21）</a></p>
                            <p><a href="javascript:void(0);">咖啡机（21）</a></p>
                            <p><a href="javascript:void(0);">原汁机（21）</a></p>
                            <p><a href="javascript:void(0);">消毒/洗碗机（21）</a></p>
                            <p><a href="javascript:void(0);">豆浆机（21）</a></p>
                            <p><a href="javascript:void(0);">扫地机器人（21）</a></p>
                            <p><a href="javascript:void(0);">电风扇（21）</a></p>
                            <p><a href="javascript:void(0);">除湿机（21）</a></p>
                            <p><a href="javascript:void(0);">干燥机（21）</a></p>
                            <p><a href="javascript:void(0);">取暖器（21）</a></p>
                            <p><a href="javascript:void(0);">原汁机（21）</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                个人护理
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_9.png">
                                    <p class="info-kong">电动牙刷（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_10.png">
                                    <p class="info-kong">剃须刀（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_11.png">
                                    <p class="info-kong">按摩器（21）</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">冲牙器（21）</a></p>
                            <p><a href="javascript:void(0);">洁面仪（21）</a></p>
                            <p><a href="javascript:void(0);">蒸面器（21）</a></p>
                            <p><a href="javascript:void(0);">加湿器（21）</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                健康
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_1.png">
                                    <p class="info-kong">电动牙刷（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_2.png">
                                    <p class="info-kong">剃须刀（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_3.png">
                                    <p class="info-kong">按摩器（21）</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">冲牙器（21）</a></p>
                            <p><a href="javascript:void(0);">洁面仪（21）</a></p>
                            <p><a href="javascript:void(0);">蒸面器（21）</a></p>
                            <p><a href="javascript:void(0);">加湿器（21）</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                智能穿戴
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_9.png">
                                    <p class="info-kong">电动牙刷（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_4.png">
                                    <p class="info-kong">剃须刀（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_5.png">
                                    <p class="info-kong">按摩器（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_6.png">
                                    <p class="info-kong">电动牙刷（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_7.png">
                                    <p class="info-kong">剃须刀（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_8.png">
                                    <p class="info-kong">按摩器（21）</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">冲牙器（21）</a></p>
                            <p><a href="javascript:void(0);">洁面仪（21）</a></p>
                            <p><a href="javascript:void(0);">蒸面器（21）</a></p>
                            <p><a href="javascript:void(0);">加湿器（21）</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                出行
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_11.png">
                                    <p class="info-kong">电动牙刷（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_2.png">
                                    <p class="info-kong">剃须刀（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_9.png">
                                    <p class="info-kong">按摩器（21）</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">冲牙器（21）</a></p>
                            <p><a href="javascript:void(0);">洁面仪（21）</a></p>
                            <p><a href="javascript:void(0);">蒸面器（21）</a></p>
                            <p><a href="javascript:void(0);">加湿器（21）</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                运动户外
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_10.png">
                                    <p class="info-kong">电动牙刷（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_8.png">
                                    <p class="info-kong">剃须刀（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_5.png">
                                    <p class="info-kong">按摩器（21）</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">冲牙器（21）</a></p>
                            <p><a href="javascript:void(0);">洁面仪（21）</a></p>
                            <p><a href="javascript:void(0);">蒸面器（21）</a></p>
                            <p><a href="javascript:void(0);">加湿器（21）</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                摄影
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_3.png">
                                    <p class="info-kong">电动牙刷（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_2.png">
                                    <p class="info-kong">剃须刀（21）</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_9.png">
                                    <p class="info-kong">按摩器（21）</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">冲牙器（21）</a></p>
                            <p><a href="javascript:void(0);">洁面仪（21）</a></p>
                            <p><a href="javascript:void(0);">蒸面器（21）</a></p>
                            <p><a href="javascript:void(0);">加湿器（21）</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                手机
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_11.png">
                                    <p class="info-kong">电动牙刷（21）</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">冲牙器（21）</a></p>
                            <p><a href="javascript:void(0);">洁面仪（21）</a></p>
                            <p><a href="javascript:void(0);">蒸面器（21）</a></p>
                            <p><a href="javascript:void(0);">加湿器（21）</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            </div>`;
        $('.waterfall').fadeIn(300);
    }, 300)
}
function show_hot(data) {
    let str = '';
    $('.waterfall').fadeOut(300);
    for (let i = 0; i < data.length; i++) {
        for (const j of data[i]) {
            if (j.description == undefined) {
                j.description = '暂无';
            }
            str += `<div class="card_" style="background:${change_color()}">
                    <div class="card">
                        <img src="${j.img}" alt="">
                        <p class="goods_name" onclick="clk()">${j.text}</p>
                        <p class="dec">${j.description}</p>
                    </div>
                    <div class="bottom">
                        <span class="price">${j.price}</span>
                        <span onclick="like(this)" class="like" style="color: rgb(136, 136, 136)"><a href="javascript:;"></a>${j.like}</span>
                    </div>
                </div>`
        }
    }
    let timer = setTimeout(() => {
        $('.waterfall')[0].innerHTML = str;
        $('.waterfall').fadeIn(300);
    }, 300)
}
function show(data) {
    let str = '';
    $('.waterfall').fadeOut(300);
    for (let i = 0; i < data.length; i++) {
        for (const j of data[i]) {
            str += `<div class="card_" style="background:${change_color()}">
                    <div class="card">
                        <img src="${j.img}" alt="">
                        <p class="goods_name" onclick="clk()">${j.text}</p>
                        <p class="dec">${j.description}</p>
                    </div>
                    <div class="bottom">
                        <span class="price">${j.price}</span>
                        <span onclick="like(this)" class="like" style="color: rgb(136, 136, 136)"><a href="javascript:;"></a>${j.like}</span>
                    </div>
                </div>`;
        }
    }
    let timer = setTimeout(() => {
        $('.waterfall')[0].innerHTML = str;
        $('.waterfall').fadeIn(300);
    }, 300)
}
function change_color() {
    let arr_color = ['rgb(255,165,0,.1)', 'rgb(232, 255, 0,.1)', 'rgb(233, 150, 122,.1)', 'rgb(215, 225, 225,.5)', 'rgb(255, 127, 80,.1)'];
    let rom_color = Math.floor(Math.random() * 4);
    return arr_color[rom_color];
    // console.log($(".card_")[index]);
    // $(".card_")[index].style.backgroundColor = `${arr_color[rom_color]}`;
}