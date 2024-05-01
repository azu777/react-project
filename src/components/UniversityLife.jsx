import { useState } from "react";
import Button from "./Button/Button";
import { details } from "../data";

export default function UniversityLife() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h2>University life</h2>

      <Button
        isActive={contentType === "events"}
        onClick={() => handleClick("events")}
        data-test="events-btn"
      >
        Events
      </Button>
      <Button
        isActive={contentType === "elections"}
        onClick={() => handleClick("elections")}
        data-test="electinos-btn"
      >
        Elections
      </Button>
      <Button
        isActive={contentType === "news"}
        onClick={() => handleClick("news")}
        data-test="news-btn"
      >
        News
      </Button>

      {!contentType && <p>Press the button</p>}

      {contentType && <p>{details[contentType]}</p>}
    </section>
  );
}
