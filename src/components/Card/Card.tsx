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
      <img src={img} className="card__image" alt="" />
      <div className="card__content">
        <div className="card__label">{label}</div>
        <div className="card__title">{title}</div>
      </div>
    </div>
  );
};

export default Card;
