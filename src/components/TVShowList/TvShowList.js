import { TVShowListItem } from "../TVShowListItem/TVShowListItem"
import s from './style.module.css'

export const TvShowList = ({onClickItem,TvShowList}) => {
    return (
        <>
        <div className={s.title}>Vous pourriez aussi aimez :</div>
        <div className={s.list}>
            {TvShowList.map((tvShow)=>{
               return (
                <span className={s.item} key={tvShow.id}>
                    <TVShowListItem  onCLick={onClickItem} tvShow={tvShow}></TVShowListItem>
                </span>
            )
            })}
            
        </div>
        </>
    )
}