import React from "react";
import "./WhoWeAre.css";

export default function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="who-we-are-container">
        <div className="who-we-are-left">
          <span className="who-we-are-tagline">WHO WE ARE</span>
          <h2 className="who-we-are-title">
            Not just a lab. A bridge to what’s next.
          </h2>
        </div>

        <div className="who-we-are-right">
          <p>
            AfriYouth Innovation Labs connects research, policy, human-centered
            design, entrepreneurship and foresight. We create space for young people
            to investigate challenges, test ideas and help shape the decisions that
            affect their lives.
          </p>
          <p>
            Rooted in African realities and open to global learning, our work brings
          </p>
        </div>
      </div>
    </section>
  );
}