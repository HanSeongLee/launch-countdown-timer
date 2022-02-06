import React, {useEffect, useMemo, useState} from "react";
import Countdown from "../../components/Countdown";

const LaunchCountdown = ({ days, hours, minutes, seconds }) => {
    const [time, setTime] = useState(days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds);

    const remainTime = useMemo(() => {
        const days = Math.floor(time / 24 / 3600);
        const hours = Math.floor((time - days * 24 * 3600) / 3600);
        const minutes = Math.floor((time - days * 24 * 3600 - hours * 3600) / 60);
        const seconds = (time - days * 24 * 3600 - hours * 3600) % 60;

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }, [time]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time !== 0 ? time - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Countdown prev={0} count={remainTime.days} label={'days'} />
            <Countdown prev={0} count={remainTime.hours} label={'hours'} />
            <Countdown prev={0} count={remainTime.minutes} label={'minutes'} />
            <Countdown prev={0} count={remainTime.seconds} label={'seconds'} />
        </>
    );
};

export default LaunchCountdown;
