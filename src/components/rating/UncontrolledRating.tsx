import React, {ReactNode, useState} from "react";

// export type RatingPropsType = {
//
// }

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;
export function UncontrolledRating() {

    const [value, setValue] = useState<ValueType>(0)

    const returnStars = (value: ValueType) : ReactNode[] => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
           stars.push(<Star id={i as ValueType} setStars={setStars} selected={value > i - 1}/>);
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
    id: ValueType;
    selected: boolean;
    setStars: (id: ValueType)=> void
}

function Star(props: StarPropsType) {
    return props.selected ?
        <span onClick={() => props.setStars(props.id)}><b>star</b></span>
        : <span onClick={() => props.setStars(props.id)}>star</span>;

}