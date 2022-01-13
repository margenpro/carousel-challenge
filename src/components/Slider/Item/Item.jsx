import React, { useEffect, useState } from "react";
import Block from "../Block/Block";
import "./styles.css";
import { getRandomImgUrl } from "../../../utils/functions";

export default function Item({ data }) {
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);

  useEffect(() => {
    setFirstRow(data.slice(0, 2));
    setSecondRow(data.slice(2, 4));
  }, []);

  if (!data) return null;

  return (
    <div className="box-div">
      <div>
        <div className="row-div">
          {firstRow.map((e) => {
            return (
              <Block
                imgUrl={getRandomImgUrl(e.images)}
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
                imgUrl={getRandomImgUrl(e.images)}
                key={e.id}
                title={e.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
