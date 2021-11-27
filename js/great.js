let zan = document.getElementsByClassName('zan');
// let zan_num = document.getElementsByClassName('zan_num');

let xin = document.getElementsByClassName('xin');
// let ping_num = document.getElementsByClassName('xin_num');
for (let i in zan) {
    zan[i].onclick = function () {
        if (this.className == 'zan') {
            this.src = '../src/img/zan_y.png';
            this.className = 'zan bl_zan';
            this.nextElementSibling.innerHTML = this.nextElementSibling.innerHTML - 0 + 1;
        } else if (this.className == 'zan bl_zan') {
            this.className = 'zan';
            this.src = '../src/img/zan_n.png';
            this.nextElementSibling.innerHTML = this.nextElementSibling.innerHTML - 1;
        }

    }
};

for (let i in xin) {
    xin[i].onclick = function () {
        if (this.className == 'xin') {
            this.src = '../src/img/a_y.png';
            this.className = 'xin bl_xin';
            this.nextElementSibling.innerHTML = this.nextElementSibling.innerHTML - 0 + 1;

        } else if (this.className == 'xin bl_xin') {
            this.className = 'xin';
            this.src = '../src/img/a_n.png';
            this.nextElementSibling.innerHTML = this.nextElementSibling.innerHTML - 1;
        }


    }
}