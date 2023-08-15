import { useState } from "react";
import styles from "./button.module.css";
const Colors = [
  { id: 1, label: "đen" },
  { id: 2, label: "hồng" },
  { id: 3, label: "Xanh" },
];
function ColorItem({
  label,
  active,
  onclick,
}: {
  label: string;
  active?: boolean;
  onclick: () => void;
}) {
  const getClass = ` ${styles.color_name} ${active ? styles.active : ""}`;
  const handleChildren = () => {
    onclick();
  };
  return (
    <div onClick={handleChildren} className={getClass}>
      {label}
    </div>
  );
}
function AttributeColor() {
  const [current, setCurrent] = useState(1);
  const handleClick = (value: number) => {
    setCurrent(value);
  };
  return (
    <div className={styles.color_wrap}>
      <span>Màu sắc: </span>
      {Colors.map((color, index) => {
        return (
          <ColorItem
            onclick={() => handleClick(color.id)}
            active={current - 1 === index}
            key={color.id}
            label={color.label}
          ></ColorItem>
        );
      })}
    </div>
  );
}
export default AttributeColor;
