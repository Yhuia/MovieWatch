import './globale.css'
import s from './style.module.css'
import {BACKDROP_BASE_IMAGE} from './config.js'
import { TVShowAPI } from './Api/Tvshow';
import { useEffect, useState } from 'react';
import { TVShowDetail } from './components/TVShowDetail.js/TVShowDetail';
import { Logo } from './components/Logo/Logo';
import logo from "./asset/image/logoWatch.png"
import { TvShowList } from './components/TVShowList/TvShowList';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  // recuperer le tableau du premier film le plus populaire et je vais le modifier dans le DOM en créant un state
  const [currentTVShow,setCurrentTVShow] = useState();
  // je créer une fonction asynchrone qui va recevoir le fetch 
  async function fetchPopulars() {
    //recupere les films, si la liste est supérieur à 0 je modifie le state
    const populars = await TVShowAPI.fetchPopulars();
    if(populars.length > 0 ){
      //recupere le premier film et le met dans le state
      setCurrentTVShow(populars[0])
    }
  }
  // appel reccommendation
  const[recommendationList, setRcommendationList] = useState([]);
  
  async function fetchRecommendation(tvShowID) {
    const recommandation = await TVShowAPI.fetchRecommendation(tvShowID)
  if(recommandation.length > 0){
    setRcommendationList(recommandation.slice(0,10))
  }
  }

  async function searchTvShow(tvShowName){
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName)
    if(searchResponse.length > 0){
      setCurrentTVShow(searchResponse[0])
    }
  }
  
  
  // j'effectue le fetch que au moment ou le composant est monté 
  useEffect(() => {
    fetchPopulars();
    
  },[]);
  useEffect(() =>{
    if (currentTVShow) {
      fetchRecommendation(currentTVShow.id)
    }
  },[currentTVShow])

  

  return (
    <div className={s.main_container} 
    // J'attends que currentTVShow recoit la donnée pour l'afficher, s'il en la recoit pas je n'affiche pas le background
    style ={{background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${BACKDROP_BASE_IMAGE}${currentTVShow.backdrop_path}') no-repeat center/cover`: null}}>
        <header className={s.header}>
            <div className='row'>
              <div className='col-4 '>
                <Logo title="WatchMovie" subtitle='Ta serie du moment' image={logo}></Logo>
              </div>
              <div className='col-sm-12 col-md-4'>
                 <SearchBar onSubmit={searchTvShow} ></SearchBar>
              </div>
            </div>
        </header>
        
        <main className={s.tv_show_detail}>
          {currentTVShow && <TVShowDetail TVShows={ currentTVShow}></TVShowDetail>}
        </main>
        <section className={s.recommandation}>
          {recommendationList && recommendationList.length > 0 &&<TvShowList onClickItem={setCurrentTVShow} TvShowList={recommendationList} ></TvShowList>}
        </section>
    </div>
  );
}

export default App;
