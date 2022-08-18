import React from "react";
import { StyledCard } from "./syled/Card.styled";

export default function Card({ item: { id, title, body, image }, layout }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`/imgs/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
