import React, { useEffect, useState } from "react";
import Block from "../Block/Block";
import "./styles.css";

export default function Item({ apiData, current }) {
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);

  useEffect(() => {
    setFirstRow(apiData.slice(0, 2));
    setSecondRow(apiData.slice(2, 4));
  }, []);

  return (
    <div className="box-div">
      {apiData ? (
        <div>
          <div className="row-div">
            {firstRow.map((e) => {
              return (
                <Block
                  imgUrl={e.images[0] ? e.images[0] : ""}
                  key={e.id}
                  title={e.title}
                />
              );
            })}
          </div>
          <div className="row-div">
            {secondRow.map((e) => {
              return (
                <Block
                  imgUrl={e.images[0] ? e.images[0] : ""}
                  key={e.id}
                  title={e.title}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
