function stopwatch(elem,lap_box){
  var time=0;
  var offset;
  var interval;


  function lapOn(){
    var lapTime= lap_box.appendChild(document.createElement("li"))
    lapTime.innerHTML= elem.textContent;
    lapTime.classList='lapItem';
  }


  function lapOff(){
    return;
  }

  function update(){
    if(this.isOn){
      time += delta();
    }
    elem.textContent = timeFormatter(time);
  }

  function delta(){
    var now = Date.now();
    var timePassed = now -offset;
    offset = now;
    return timePassed;
  }


  function timeFormatter(time){
    time= new Date(time);
    var minutes = Math.floor(time/60000).toString();
    var seconds = Math.floor((time%60000)/1000).toString();
    var milliseconds = (time % 1000).toString();

    if(minutes.length <2){
      minutes = '0' + minutes;
    }

    if(seconds.length <2){
      seconds = '0' + seconds;
    }

    while(milliseconds.length <3){
      milliseconds = '0' + milliseconds;
    }

    var result = minutes + ':' + seconds + '.' + milliseconds;
    return result;
    }

    this.start = function(){
      if(!this.isOn){
      interval = setInterval(update.bind(this), 10);
      offset=Date.now();
      this.isOn=true;
      }
    };

    this.stop = function(){
      if(this.isOn){
      clearInterval(interval);
      interval=null;
      this.isOn=false;
      }
    };

    this.reset=function(){
      time=0;
      lap_box.innerHTML='';
      interval=null;
      this.isOn=false;
      update();
    };

    this.lapOn=function(){
      lapOn();
    }

    this.lapOff=function(){
      lapOff();
    }

  this.isOn = false;
}
var timer = document.querySelector('.timer');
var toggleBtn = document.querySelector('.toggle');
var resetBtn = document.querySelector('.reset');
var lapBtn =document.querySelector('.lap');
var lap_box=document.querySelector('.lap_box');

var watch = new stopwatch(timer,lap_box);

function start(){
  toggleBtn.textContent ='Stop';
  toggleBtn.classList.add("on");
  watch.start();
}

function stop(){
  toggleBtn.textContent ='Start';
  toggleBtn.classList.remove("on");
  watch.stop();
}

function reset(){
  stop();
  watch.reset();
}


toggleBtn.addEventListener('click',function(){
  // stop
  watch.isOn ? stop() : start();
});
resetBtn.addEventListener('click',function(){
  // stop
 reset();
});

lapBtn.addEventListener('click',function(){
  // stop
  watch.isOn ? watch.lapOn() : watch.lapOff();
});
