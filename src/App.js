import chuck from "./chuck.jpg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  //💡 getting the data while using the axios npm install and we store it into a variable. we want

  useEffect(() => {
    const result = axios.get("https://api.chucknorris.io/jokes/random");
    console.log(result);
  }, []);

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h1 className='title'>Chuck Norris Quotes</h1>
            <img src={chuck} alt='here are the quotes of the greatest man' />
          </div>
          <div className='col-6 searchJokeCol'>
            <div className='card'>
              <div className='card-header'>
                <span>Search for a quote:</span>
              </div>
              <div className='card-body'>
                <input type='text' />
              </div>
            </div>

            <div>
              <button className='btn btn-warning btn-lg'>Generate Joke:</button>
            </div>
          </div>
        </div>
      </div>
      <h3 className='subTitle'>Get the joke:</h3>
      <h4>Chuck Is not afraid of anything</h4>
    </div>
  );
}

export default App;
