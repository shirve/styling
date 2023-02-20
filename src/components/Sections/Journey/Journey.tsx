import {
  IoBagOutline,
  IoBedOutline,
  IoCalendarClearOutline,
  IoCarSportOutline,
  IoConstructOutline,
  IoFastFoodOutline,
} from "react-icons/io5";
import Button from "../../Button/Button";

import "./styles.sass";

const Journey = () => {
  return (
    <section className="journey">
      <div className="journey__header">
        <header className="journey__header-title">
          Complement Your Journey
        </header>
        <p className="journey__header-description">
          Explore the additional services we offer to make your journey even
          more memorable
        </p>
      </div>
      <div className="journey__content">
        <Button label="Manage Booking" icon={<IoCalendarClearOutline />} />
        <Button label="Excess baggage" icon={<IoBagOutline />} />
        <Button label="Paid Lounge Access" icon={<IoFastFoodOutline />} />
        <Button label="Airport Hotel" icon={<IoBedOutline />} />
        <Button label="AI Maha Services" icon={<IoConstructOutline />} />
        <Button label="Car Rentals" icon={<IoCarSportOutline />} />
      </div>
    </section>
  );
};

export default Journey;
