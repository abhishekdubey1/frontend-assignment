import PropTypes from "prop-types";
import ArrowIcon from "../svg/ArrowIcon";
import "./styles.css";

function SmallCardsArrow({ cards }) {
  const showCards = cards[0]?.cards?.length !== 0;
  return (
    showCards &&
    cards[0]?.cards.map((card) => (
      <div
        className="small-card"
        onClick={() => window.open(card.url, "_blank")}
      >
        <img
          src={card.icon?.image_url}
          alt={card.name}
          className="small-card__img"
          height="30"
        />
        <p className="small-card__title">
          {card.formatted_title.text || card.title}
        </p>
        <ArrowIcon />
      </div>
    ))
  );
}

SmallCardsArrow.propTypes = {
  cards: PropTypes.array.isRequired
};

export default SmallCardsArrow;
