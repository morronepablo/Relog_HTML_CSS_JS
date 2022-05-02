let horas = 0;
let minutos = 0;
let segundos = 0;
let pause = true;
let upDown = true;
window.addEventListener('load', function() {
    cronometro();
})



function funcPause() {
    pause = true;
}


function funcPlay() {
    pause = false;
}

function cronometro() {
    setInterval(() => {
        if(upDown) {
            console.log(upDown);
            if(!pause){
                segundos = segundos + 1;
            }
            if(segundos == 60) {
                if(!pause) {
                    minutos = minutos + 1;
                    segundos = 0;
                }
            }
            if(minutos == 60) {
                if(!pause) {
                    horas = horas + 1;
                    minutos = 0;
                }
            }
            if(horas == 24) {
                horas = 0;
            }
            let hours = document.getElementById('hours');
            let minutes = document.getElementById('minutes');
            let seconds = document.getElementById('seconds');
            let ampm = document.getElementById('ampm');
        
            let hh = document.getElementById('hh');
            let mm = document.getElementById('mm');
            let ss = document.getElementById('ss');
        
            let hr_dot = document.querySelector('.hr_dot');
            let min_dot = document.querySelector('.min_dot');
            let sec_dot = document.querySelector('.sec_dot');
            
            let h = horas; //new Date().getHours();
            let m = minutos; //new Date().getMinutes();
            let s = segundos; //new Date().getSeconds();
            let am = h >= 12 ? "PM" : "AM";
            
            // Convert 24hr clock to 12hr clock
            if(h > 12) {
                h = h - 12;
            }
            // add zero before single digital number
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            
            hours.innerHTML = h + "<br><span>Horas</span>";
            minutes.innerHTML = m  + "<br><span>Minutos</span>";
            seconds.innerHTML = s  + "<br><span>Segundos</span>";
            ampm.innerHTML = am;
        
            hh.style.strokeDashoffset = 440 - (440 * h) / 12;
            // 12 hrs Clock
            mm.style.strokeDashoffset = 440 - (440 * m) / 60;
            // 60 minutes
            ss.style.strokeDashoffset = 440 - (440 * s) / 60;
            // 60 seconds
        
            hr_dot.style.transform = `rotate(${h * 30}deg)`;
            // 360 / 12 = 30
            min_dot.style.transform = `rotate(${m * 6}deg)`;
            // 360 / 60 = 6
            sec_dot.style.transform = `rotate(${s * 6}deg)`;
            // 360 / 60 = 6
        } else {
            console.log(upDown);
            if(!pause){
                if(segundos > 0) {
                    segundos = segundos - 1;
                }
            }
            if(segundos == 0) {
                if(!pause) {
                    if(minutos > 0) {
                        minutos = minutos - 1;
                        segundos = 60;
                    }
                }

            }
            if(minutos == 0) {
                if(!pause) {
                    if(horas > 0){
                        horas = horas - 1;
                        minutos = 60;
                    }
                }
            }
            if(horas == 0) {
                horas = 0;
            }
            let hours = document.getElementById('hours');
            let minutes = document.getElementById('minutes');
            let seconds = document.getElementById('seconds');
            let ampm = document.getElementById('ampm');
        
            let hh = document.getElementById('hh');
            let mm = document.getElementById('mm');
            let ss = document.getElementById('ss');
        
            let hr_dot = document.querySelector('.hr_dot');
            let min_dot = document.querySelector('.min_dot');
            let sec_dot = document.querySelector('.sec_dot');
            
            let h = horas; //new Date().getHours();
            let m = minutos == 60 ? 0: minutos; //new Date().getMinutes();
            let s = segundos == 60 ? 0 : segundos; //new Date().getSeconds();
            let am = h >= 12 ? "PM" : "AM";
            
            // Convert 24hr clock to 12hr clock
            if(h > 12) {
                h = h - 12;
            }
            // add zero before single digital number
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            
            hours.innerHTML = h + "<br><span>Horas</span>";
            minutes.innerHTML = m  + "<br><span>Minutos</span>";
            seconds.innerHTML = s  + "<br><span>Segundos</span>";
            ampm.innerHTML = am;
        
            hh.style.strokeDashoffset = 440 - (440 * h) / 12;
            // 12 hrs Clock
            mm.style.strokeDashoffset = 440 - (440 * m) / 60;
            // 60 minutes
            ss.style.strokeDashoffset = 440 - (440 * s) / 60;
            // 60 seconds
        
            hr_dot.style.transform = `rotate(${h * 30}deg)`;
            // 360 / 12 = 30
            min_dot.style.transform = `rotate(${m * 6}deg)`;
            // 360 / 60 = 6
            sec_dot.style.transform = `rotate(${s * 6}deg)`;
            // 360 / 60 = 6
        }
        
    },1000)
}

function funcUp() {
    upDown = true;
}

function funcDown() {
    upDown = false;
}

