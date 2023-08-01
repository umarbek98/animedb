import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./AnimeItem.module.css";

function AnimeItem() {
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  const getCharacters = async (charid) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${charid}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);
  return (
    <div className={styles["anime-item"]}>
      <h1>{title}</h1>
      <div className={styles["details"]}>
        <div className={styles["detail"]}>
          <div className={styles["image"]}>
            <img src={images?.jpg.large_image_url} alt=""></img>
          </div>
          <div className={styles["anime-details"]}>
            <p>
              <span>Aired: </span>
              <span>{aired?.string}</span>
            </p>
            <p>
              <span>Rating: </span>
              <span>{rating}</span>
            </p>
            <p>
              <span>Rank: </span>
              <span>{rank}</span>
            </p>
            <p>
              <span>Score: </span>
              <span>{score}</span>
            </p>
            <p>
              <span>Scored By: </span>
              <span>{scored_by}</span>
            </p>
            <p>
              <span>Popularity: </span>
              <span>{popularity}</span>
            </p>
            <p>
              <span>Status: </span>
              <span>{status}</span>
            </p>
            <p>
              <span>Source: </span>
              <span>{source}</span>
            </p>
            <p>
              <span>Season: </span>
              <span>{season}</span>
            </p>
            <p>
              <span>Duration: </span>
              <span>{duration}</span>
            </p>
          </div>
        </div>
        <p className={styles["description"]}>
          {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </p>
      </div>
      <h3 className={styles["title"]}>Trailer</h3>
      <div className="trailer_con">
        {trailer?.embed_url && (
          <iframe
            src={trailer?.embed_url}
            title="Inline Frame Example"
            width="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default AnimeItem;
