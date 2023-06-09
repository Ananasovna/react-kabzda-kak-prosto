import React, {ReactNode, useState} from "react";


export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;
export function UncontrolledRating() {

    const [value, setValue] = useState<ValueType>(0)

    const returnStars = (value: ValueType) : ReactNode[] => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
           stars.push(<Star key={i} setStars={() => setStars(i as ValueType)} selected={value > i - 1}/>);
        }

        return stars;
    }

    const setStars = (id: ValueType) => {
        id === value ? setValue(0) : setValue(id);
    }

    return (
        <div>
            {returnStars(value)}
        </div>

    )
}

type StarPropsType = {
    selected: boolean;
    setStars: ()=> void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={props.setStars}>
            {props.selected ? <b>star</b> : 'star'}
        </span>

    )
}

export const MemoizedUncontrolledRating = React.memo(UncontrolledRating);