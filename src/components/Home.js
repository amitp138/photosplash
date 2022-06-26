import React, { useState } from "react";
import { apiGET } from "../misc/Config";
import "../App.css";

const Home = () => {
  const [inp, setInp] = useState("");
  const [data, setData] = useState([]);
  const handleInp = (e) => {
    setInp(e.target.value);
  };
  const Search = () => {
    const api_key = "DyFddN73SW_0s0buG_NDpWBQWHPMN9F0B9vCT2OqIzo";
    apiGET(`/search/photos?query=${inp}&client_id=${api_key}`).then((res) => {
      console.log(res);
      setData(res.results);
    });
  };
  function onKeyDown(e) {
    if (e.keyCode === 13) {
      Search();
    }
  }

  return (
    <div className="container">
      <div className="inp">
        <input
          type="text"
          value={inp}
          placeholder="search photos"
          onChange={handleInp}
          onKeyDown={onKeyDown}
        />
        <button type="button" onClick={Search}>
          search
        </button>
      </div>
      <div className="photos">
        {data.map((value, index) => {
          return (
            <div className="image">
              <img key={value.id} src={value.urls.small} alt="amit" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
