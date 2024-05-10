let audioelement = new Audio('1.mp3');
let songindex = 0;
let masterplay = document.getElementById('masterplay');
let mastersongname = document.getElementById('mastersongname');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let i;
let songs = [
    {songname : "Shri Krishn Govind", songpath : "1.mp3", coverpath : "cover1.jpg"},
{songname : "Ram Siya Ram", songpath : "2.mp3", coverpath : "cover2.jpg"},
{songname : "Khalasi", songpath : "3.mp3", coverpath : "cover3.jpg"},
{songname : "Heeriye", songpath : "4.mp3", coverpath : "cover4.jpg"},
{songname : "O mahi O mahi", songpath : "5.mp3", coverpath : "cover5.jpg"}
]

// handle play pause click 
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
        makeAllPlays();
    }
});
audioelement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration) * 100);
    myprogressbar.value = progress;
});
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = (myprogressbar.value*audioelement.duration)/100;
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
})
    } 
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener('click',(e)=>{
        if(audioelement.paused || audioelement.currentTime<=0){
        console.log(e.target);
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
       e.target.classList.add('fa-pause');
        audioelement.src=`${songindex+1}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        mastersongname.innerText = songs[songindex].songname;
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');}
        else{
            audioelement.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            gif.style.opacity=0;
        }
    })
});
document.getElementById('next').addEventListener('click',()=>{
    if(songindex >= 4){
        songindex = 0;
    }
    else{
        songindex+=1;
    }
    audioelement.src=`${songindex+1}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        mastersongname.innerText = songs[songindex].songname;
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
});
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=4;
    }
    else{
        songindex-=1;
    }
    audioelement.src=`${songindex+1}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        mastersongname.innerText = songs[songindex].songname;
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})
