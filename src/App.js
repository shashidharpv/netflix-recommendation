import "./App.css";

import React, { useState } from "react";

export default function App() {
  const [shows, setshows] = useState([]);
  const showsList = [
    {
      Drama: [
        {
          show: "Friends",
          year: "1993",
          rating: "9.8"
        },
        {
          show: "Big Bang Theory",
          year: "2013",
          rating: "9.1"
        },
        {
          show: "The Office",
          year: "1998",
          rating: "8.9"
        },
        {
          show: "Brooklyn 99",
          year: "2009",
          rating: "9.2"
        }
      ]
    },
    {
      Action: [
        {
          show: "Narcos",
          year: "2009",
          rating: "8.4"
        },
        {
          show: "The Gray Man",
          year: "2022",
          rating: "8.3"
        },
        {
          show: "Kung Fu Panda",
          year: "1999",
          rating: "9.5"
        },
        {
          show: "Kobra Kai",
          year: "2015",
          rating: "8.1"
        }
      ]
    },
    {
      Comedy: [
        {
          show: "Chennai Express",
          year: "2015",
          rating: "8.5"
        },
        {
          show: "Jumanji",
          year: "2013",
          rating: "9.4"
        },
        {
          show: "Oh Baby",
          year: "2019",
          rating: "8.8"
        },
        {
          show: "ZNMD",
          year: "2013",
          rating: "9.4"
        }
      ]
    },
    {
      Good: [
        {
          show: "Oadhal Kanmani",
          year: "2018",
          rating: "8.9"
        },
        {
          show: "Sillu Karapatti",
          year: "2012",
          rating: "8.1"
        },
        {
          show: "taare Zameen par",
          year: "2016",
          rating: "9.3"
        },
        {
          show: "Kuch Kuch Hota Hai",
          year: "2004",
          rating: "9.5"
        }
      ]
    }
  ];

  const displayShows = (t) => {
    var a = t[Object.keys(t)];

    setshows(a);
  };

  return (
    <>
      <div className="App">
        <div className="shows">
          <h1>Netflix & Chill</h1>
        </div>

        <p>
          Checkout my favorite shows on Netflix. Select a genre to get started.
        </p>

        {showsList.map((t, index) => {
          return (
            <button onClick={() => displayShows(t)}>{Object.keys(t)}</button>
          );
        })}

        <hr
          style={{ marginTop: "2rem", width: "80vw", marginBottom: "5rem" }}
        />
        <ul className="card-list">
          {shows.map((t) => {
            return (
              <>
                <li className="card">
                  <h4>{t.show}</h4>
                  <p>IMBD rating {t.rating}</p>
                  <p>released on {t.year}</p>
                </li>
                <br />
              </>
            );
          })}
        </ul>
        <br></br>
        <br></br>
      </div>
    </>
  );
}