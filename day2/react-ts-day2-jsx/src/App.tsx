import Video from './components/task7/video.js';
import AttributeColor from './components/task1/index.js';
import AddCart from './components/task3/index.js';
import Nav from './components/task6/index.js';
import Policy from './components/task2/index.js';
import Product from './components/task4/index.js'
import Buld from './components/task5/bulb.js';

function App() {
  return (
    <div>
      {/* task1 */}
      <AttributeColor />
      {/* task2 */}
      <Policy />
      {/* task3 */}
      <AddCart></AddCart>
      {/* task4 */}
      <Product />
      {/* task5 */}
      <Buld />
      {/* task6 */}
      <Nav></Nav>
      {/* task7 */}
      <Video></Video>

    </div>
  );
}

export default App;