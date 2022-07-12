import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./styles.css";
import { API_URL } from "./constants";
import filterData from "./filterData";
import BigDisplayCards from "./components/BigDisplayCards";
import SmallCardsArrow from "./components/SmallCardsWithArrow";
import ImageCards from "./components/ImageCards";
import DynamicWidthCards from "./components/DynamicWidthCards";
import SmallCardsNoArrow from "./components/SmallCardsNoArrow";
import PullToRefresh from "react-simple-pull-to-refresh";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";

function reducer(state, newState) {
  // console.log(newState);
  return newState;
}

export default function App() {
  const [cards, dispatch] = useReducer(reducer, {
    bigDisplayCards: [],
    smallCardsArrow: [],
    imgCards: [],
    dynamicWidthCards: [],
    smallCardsNoArrow: {}
  });
  const [status, setStatus] = useState("idle"); //loading, error
  const loading = status === "loading";
  const idle = status === "idle";
  const error = status === "error";
  const fetchData = async () => {
    try {
      setStatus("loading");
      const { data } = await axios(API_URL);
      dispatch(filterData(data));
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      console.log("Error message: ", err.message);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(cards);
  return (
    <div className="App">
      <PullToRefresh onRefresh={fetchData}>
        {loading && <Spinner />}
        {idle && (
          <>
            <BigDisplayCards cards={cards.bigDisplayCards} />
            <SmallCardsArrow cards={cards.smallCardsArrow} />
            <ImageCards cards={cards.imgCards} />
            <DynamicWidthCards cards={cards.dynamicWidthCards} />
            <SmallCardsNoArrow cards={cards.smallCardsNoArrow} />
          </>
        )}
        {error && <ErrorMessage />}
      </PullToRefresh>
    </div>
  );
}
