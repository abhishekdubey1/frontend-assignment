import PropTypes from "prop-types";
import "./styles.css";

export default function DynamicWidthCards({ cards }) {
  const showCards = cards[0]?.cards?.length !== 0;
  return (
    <div className="dynamic-width-cards">
      {showCards &&
        cards[0]?.cards.map((card) => (
          <a href={card.url}>
            <img
              className="dynamic-width-card"
              src={card.bg_image.image_url}
              alt={card.name}
              style={{ height: `${cards.height || 78}px` }}
            />
          </a>
        ))}
    </div>
  );
}

DynamicWidthCards.propTypes = {
  cards: PropTypes.array.isRequired
};
