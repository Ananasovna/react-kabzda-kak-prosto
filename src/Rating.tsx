import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}
export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>

    )
}

type StarPropsType = {
    selected: boolean;
}
function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star</b></span>;
      } else {
        return <span>star</span>;
    }

}