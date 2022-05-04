import chuck from "./chuck.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h1 className='title'>Chuck Norris Quotes</h1>
            <img src={chuck} alt='here' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
