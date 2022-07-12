import PropTypes from "prop-types";
import "./styles.css";

export default function ImageCards({ cards }) {
  return (
    <div className="image-cards-container">
      {cards.map((card) => {
        if (card && Array.isArray(card.cards)) {
          return card.cards.map((card) => (
            <a href={card.url} style={{}}>
              <img
                src={card?.bg_image?.image_url}
                className="image-card"
                alt={card.name}
                style={{
                  backgroundColor: card.bg_color
                }}
              />
            </a>
          ));
        }
        return "";
      })}
    </div>
  );
}

ImageCards.propTypes = {
  cards: PropTypes.array.isRequired
};
