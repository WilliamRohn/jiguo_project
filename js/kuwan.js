let arr = [];
window.onload = () => {
    newest_click(self);
}
function newest_click(self) {
    $.ajax({
        type: "get",
        url: "http://192.168.31.5:3000/play/new",
        success: function (res) {
            arr = res.slice(res.length / 2);
            show(res.slice(0, res.length / 2));
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
                                ??????
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_1.png">
                                    <p class="info-kong">??????????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_2.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_3.png">
                                    <p class="info-kong">??????????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_4.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_5.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_6.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_7.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_8.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">?????????21???</a></p>
                            <p><a href="javascript:void(0);">?????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">??????/????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">??????????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                ????????????
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_9.png">
                                    <p class="info-kong">???????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_10.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_11.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                ??????
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_1.png">
                                    <p class="info-kong">???????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_2.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_3.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                ????????????
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_9.png">
                                    <p class="info-kong">???????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_4.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_5.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_6.png">
                                    <p class="info-kong">???????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_7.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_8.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                ??????
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_11.png">
                                    <p class="info-kong">???????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_2.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_9.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                ????????????
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_10.png">
                                    <p class="info-kong">???????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_8.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_5.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                ??????
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_3.png">
                                    <p class="info-kong">???????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_2.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_9.png">
                                    <p class="info-kong">????????????21???</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                        </li>
                    </ul>
                </div>
                <div class="table-box">
                    <ul class="table-1">
                        <li>
                            <div class="shenghuo">
                                <span class="bor-red"></span>
                                ??????
                            </div>
                        </li>
                        <li>
                            <div class="list-img">
                                <a href="javascript:void(0);">
                                    <img src="../src/img/cat_11.png">
                                    <p class="info-kong">???????????????21???</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
                            <p><a href="javascript:void(0);">????????????21???</a></p>
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
                j.description = '??????';
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
let rotate = '';
let i = 0;
function click_more() {
    let str = '';
    $('.click_more>img')[0].src = '../src/img/loading.png';
    clearInterval(rotate);
    console.log($('.click_more>img')[0].style.transform);
    rotate = setInterval(() => {
        i = i - 5;
        if (i >= 360) {
            i = 0;
        }
        $('.click_more>img')[0].style.transform = `translateX(-50%) rotate(${i}deg)`;
    }, 20);
    for (let i = 0; i < arr.length; i++) {
        for (const j of arr[i]) {
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
        $('.waterfall')[0].innerHTML += str;
        // $('.waterfall').fadeIn(300);
        clearInterval(rotate);
        $('.click_more')[0].style.display = 'none';
    }, 800)
}