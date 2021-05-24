import React,{useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

function showResponse(response){
  setResults(response.data[0]);
} 
function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
 axios.get(apiUrl).then(showResponse);
}

function submitSearch(event) {
  event.preventdefault();
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
      </div>
    </div>
  );
}else{
  load();
  return "Loading"
}
}