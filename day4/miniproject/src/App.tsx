import Infomation from './components/Infomation'
import './App.css'
import Content from './components/Content'
function App() {
  return (
    <div className='container'>
      <div className="wrap">
        <div className="information">
          <div className="information_content">
            <Infomation />
          </div>
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App