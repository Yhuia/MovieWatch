import s from './style.module.css'
import { Search as SearchIcon} from 'react-bootstrap-icons'
export const SearchBar = ({onSubmit}) => {
    function submit(e) {
        if(e.key ==="Enter" && e.target.value.trim() !== ''){
            onSubmit(e.target.value)
            e.target.value ='';
        }
    }
    return (
        <>
            <SearchIcon className={s.icon}></SearchIcon>
            <input onKeyUp={submit} className={s.input} placeholder='Recherche ta série préférée'></input>
        </>
    )
}