import React from 'react';
import Pallette from './Palette';
import seedColors from './SeedColor';


function App() {
  return (
    <div className="App">
      <Pallette {...seedColors[]} />
    </div>
  );
}

export default App;
