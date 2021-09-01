import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": " Grinning Face ",
  "😃": " Grinning Face with Big Eyes ",
  "😄": " Grinning Face with Smiling Eyes ",
  "😁": " Beaming Face with Smiling Eyes ",
  "😆": " Grinning Squinting Face ",
  "😅": " Grinning Face with Sweat ",
  "😂": " Face with Tears of Joy ",
  "😉": " Winking Face ",
  "😊": " Smiling Face with Smiling Eyes ",
  "😇": " Smiling Face with Halo ",
  "😍": " Smiling Face with Heart-Eyes ",
  "😘": " Face Blowing a Kiss ",
  "😗": " Kissing Face ",
  "☺": " Smiling Face ",
  "😚": " Kissing Face with Closed Eyes ",
  "😙": " Kissing Face with Smiling Eyes ",
  "😌": " Relieved Face ",
  "😔": " Pensive Face ",
  "😪": " Sleepy Face ",
  "❤": " Red Heart ",
  "✨": " Sparkles ",
  "🔥": " Fire ",
  "😊": " Smiling Face with Smiling Eyes ",
  "❤‍🔥": " Heart on Fire ",
  "😂": " Face with Tears of Joy ",
  "👍": " Thumbs Up ",
  "🙈": " See-No-Evil Monkey ",
  "🙉": " Hear-No-Evil Monkey ",
  "🙊": " Speak-No-Evil Monkey ",
  "💥": " Collision ",
  "💫": " Dizzy ",
  "💦": " Sweat Droplets ",
  "💨": " Dashing Away ",
  "🐵": " Monkey Face ",
  "🐒": " Monkey "
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var emojiInput = event.target.value;
    // var meaning = emojiDictionary[emojiInput];
    // console.log(meaning);

    if (emojiInput in emojiDictionary) {
      setMeaning(emojiDictionary[emojiInput]);
    } else {
      setMeaning("Don't recognise Emoji...");
    }
  }

  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt...</h1>
      <input onChange={emojiInputHandler}></input>

      <div>{meaning}</div>

      <h3> Emoji We Have</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
