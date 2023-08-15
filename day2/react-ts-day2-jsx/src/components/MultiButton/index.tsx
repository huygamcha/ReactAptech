// import clsx from "clsx";
import clsx from "clsx";
import { multiButtons } from "./data";
import styles from "./multibutton.module.css";
import { useState } from "react";
localStorage.setItem("multiButtons", JSON.stringify(multiButtons));
interface MultiButtonItem {
  id: number;
  title: string;
  desc: string;
}
function MultiButtonItem({ id, title, desc }: MultiButtonItem) {
  const [isshow, SetIsShow] = useState(false);
  const handleShow = () => {
    SetIsShow(!isshow);
  };
  return (
    <div>
      <h1 onClick={handleShow} className={clsx(styles.title)}>
        {title}
        {id}
      </h1>
      <div
        className={clsx(styles.desc, {
          [styles.show]: isshow,
        })}
      >
        {desc}
      </div>
    </div>
  );
}

function MultiButton() {
  return (
    <div>
      {multiButtons.map((multiButton, i) => (
        <MultiButtonItem
          id={multiButton.id}
          key={i}
          title={multiButton.title}
          desc={multiButton.desc}
        ></MultiButtonItem>
      ))}
    </div>
  );
}

export default MultiButton;
