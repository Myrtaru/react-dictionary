import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function showDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function showPhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
  event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(showDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000012bf592411c6844cc99e69277b8ef14d4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(showPhotoResponse);
  }
  
  function Keywordinput(event) {
    setKeyword(event.target.value);
  }
    return (
      <div className="Dictionary">
        <div className="row">
          <section>
            <form onSubmit={search}>
              <label>
                <input
                  className="Search-form"
                  type="search"
                  placeholder="Enter a word"
                  onChange={Keywordinput}
                />
                <div className="keywords">
                  Example: sunrise, plant, ocean, city...
                </div>
              </label>
              <button type="submit" className="Button">
                <img
                  src="../img/search.svg"
                  className="searchImg"
                  alt="magnifier"
                />
              </button>
            </form>
          </section>
          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } 

