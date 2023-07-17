import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import Expenses from '../Expenses/Expenses';
import Incomes from '../Incomes/Incomes';
import { GlobalProvider, useGlobalContext } from '../../context/globalContext';
import './Home.css'

function Home() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);


  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Incomes />;
      default:
        return <Expenses />;
    }
  }
  
  return (
    <GlobalProvider> {}
      <div className="App">
        <Navigation active={active} setActive={setActive} />
        <div className="container">
          <main>
            {displayData()}
          </main>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default Home;
