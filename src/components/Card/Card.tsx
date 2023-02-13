import "./styles.sass";

const Card = ({
  img,
  label,
  title,
}: {
  img: string;
  label: string;
  title: string;
}) => {
  return (
    <div className="card">
      <img src={img} className="card__image" alt="card" />
      <div className="card__content">
        <div className="card__content-label">{label}</div>
        <div className="card__content-title">{title}</div>
      </div>
    </div>
  );
};

export default Card;
