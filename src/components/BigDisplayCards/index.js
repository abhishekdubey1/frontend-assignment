import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import BellIcon from "../svg/BellIcon";
import DismissIcon from "../svg/DismissIcon";
import "./styles.css";
function BigDisplayCards({ cards }) {
  const [reminderVisible, setReminderVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const dismissed = useRef(false);
  const showCards = cards[0]?.cards?.length !== 0 && cardVisible;
  const remindLater = () => {
    setReminderVisible(false);
    setCardVisible(false);
  };
  const dimissNow = () => {
    remindLater();
    dismissed.current = true;
  };
  const toggleReminderVisibility = () => setReminderVisible((s) => !s);

  useEffect(() => {
    setCardVisible(true);
  }, [cards]);

  if (dismissed.current) {
    return "";
  }

  return (
    showCards &&
    cards[0]?.cards?.map((card) => (
      <div
        className="big-display-card"
        style={{
          backgroundColor: card.bg_color
        }}
      >
        {reminderVisible && (
          <div
            className="big-display-card__buttons"
            style={{
              backgroundColor: "white"
            }}
          >
            <div
              className="big-display-card__button"
              role="button"
              tabIndex="0"
              onKeyPress={remindLater}
              onClick={remindLater}
            >
              <BellIcon />
              <p className="">remind later</p>
            </div>
            <div
              className="big-display-card__button"
              role="button"
              tabIndex="0"
              onKeyPress={dimissNow}
              onClick={dimissNow}
            >
              <DismissIcon />
              <p className="">dimiss now</p>
            </div>
          </div>
        )}
        <div
          className="big-display-card__content"
          tabIndex="0"
          onKeyPress={toggleReminderVisibility}
          role="button"
          onClick={toggleReminderVisibility}
          style={{
            backgroundColor: card.bg_color,
            backgroundImage: `url(${card.bg_image?.image_url})`
          }}
        >
          <h2 className="big-display-card__title">
            {card.formatted_title?.text || card.title}
          </h2>
          <p className="big-display-card__description">
            {card.formatted_description?.text || card.description}
          </p>
          {card.cta.map((el) => (
            <div className="big-display-card__cta-btn">
              <button
                style={{
                  backgroundColor: el.bg_color,
                  color: el.text_color
                }}
                type="button"
                onClick={() => window.open(el.url, "_blank")}
              >
                {el.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    ))
  );
}
BigDisplayCards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default BigDisplayCards;
