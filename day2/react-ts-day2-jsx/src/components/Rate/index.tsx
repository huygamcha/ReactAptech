import clsx from "clsx";
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const stars = [1, 2, 3, 4, 5];

function Rate() {
  const [isstar, SetIsStar] = useState(0);
  const handleClick = (i: number) => {
    SetIsStar(i);
  };
  console.log("re-render");
  return (
    <div className={clsx("flex", "text-4xl")}>
      {stars.map((star, i) =>
        isstar < i ? (
          <AiOutlineStar onClick={() => handleClick(i)} key={i} />
        ) : (
          <AiFillStar onClick={() => handleClick(i)} key={i} />
        )
      )}
    </div>
  );
}

export default Rate;
