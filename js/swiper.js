var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    // loop: true, // 循环模式选项
    autoplay: true,
    speed: 1000,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

mySwiper.el.onmouseover = function(){
    mySwiper.autoplay.stop();
  }
  mySwiper.el.onmouseout = function(){
    mySwiper.autoplay.start();
  }
