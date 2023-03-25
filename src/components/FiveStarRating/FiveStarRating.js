import s from './style.module.css';
import {StarFill, Star as StarEmpty, StarHalf} from "react-bootstrap-icons"
export const FiveStarRating = ({rating}) => { 

    let starList = [];

    const starFillCount = Math.floor (rating);
    const hasHalfCount = rating - starFillCount >= 0.5 ; 
    const emptyStarCount = 5 - starFillCount - (hasHalfCount ? 1 : 0)
    
    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={"star-fill" + i}/>)
    }
    if(hasHalfCount){
        starList.push(<StarHalf key={"star-half"}/>)
    }
    for (let j = 1; j <= emptyStarCount; j++) {
        starList.push(<StarEmpty key={"star-empty"+j}/>)
    }
    

    return (<div>
        {starList}
        
    </div>)
}