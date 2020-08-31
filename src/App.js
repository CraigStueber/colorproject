
import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./SeedColors";

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
