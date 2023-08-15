// // import { ReactNode, useState } from "react";
// // import "./App.css";
// // interface ChildItem {
// //   children: ReactNode;
// //   onShow: () => void;
// //   title: string;
// //   setIsActive: boolean;
// // }
// // function ChildItem({ children, onShow, title, setIsActive }: ChildItem) {
// //   return (
// //     <div>
// //       <h3 onClick={onShow}>{title}</h3>
// //       {setIsActive ? children : ""}
// //     </div>
// //   );
// // }

// // import { useState } from "react";

// // function Child() {
// //   // const [isActive, setIsActive] = useState(false);
// //   const [current, setCurrent] = useState(0);

// //   return (
// //     <div>
// //       <ChildItem
// //         setIsActive={current === 0}
// //         onShow={() => setCurrent(0)}
// //         title="Categories"
// //       >
// //         <ul>
// //           <li>Child 1 Categories</li>
// //           <li>Child 2 Categories</li>
// //           <li>Child 3 Categories</li>
// //           <li>Child 4 Categories</li>
// //         </ul>
// //       </ChildItem>
// //       <ChildItem
// //         setIsActive={current === 1}
// //         onShow={() => setCurrent(1)}
// //         title="Repair"
// //       >
// //         <ul>
// //           <li>Child 1 Repair</li>
// //           <li>Child 2 Repair</li>
// //           <li>Child 3 Repair</li>
// //           <li>Child 4 Repair</li>
// //         </ul>
// //       </ChildItem>
// //     </div>
// //   );
// // }
// // export default Child;

import { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
function App() {
  const [isLike, setIsLike] = useState(true);
  const [isColor, setIsColor] = useState("white");

  return (
    <div>
      <div onClick={() => setIsLike(!isLike)}>
        {isLike ? <AiOutlineLike /> : <AiFillLike />}
      </div>
      <div>
        <button
          style={{ background: `${isColor}` }}
          onClick={() => setIsColor(isColor === "white" ? "red" : "white")}
        >
          Change here
        </button>
      </div>
    </div>
  );
}

export default App;
