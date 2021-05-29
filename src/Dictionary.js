import React,{useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

function showDictionaryResponse(response){
  setResults(response.data[0]);
} 

function showPhotoResponse(response){
  setPhotos(response.data.photos);
}

function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
 axios.get(apiUrl).then(showDictionaryResponse);

let pexelsApiKey = "563492ad6f917000010000012bf592411c6844cc99e69277b8ef14d4";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers = {Authorization: `Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, {headers: headers}).then
(showPhotoResponse);
}

function submitSearch(event) {
  event.preventDefault();
  search();
}
function Keywordentering (event){
setKeyword(event.target.value);
}

function load(){
  setLoaded(true);
  search();
}
if(loaded) {
  return (
    <div className="Dictionary">
      <div className="row">
        <section>
          <form onSubmit={submitSearch}>
            <input
              className="Search-form"
              type="search"
              placeholder="Enter a word"
              onChange={Keywordentering}
              autoFocus="on"
            />
            <button type="submit" className="Button">
              Search
            </button>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    </div>
  );
}else{
  load();
  return "Loading"
}
}