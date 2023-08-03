import Video from './components/task7/video.js';
import AttributeColor from './components/task1/index.js';
import AddCart from './components/task3/index.js';
import Nav from './components/task6/index.js';
import Policy from './components/task2/index.js';
import Product from './components/task4/index.js'
import Buld from './components/task5/bulb.js';
import Portfolio from './components/task8/portfolio.js';
import Global from './components/Global/global.js';

function App() {
  return (
    // với Global để css chung cho toàn bộ các task
    <Global>
      <div>
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
           
      </div>
  
    </Global>
  );
}

export default App;