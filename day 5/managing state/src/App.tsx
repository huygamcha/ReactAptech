// import { ReactNode, useState } from "react";
// import "./App.css";
// interface ChildItem {
//   children: ReactNode;
//   onShow: () => void;
//   title: string;
//   setIsActive: boolean;
// }
// function ChildItem({ children, onShow, title, setIsActive }: ChildItem) {
//   return (
//     <div>
//       <h3 onClick={onShow}>{title}</h3>
//       {setIsActive ? children : ""}
//     </div>
//   );
// }

// import { useState } from "react";

// function Child() {
//   // const [isActive, setIsActive] = useState(false);
//   const [current, setCurrent] = useState(0);

//   return (
//     <div>
//       <ChildItem
//         setIsActive={current === 0}
//         onShow={() => setCurrent(0)}
//         title="Categories"
//       >
//         <ul>
//           <li>Child 1 Categories</li>
//           <li>Child 2 Categories</li>
//           <li>Child 3 Categories</li>
//           <li>Child 4 Categories</li>
//         </ul>
//       </ChildItem>
//       <ChildItem
//         setIsActive={current === 1}
//         onShow={() => setCurrent(1)}
//         title="Repair"
//       >
//         <ul>
//           <li>Child 1 Repair</li>
//           <li>Child 2 Repair</li>
//           <li>Child 3 Repair</li>
//           <li>Child 4 Repair</li>
//         </ul>
//       </ChildItem>
//     </div>
//   );
// }
// export default Child;

import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
function App() {
  return (
    <div>
      <AiOutlineLike></AiOutlineLike>
      <AiTwotoneLike></AiTwotoneLike>
    </div>
  );
}

export default App;
