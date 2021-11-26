let img01 = '';
window.onload = () => {
    $.ajax({
        type: "get",
        url: "http://192.168.31.5:3000/play/new",
        success: function (res) {
            console.log(res);
            show(res);
        }
    });
}
function like(self) {
    console.log(parseInt(self.childNodes[1].nodeValue));
    // console.log(self.children[0]);
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
let x = 0;
function show(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        for (const j of data[i]) {
            $('.waterfall')[0].innerHTML += `
                <div class="card_">
                    <div class="card">
                        <img src="${j.img}" alt="">
                        <p class="goods_name" onclick="clk()">${j.text}</p>
                        <p class="dec">${j.description}</p>
                    </div>
                    <div class="bottom">
                        <span class="price">${j.price}</span>
                        <span onclick="like(this)" class="like" style="color: rgb(136, 136, 136)"><a href="javascript:;"></a>${j.like}</span>
                    </div>
                </div>
                `
            change_color(x);
            x++;
        }
    }
}
//#region
function change_color(index) {
    let arr_color = ['rgb(255 165 0,.6)', 'rgb(255, 165, 0,.6)', 'rgb(233, 150, 122,.6)', 'rgb(250, 128, 114,.6)', 'rgb(255, 127, 80,.6)'];
    let rom_color = Math.floor(Math.random() * 4);
    $(".card_")[index].style.backgroundColor = `${arr_color[rom_color]}`;
}
//#endregion