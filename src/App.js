import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import TheSinger from "./TheSinger";
import TheFirstSinger from "./TheFirstSinger";
import TheSecondSinger from "./TheSecondSinger";
import TheThirdSinger from "./TheThirdSinger";
import TheFourthSinger from "./TheFourthSinger";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [lyrics, setLyrics] = useState([]);
  const [singer, setSinger] = useState("");

  const newInputTyped = (e) => {
    setInputText(e.target.value);
  };

  const newSingerClicked = (newSinger) => {
    if (inputText.trim() !== "") {
      setLyrics((currentLyrics) => [
        { text: inputText, singer: singer !== null ? singer : newSinger },
        ...currentLyrics,
      ]);
      setInputText("");
    }
    setSinger(newSinger);
  };

  return (
    <>
      <div className="App">
        <div>
          <h1>Complete the Lyrics</h1>
        </div>

        <div className="container">
          <Link to="firstsinger">
            <div
              className="singerbox"
              style={{ backgroundColor: "#0920a6" }}
              onClick={() => newSingerClicked("first")}
            >
              First Singer
            </div>
          </Link>

          <Link to="secondsinger">
            <div
              className="singerbox"
              style={{ backgroundColor: "#940a0a" }}
              onClick={() => newSingerClicked("second")}
            >
              Second Singer
            </div>
          </Link>

          <Link to="thirdsinger">
            <div
              className="singerbox"
              style={{ backgroundColor: "#045314" }}
              onClick={() => newSingerClicked("third")}
            >
              Third Singer
            </div>
          </Link>

          <Link to="fourthsinger">
            <div
              className="singerbox"
              style={{ backgroundColor: "#09748a" }}
              onClick={() => newSingerClicked("fourth")}
            >
              Fourth Singer
            </div>
          </Link>

          <Routes>
            <Route path="/" element={<TheSinger />} />
            <Route index element={<TheSinger />} />
            <Route path="/singers/firstsinger" element={<TheFirstSinger />} />
            <Route path="/singers/secondsinger" element={<TheSecondSinger />} />
            <Route path="/singers/thirdsinger" element={<TheThirdSinger />} />
            <Route path="/singers/fourthsinger" element={<TheFourthSinger />} />
          </Routes>
        </div>
      </div>

      <div className="firstcontainer">
        <input
          className="textbox"
          variant="outlined"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <div className="secondcontainer">
        <div className="lineContainer">
          {lyrics
            .slice()
            .reverse()
            .map((lyric, index) => (
              <div
                className={`thelyrics singer-${lyric.singer}`}
                key={index}
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {lyric.text}
              </div>
            ))}
          {inputText.trim() !== "" && (
            <div
              className={`thelyrics singer-${singer}`}
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              {inputText}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
