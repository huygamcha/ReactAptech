import Video from "./components/task7/video.js";
import AttributeColor from "./components/task1/index.js";
import AddCart from "./components/task3/index.js";
import Nav from "./components/task6/index.js";
import Policy from "./components/task2/index.js";
import Product from "./components/task4/index.js";
import Buld from "./components/task5/bulb.js";
import Portfolio from "./components/task8/portfolio.js";
import Global from "./components/Global/global.js";
import Form from "./components/Form/index.js";
import MultiButton from "./components/MultiButton/index.js";
import "./index.css";
import Rate from "./components/Rate/index.js";
import MultiContact from "./components/MultiContact/index.js";
import Content from "./components/useEffect/index.js";
import Todo from "./components/Todo/index.js";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
function App() {
  // console.log("app-render");
  // const [state, setState] = useState("");
  return (
    // với Global để css chung cho toàn bộ các task
    <Global>
      <div>
        {/* <input type="text" onChange={(e) => setState(e.target.value)} /> */}
        {/* task1 */}
        <AttributeColor />
        {/* task2 */}
        <Policy />
        {/* task3 */}
        <AddCart />
        {/* task4 */}
        <Product />
        {/* task5 */}
        <Buld />
        {/* task6 */}
        <Nav />
        {/* task7 */}
        <Video />
        {/* task8 */}
        <Portfolio />
        {/* form from library */}
        <Form />
        {/* MultiButton */}
        <MultiButton />
        {/* Rate */}
        <Rate />
        {/* multicontact */}
        <MultiContact />
        {/* useEffect */}
        {/* <Content /> */}
        {/* Todo */}
        {/* <Todo /> */}
      </div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router> */}
    </Global>
  );
}
export default App;
