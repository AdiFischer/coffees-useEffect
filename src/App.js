import { useState, useEffect } from 'react';
import './App.css';
import SingleCoffee from './SingleCoffee';

function App() {
  const [data, setData] = useState([{name: 'Colada', price: '40c'}])
  

  useEffect(() => {  //to run when the component is changing, listening to that
    getCoffee() // run it once
    
  }, [])// second parameter for the useEffect

  const getCoffee = () => {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => response.json())// convert to json
    .then(data => setData(data))//get formatted data
    .catch( x => console.error(x))
  }
  console.log('my data', data)
  return (
    <div className="App">
      <main>
        <h1>Coffees by sample API</h1>
       <button onClick={() => getCoffee()}>Get me coffees</button>
        <div className='menu-items'>
          {data.map(item => {
            console.log('each item', item)
          return <SingleCoffee entireObject={item} />
        })}

          {/* <SingleCoffee name='Black American Coffee' price='$$$' description='ghdgdg'/>
          <SingleCoffee name='Coffee Cubano' price='Mucho Mula' description='dfgjujyh'/>
          <SingleCoffee />
          <SingleCoffee />
          <SingleCoffee />
          <SingleCoffee /> */}

          {/* <div className="menu-items__item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
            alt="" />
            <div>
              <h3>1. Black American Coffee</h3>
              <p>Black coffee is as simple as it gets</p>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default App;
