import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import styles from "./Popular.module.css";

function Airing({ rendered }) {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "upcoming") {
      return airingAnime?.map((anime) => {
        return (
          <Link
            className={styles["anime-card"]}
            to={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
          >
            <img src={anime.images.jpg.large_image_url}></img>
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link
            className={styles["anime-card"]}
            to={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
          >
            <img src={anime.images.jpg.large_image_url} alt="" />
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

export default Airing;
