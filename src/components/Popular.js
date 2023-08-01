import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import styles from "./Popular.module.css";

function Popular() {
  const { popularAnime, isSearch } = useGlobalContext();
  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <Link to={`anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url}></img>
          </Link>
        );
      });
    }
  };
  return (
    <div>
      <div className={styles.popular_anime}>{conditionalRender()}</div>
    </div>
  );
}

export default Popular;
