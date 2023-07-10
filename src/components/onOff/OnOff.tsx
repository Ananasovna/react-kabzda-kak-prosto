import styles from './OnOff.module.css';
import React, {useMemo, useState} from "react";

type OnOffProps = {
    onChange: (on: boolean) => void;
}
export const OnOff = ({onChange} : OnOffProps) => {

    const [on, setOn] = useState(false);

    const onStyle = {
        width: '50px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        background: on ? 'green' : 'white',
    }

    const offStyle = {
        width: '50px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        background: !on ? 'red' : 'white',
    }

    const indicatorStyle = {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '5px',
        background: on ? 'green' : 'red',
    }


    const toggleOn = (value: boolean) => {
            setOn(value);
            onChange(value);
        }

    return (
        <div className={styles.wrapper}>
            <div onClick={() => toggleOn(true)} style={onStyle}>On</div>
            <div onClick={() => toggleOn(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>


        </div>
    )
}

export const MemoizedOnOff = React.memo(OnOff)