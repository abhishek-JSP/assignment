import React from 'react';
import AllList from './components/main/all-list';
import FilterYear from './components/main/filterYear';

import './App.css';

function App() {
  const [selectedYear, setSelectedYear] = React.useState("")
  const [launch, setLaunch] = React.useState("")
  const [landing, setLanding] = React.useState("")
  const pickYear = (year) => {
    console.log(year);
    setSelectedYear(year)
  }
  const selectLaunch = (value) => {
    console.log(value);
    setLaunch(value)
  }
  const selectLanding = (value) => {
    console.log(value);
    setLanding(value)
  }

  return (
    <div className="App">
      <FilterYear pickYear={pickYear} selectLaunch={selectLaunch} selectLanding={selectLanding}/>
     <AllList selectedYear = {selectedYear} launch={launch} landing={landing}/>
    </div>
  );
}

export default App;
