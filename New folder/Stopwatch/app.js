const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const resetBtn = document.querySelector('.reset-btn')

let hour = 0
let minutes = 0
let seconds = 0
let milli = 0
// let time;
let timer;
startBtn.addEventListener('click', ()=>{
    
            timer = true
        startTimer()
    })
    stopBtn.addEventListener('click', ()=>{
        timer = false
    })
    resetBtn.addEventListener('click', ()=>{
        timer = false
        hour = 0
        minutes = 0
        seconds = 0
        milli = 0
        document.getElementById('hour').innerHTML = '00'
            document.getElementById('minutes').innerHTML = '00'
            document.getElementById('seconds').innerHTML = '00'
            document.getElementById('milli-sec').innerHTML = '00'
    })

    const startTimer = ()=>{
        if(timer){
            milli++
            if(milli === 100){
                seconds++
                milli = 0
            }
            if(seconds === 60){
                minutes++
                seconds = 0
            }
            if(minutes === 60){
                hour++
                minutes = 0
                seconds = 0
            }

            let hourString = hour
            let minutesString = minutes
            let secondsString = seconds
            let milliString = milli

            if(hour < 10){
                hourString = '0' + hourString
            }
            if(minutes < 10){
                minutesString = '0' + minutesString
            }
            if(seconds < 10){
                secondsString = '0' + secondsString
            }
            if(milli < 10){
                milliString = '0' + milliString
            }
            
            document.getElementById('hour').innerHTML = hourString
            document.getElementById('minutes').innerHTML = minutesString
            document.getElementById('seconds').innerHTML = secondsString
            document.getElementById('milli-sec').innerHTML = milliString
            setTimeout(startTimer, 10)   
        }
    }

    let icon = document.getElementById('dark-icon')
    icon.addEventListener('click', ()=>{
        document.body.classList.toggle('dark-theme')
        if(document.body.classList.contains('dark-theme')){
            icon.src = 'cart.png'
        }
        else{
            icon.src = 'logo.png'
        }
    })