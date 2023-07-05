import {Rating, ValueType} from "./Rating";
import {useState} from "react";


export default {
    title: 'Rating stories',
    component: Rating
}

export const EmptyRating = () => <Rating value={0} setStars={()=> {}} />
export const Rating1 = () => <Rating value={1} setStars={()=> {}} />
export const Rating2 = () => <Rating value={2} setStars={()=> {}} />
export const Rating3 = () => <Rating value={3} setStars={()=> {}} />
export const Rating4 = () => <Rating value={4} setStars={()=> {}} />
export const Rating5 = () => <Rating value={5} setStars={()=> {}} />
export const СhangeRating = () => {
    const [rating, setRating] = useState<ValueType>(3);

    return (
            <Rating value={rating} setStars={setRating}/>
        )


}