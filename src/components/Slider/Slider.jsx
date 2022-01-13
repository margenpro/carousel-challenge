import React, { useEffect, useState } from "react";
import "./styles.css";
import Item from "./Item/Item";
import axios from "axios";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const url = "https://61dddc30f60e8f0017668aca.mockapi.io/api/images";

  const handleNext = () => {
    setCurrent(current === groupedData.length - 1 ? 0 : current + 1);
  };

  const handlePreviuos = () => {
    setCurrent(current === 0 ? groupedData.length - 1 : current - 1);
  };

  const buildGroupedData = (data) => {
    let arr = [];
    let grouped = [];
    if (data.length % 4 === 0) {
      data.map((e) => {
        arr.push(e);
        if (arr.length === 4) {
          grouped.push(arr);
          arr = [];
        }
      });
    }
    setGroupedData(grouped);
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      setApiData(res.data);
      buildGroupedData(res.data);
    });
  }, []);

  useEffect(() => {
    setDisabledPrev(current === 0 ? true : false);
    setDisabledNext(current === groupedData.length - 1 ? true : false);
  }, [current]);

  return (
    <div className="slider">
      <button
        className="nav-btn-prev"
        onClick={handlePreviuos}
        disabled={disabledPrev}
      >
        Previous
      </button>
      {apiData && groupedData ? (
        groupedData.map((group, index) => {
          return (
            <div className={current === index ? "slide-active" : "slide"}>
              {index === current && (
                <Item apiData={group} current={current} key={index}></Item>
              )}
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
      <button
        className="nav-btn-next"
        onClick={handleNext}
        disabled={disabledNext}
      >
        Next
      </button>
    </div>
  );
}
