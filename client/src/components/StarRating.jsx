import React from "react";

function StarRating({ rating }) {
  const avg = Number(rating);
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= avg) {
      stars.push(<i class="fas fa-star"></i>);
    } else if (i === Math.ceil(avg) && !Number.isInteger(avg)) {
      stars.push(<i class="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i class="far fa-star"></i>);
    }
  }
  return (
    <div
      className="my-2"
      style={{
        width: "100%",
      }}
    >
      {stars}
    </div>
  );
}

export default StarRating;
