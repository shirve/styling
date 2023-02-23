import Card from "../../Card/Card";
import { PlayCircleIcon } from "../../icons";

import "./styles.sass";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience__content">
        <div className="section-header -flex-1">
          <header className="section-header__title -single-word-spacing">
            The Zabdos Experience
          </header>
          <p className="section-header__description">
            Whether it's your first flight or simply your latest, we work to
            anticipate your every need
          </p>
          <div className="experience__content-button">
            <PlayCircleIcon className="experience__content-button-icon" /> Watch
            the full video now!
          </div>
        </div>
        <div className="experience__cards-wrapper">
          <div className="experience__cards">
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
    </section>
  );
};

export default Experience;
