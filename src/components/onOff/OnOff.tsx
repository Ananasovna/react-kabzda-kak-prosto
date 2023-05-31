import styles from './OnOff.module.css';

type OnOffPropsType = {
    value: boolean;
}
export const OnOff = (props: OnOffPropsType) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonWrapper}>
                {props.value
                    ? <div className={`${styles.green} ${styles.button}`}>on</div>
                    : <div className={styles.button}>on</div>
                }
                {!props.value
                    ? <div className={`${styles.red} ${styles.button}`}>off</div>
                    : <div className={styles.button}>off</div>
                }
            </div>
            {props.value
                ? <div className={styles.greenRound}></div>
                : <div className={styles.redRound}></div>
            }

        </div>
    )
}