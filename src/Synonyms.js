import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="row">
        <div className="col-2">
          <div className="Synonyms">
            <strong className="SynonymsTitle">Synonyms </strong>
          </div>
        </div>
        <div className="col-10">
          <ul>
            {props.synonyms.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
