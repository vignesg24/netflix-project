import React from 'react';
import Row from '../Components/Row/Row';
import api from '../api/Api';
import Banner from '../Components/Banner/Banner';
import Nav from '../Components/Nav/Nav';


export default function NetflixShow() {
  return (
    <div>
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={api.fetchNetflixOrigianls} isLargeRow videos={"pWqUEc7odAo"} />
      <Row title="Trending Now" fetchUrl={api.fetchTrending} videos={"N56EVgi7bJ4"} />
      <Row title="Top Rated" fetchUrl={api.fetchTopRated} videos={"n8g1hFXCKB4"} />
      <Row title="Action Movies" fetchUrl={api.fetchActionMovies} videos={"zUWtaw5Fra8"} />
      <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} videos={"33-KvBH_en8"} />
      <Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies} videos={"k64eKYtQX4w"} />
      <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies}  videos={"0eKYxh_DEHI"}/>
      <Row title="Documentries" fetchUrl={api.fetchDocumentaries} videos={"6asLp92fzz4"} />
      </div>
  )
}
