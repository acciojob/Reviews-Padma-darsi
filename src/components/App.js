
import React from "react";
import "./styles.css";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <h2 id="review-heading">Our Reviews</h2>
        <Review />
      </section>
    </main>
  );
}

export default App;
