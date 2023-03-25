import s from './style.module.css';

export const Logo = ({title,subtitle,image})=> {
    return (
        <>
        <div className={s.container} >
            <img className={s.image} src={image}></img>
            <span className={s.title}>{title}</span>
        </div>
        <span className={s.subtitle} >{subtitle}</span>
        </>
    )
}