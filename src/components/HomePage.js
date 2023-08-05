import React, { useState } from "react";
import Popular from "./Popular";
import styles from "./HomePage.module.css";
import { useGlobalContext } from "../context/global";

function HomePage() {
  const {
    handleSubmit,
    search,
    searchAnime,
    handleChange,
    getPopularAnime,
    getUpcomingAnime,
    getAiringAnime,
  } = useGlobalContext();
  const [rendered, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };
  return (
    <div style={{ backgroundColor: "#EDEDED" }}>
      <header className={styles["home-header"]}>
        <div className={styles["logo"]}>
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
        <div className={styles["search-container"]}>
          <div className={styles["filter-btn popular-filter"]}>
            <button
              onClick={() => {
                setRendered("popular");
              }}
            >
              Popular
            </button>
          </div>
          <form action="" className={styles["search-form"]}>
            <div className={styles["input-control"]}>
              <input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
              ></input>
              <button type="submit" onClick={handleSubmit}>
                Search
              </button>
            </div>
          </form>
          <div className={styles["filter-btn airing-filter"]}>
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing
            </button>
          </div>
          <div className={styles["filter-btn upcoming-filter"]}>
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Popular
            </button>
          </div>
        </div>
      </header>
      {switchComponent()}
    </div>
  );
}

export default HomePage;
