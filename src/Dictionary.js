import React,{useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

function showResponse(response){
  setResults(response.data[0]);
} 
function search(event) {
 event.preventDefault ();

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
 axios.get(apiUrl).then(showResponse);
}

function Keywordentering (event){
setKeyword(event.target.value);
}

  return (
    <div className="Dictionary">
      <div className="row">
        <form onSubmit={search}>
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

        <Results results={results} />
      </div>
    </div>
  );
}