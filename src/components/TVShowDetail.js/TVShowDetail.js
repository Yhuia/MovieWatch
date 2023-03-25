import { FiveStarRating } from '../FiveStarRating/FiveStarRating';
import s from './style.module.css';

export const TVShowDetail = ({TVShows})=>{
    const rating = TVShows.vote_average/2;
    return (
        <>
            <div className={s.title}>
                {TVShows.name}
            </div>
            <div className={s.rating_container}>
                <FiveStarRating rating ={rating}></FiveStarRating>
                <div className={s.rating}>
                    {Math.round(rating*100)/100 }/5
                </div>
            </div>
            <div className={s.overwiew}>
                {TVShows.overview}
            </div>
            
        </>
    )
}