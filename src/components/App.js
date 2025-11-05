import React from "react";
import "./../styles/App.css";
import Review from "./Review";

export default function App() {
  return (
    <main>
      <section className="container">
        <h2 id="review-heading">Our Reviews</h2>
        <Review />
      </section>
    </main>
  );
}


