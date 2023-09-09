const play = document.getElementById('play');
const stop = document.getElementById('stop');
const seconds = document.getElementById('second');
const minutes = document.getElementById('minute');
const hours = document.getElementById('hour');
const refresh = document.getElementById('refresh')


let [hour,min,sec] = [0,0,0];


let interval;

function Timer(){
 sec++;
 if(sec === 59){
 min++;
 sec = 0;
 sec++;
}
if(min === 59){
    min = 0;
    hour++;
}
hours.innerText = `${hour}:`
 minutes.innerText = `${min}:`
 seconds.innerText = sec;

}

play.addEventListener('click',()=>{
   interval =  setInterval(Timer,1000)
})

stop.addEventListener('click',()=>{
    clearInterval(interval)
});
refresh.addEventListener('click',()=>{
    [min,sec,hour] = [0,0,0]
    hours.innerText = `${hour}:`
    minutes.innerText = `${min}:`
    seconds.innerText = sec;
})
