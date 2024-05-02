import React from "react";

export default function IntroSection() {
  return React.createElement(
    "section",
    null,
   [
     React.createElement(
      "h3",
      { className: "centered", style: { color: "#666" } },
      "Brief history"
    ),
     React.createElement(
      "h3",
      { className: "centered", style: { color: "#666" } },
      "The University is a public institution with twenty departments, and high level research centres \
      in the agriculture, astrophysics, computer science, engineering, medicine and veterinary medicine sectors"
    )]
  );
}
