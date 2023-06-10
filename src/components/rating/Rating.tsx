import React, {ReactNode} from "react";

export type RatingPropsType = {
    value: ValueType;
}

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;
export function Rating(props: RatingPropsType) {

    const returnStars = (value: ValueType) : ReactNode[] => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
           stars.push(<Star selected={value > i - 1}/>);
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
}

function Star(props: StarPropsType) {
    return props.selected ? <span><b>star</b></span> : <span>star</span>;

}