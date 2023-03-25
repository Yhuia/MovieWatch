import s from './style.module.css';
import {SMALL_BASE_IMAGE} from '../../config'
export const TVShowListItem = ({tvShow,onCLick}) => {
    return (
        <div onClick={()=>{onCLick(tvShow)}} className={s.container}>
            <img className={s.img} alt={tvShow.name} src={SMALL_BASE_IMAGE + tvShow.backdrop_path }></img>
            <div className={s.title}>
            {tvShow.name}
            </div>
        </div>
    )
}