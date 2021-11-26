let arr = [];
window.onload = () => {
    newest_click(self);
}
function newest_click(self) {
    $.ajax({
        type: "get",
        url: "http://192.168.31.5:3000/guid/new",
        success: function (res) {
            console.log(res);
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
    console.log(parseInt(self.childNodes[1].nodeValue));
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
        url: "http://192.168.31.5:3000/guid/hot",
        success: function (res) {
            arr = JSON.parse(JSON.stringify(res));
            arr.reverse();
            console.log(arr);
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
function show_hot(data) {
    let str = '';
    $('.waterfall').fadeOut(300);
    for (const j of data) {
        if (j.description == undefined) {
            j.description = '暂无';
        }
        str += `<div class="card_" style="background:${change_color()}">
                    <div class="card">
                        <img src="${j.img}" alt="">
                        <p class="goods_name" onclick="clk()">${j.text}</p>
                    </div>
                    <div class="bottom">
                        <span onclick="like(this)" class="like" style="color: rgb(136, 136, 136)"><a href="javascript:;"></a>${j.like}</span>
                    </div>
                </div>`
    }
    let timer = setTimeout(() => {
        $('.waterfall')[0].innerHTML = str;
        $('.waterfall').fadeIn(300);
    }, 300)
}
function show(data) {
    let str = '';
    $('.waterfall').fadeOut(300);
    for (const j of data) {
        str += `<div onclick="hrefto()" class="card_" style="background:${change_color()}">
                    <div class="card">
                        <img src="${j.img}" alt="">
                        <p class="goods_name" onclick="clk()">${j.text}</p>
                    </div>
                    <div class="bottom">
                        <span onclick="like(this)" class="like" style="color: rgb(136, 136, 136)"><a href="javascript:;"></a>${j.like}</span>
                    </div>
                </div>`;
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
function hrefto() {
    window.location.href = "./guid_details.html";
}