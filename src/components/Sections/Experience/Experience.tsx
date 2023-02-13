import { IoPlayCircle } from "react-icons/io5";
import Card from "../../Card/Card";

import "./styles.sass";

const Experience = () => {
  return (
    <div className="experience__wrapper">
      <div className="experience__content">
        <div className="experience__content-header">
          <div className="experience__content-label">The Zabdos Experience</div>
          <div className="experience__content-description">
            Whether it's your first flight or simply your latest, we work to
            anticipate your every need
          </div>
          <div className="experience__content-button">
            <IoPlayCircle /> Watch the full video now!
          </div>
        </div>
        <div className="experience__content__cards-wrapper">
          <div className="experience__content__cards">
            <Card
              label="Arrive inspired"
              title="Business Class"
              img="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <Card
              label="Award winning technology"
              title="Explore the Fleet in AR"
              img="https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
            />
            <Card
              label="Expect the exceptional"
              title="Economy Class"
              img="https://images.unsplash.com/photo-1612538467646-379b9ca12542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
