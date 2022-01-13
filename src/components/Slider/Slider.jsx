import React, { useEffect, useState } from "react";
import "./styles.css";
import Item from "./Item/Item";
import axios from "axios";
import { buildGroupedData } from "../../utils/functions";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [groupedData, setGroupedData] = useState([]);
  const [hasNextDisabled, setHasNextDisabled] = useState(false);
  const [hasPrevDisabled, setHasPrevDisabled] = useState(true);
  const apiUrl = "https://61dddc30f60e8f0017668aca.mockapi.io/api/images";

  const handleNext = () => {
    setCurrent(current === groupedData.length - 1 ? 0 : current + 1);
  };

  const handlePreviuos = () => {
    setCurrent(current === 0 ? groupedData.length - 1 : current - 1);
  };

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setGroupedData(buildGroupedData(res.data));
    });
  }, []);

  useEffect(() => {
    setHasPrevDisabled(current === 0 ? true : false);
    setHasNextDisabled(current === groupedData.length - 1 ? true : false);
  }, [current]);

  return (
    <div className="slider">
      <button
        className="nav-btn-prev"
        onClick={handlePreviuos}
        disabled={hasPrevDisabled}
      >
        Previous
      </button>
      {!groupedData ? (
        <p>Loading...</p>
      ) : (
        groupedData.map((group, index) => {
          return (
            <div className={current === index ? "slide-active" : "slide"}>
              {index === current && (
                <Item data={group} current={current} key={index}></Item>
              )}
            </div>
          );
        })
      )}
      <button
        className="nav-btn-next"
        onClick={handleNext}
        disabled={hasNextDisabled}
      >
        Next
      </button>
    </div>
  );
}
