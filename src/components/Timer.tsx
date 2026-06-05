import { useState, useEffect } from "react";

interface TimerProps {
    totalSeconds: number    //how long the timer runs (max time) -> in our case, 60min
    onTimeUp: () => void    //call back function
}

function Timer({totalSeconds, onTimeUp} : TimerProps) {
    const [timeLeft, setTimeLeft] = useState(totalSeconds)

    function currentTimeLeft(previous_time: number) {
        //previus_time = timeLeft, when timeLeft == 0, ends the timer
        if(previous_time <= 1){
            onTimeUp()
            return 0
        }
        else
            return previous_time - 1
    }

    function onTick() {
        //call the method currentTimeLeft with the "timeLeft" variable as an argument
        if(timeLeft > 0) //lets not make unecesarry calls
            setTimeLeft(currentTimeLeft)
        //time left is updated with the return value of currenTimeLeft
    }

    function startTimer() {
        //starts a routine that will be called every 1000ms (1sec)
        const interval = setInterval(onTick, 1000)
        //makes the routine stop being called
        return () => clearInterval(interval)
    }

    function formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        const paddedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
        return `${minutes}:${paddedSeconds}`
    }

    useEffect(startTimer, [])

    return (
        <div>{formatTime(timeLeft)}</div>
    )
}

export default Timer 