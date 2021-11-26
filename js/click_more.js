var click_more = document.getElementsByClassName('click_more')[0];
var play_hidden = document.getElementsByClassName('play_hidden')[0];

click_more.onclick= ()=>{
    click_more.style.display = 'none';
    play_hidden.style.display = 'flex';

}