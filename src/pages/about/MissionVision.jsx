import React from "react";
import "./MissionVision.css";

export default function MissionVision() {
  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        <div className="mission-vision-col">
          <span className="mission-vision-tag">OUR MISSION</span>
          <h2 className="mission-vision-title">
            Equip youth to turn insight into action.
          </h2>
          <p className="mission-vision-desc">
            Empower Africa’s youth to generate evidence, shape policy and develop
            innovative solutions to socio-economic challenges through research,
            human-centered design and entrepreneurship.
          </p>
        </div>

        <div className="mission-vision-col">
          <span className="mission-vision-tag">OUR VISION</span>
          <h2 className="mission-vision-title">
            A continent shaped by youth-led possibility.
          </h2>
          <p className="mission-vision-desc">
            An equitable and sustainable Africa where young people lead the ideas,
            institutions and enterprises that improve lives — connected to the world
            and grounded in their communities.
          </p>
        </div>
      </div>
    </section>
  );
}