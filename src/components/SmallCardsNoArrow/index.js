import PropTypes from "prop-types";
import "./styles.css";

export default function SmallCardsNoArrow({ cards }) {
  return (
    cards && (
      <>
        <div className="small-cards-noarrow scrollable">
          {cards.scrollable?.length !== 0 &&
            cards.scrollable?.map((card) => (
              <div>
                <div
                  className="small-card-noarrow__content"
                  style={{ background: card.bg_color }}
                  onClick={() => window.open(card.url, "_blank")}
                >
                  <img
                    src={card.icon?.image_url}
                    alt={card.name}
                    className="small-card-noarrow__img"
                    height="30"
                  />
                  <p className="small-card-noarrow__title">
                    {card.formatted_title.text || card.title}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="small-cards-noarrow nonscrollable">
          {cards.nonScrollable?.length !== 0 &&
            cards.nonScrollable?.map((card) => (
              <div
                className="small-card-noarrow__content"
                style={{ background: card.bg_color }}
                onClick={() => window.open(card.url, "_blank")}
              >
                <img
                  src={card.icon?.image_url}
                  alt={card.name}
                  className="small-card-noarrow__img"
                  height="30"
                />
                <p className="small-card-noarrow__title">
                  {card.formatted_title.text || card.title}
                </p>
              </div>
            ))}
        </div>
      </>
    )
  );
}

SmallCardsNoArrow.propTypes = {
  cards: PropTypes.array.isRequired
};
