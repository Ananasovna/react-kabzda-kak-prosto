import styles from './OnOff.module.css';
import {useState} from "react";

type OnOffProps = {
    status: boolean,
    callBack: () => void
}
export const ControlledOnOff = ({status, callBack, ...props}: OnOffProps) => {


    const onStyle = {
        width: '50px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        background: status ? 'green' : 'white',
    }

    const offStyle = {
        width: '50px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        background: !status ? 'red' : 'white',
    }

    const indicatorStyle = {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '5px',
        background: status ? 'green' : 'red',
    }

    // const toggleOn = () => {
    //     setOn(!on);
    // }



    // const switchOn = () => {
    //     setOn(true);
    // }
    // const switchOff = () => {
    //     setOn(false);
    // }

    return (
        <div className={styles.wrapper}>
            <div onClick={callBack} style={onStyle}>On</div>
            <div onClick={callBack} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
            {/*<div className={styles.buttonWrapper}>*/}
            {/*    {props.value*/}
            {/*        ? <div className={`${styles.green} ${styles.button}`}>on</div>*/}
            {/*        : <div className={styles.button}>on</div>*/}
            {/*    }*/}
            {/*    {!props.value*/}
            {/*        ? <div className={`${styles.red} ${styles.button}`}>off</div>*/}
            {/*        : <div className={styles.button}>off</div>*/}
            {/*    }*/}
            {/*</div>*/}
            {/*{props.value*/}
            {/*    ? <div className={styles.greenRound}></div>*/}
            {/*    : <div className={styles.redRound}></div>*/}
            {/*}*/}

        </div>
    )
}