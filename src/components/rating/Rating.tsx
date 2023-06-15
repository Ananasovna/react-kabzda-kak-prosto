import React, {ReactNode} from "react";

export type RatingPropsType = {
    value: ValueType
    setStars: (id: ValueType)=> void
}

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;
export function Rating(props: RatingPropsType) {

    const returnStars = (value: ValueType) : ReactNode[] => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
           stars.push(<Star key={i} selected={value > i - 1} setStars={() => props.setStars(i as ValueType)}/>);
        }

        return stars;
    }

    return (
        <div>
            {returnStars(props.value)}
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
            {props.selected ? <b>star</b> : 'star '}
        </span>
    )

}