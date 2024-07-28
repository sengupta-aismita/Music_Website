console.log("Welcome to spotify");
//Inialize the Variables
let SongIndex= 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let Progressbar = document.getElementById('Progressbar');
let masterSongName = document.getElementById('masterSongName');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let songs= [
    {songName:"Enchanted(Taylor's Version)", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName:"my tears ricochet",filePath: "songs/2.mp3", coverPath: "folk.jpg"},
    {songName:"Call it what you want",filePath: "songs/3.mp3", coverPath: "rep.jpg"},
    {songName:"This Love" ,filePath: "songs/4.mp3", coverPath: "1989.jpg"},
    {songName:"White Horse(Taylor's Version)" ,filePath: "songs/5.mp3", coverPath: "Fearless.jpg"},
    {songName:"Cornelia Street" ,filePath: "songs/6.mp3", coverPath: "lover.jpg"},
    {songName:"Vigilante Shit" ,filePath: "songs/7.mp3", coverPath: "midnights.jpg"},
    {songName:"Champagne Problems" ,filePath: "songs/8.mp3", coverPath: "evermore.jpg"},
    {songName:"Mastermind" ,filePath: "songs/9.mp3", coverPath: "midnights.jpg"},
    {songName:"the 1" ,filePath: "songs/10.mp3", coverPath: "folk.jpg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//Handle play/pause
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    Progressbar.value= progress;
})

Progressbar.addEventListener('change',()=>{
    audioElement.currentTime = Progressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllPlays();
       
        SongIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src = `songs/${SongIndex + 1}.mp3`;
         masterSongName.innerText = songs[SongIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
        })
    })

    document.getElementById('next').addEventListener('click', () =>{
        if(SongIndex >= 9){
            SongIndex = 0;
        }
        else{
            SongIndex+=1;
        }
        audioElement.src = `songs/${SongIndex + 1}.mp3`;
        masterSongName.innerText = songs[SongIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })

    document.getElementById('previous').addEventListener('click', () =>{
        if(SongIndex <= 0){
            SongIndex = 0;
        }
        else{
            SongIndex-=1;
        }
        audioElement.src = `songs/${SongIndex + 1}.mp3`;
        masterSongName.innerText = songs[SongIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })





