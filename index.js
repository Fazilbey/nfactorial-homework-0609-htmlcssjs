const backduduk = document.getElementById("duduk");
const backguitar = document.getElementById("guitar");
const backdrum = document.getElementById("drum");
const backsak = document.getElementById("saksafon");
const muteAll = document.getElementById("audioplay")

function playGuitar(){
    if(backguitar.paused){
        backguitar.play()
    }else{
        backguitar.pause()
    }

    
}
function playDrum(){
    if(backdrum.paused){
        backdrum.play()
    }else{
        backdrum.pause()
    }

    
}
function playDuduk(){
    if(backduduk.paused){
        backduduk.play()
        wrapper.style.color = 'pink'
    }else{
        backduduk.pause()
    }

    
}
function playSaksafon(){
    if(backsak.paused){
        backsak.play()
    }else{
        backsak.pause()
    }

    
}function justMute(){
    backguitar.pause();
    backdrum.pause();
    backduduk.pause();
    backsak.pause();


    
}

// const btn = document.getElementsByClassName('btn');

// btn.addEventListener('click', function onClick() {
//   btn.style.backgroundColor = 'salmon';
//   btn.style.color = 'white';
// });
function changeColor(color) {
    document.body.style.background = color;
}
  
function gfg_Run() {
    changeColor('yellow');
 
} 
