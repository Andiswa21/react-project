
import './App.css'

function App() {
  

  return (
   <div className="container">
  
    <div className="top">
    <div className="box" id="box1">1</div>
    <div className="box" id="box2">2</div>
    <div className="box" id="box1">3</div>
    </div>

    <div className="middle">
    <div className="box" id="box6">4</div>
    <div className="box" id="box5">5</div>
    <div className="box" id="box6">6</div>
    </div>
    
    <div className="top">
    <div className="box" id="box1">7</div>
    <div className="box" id="box2" style={{
      marginLeft : '5.3em'
    }} >8</div>
    <div className="box" id="box1">9</div>
    </div>
    
  </div>
  )
}


export default App
