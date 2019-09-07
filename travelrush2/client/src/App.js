import React from "react";
import Header from "./components/header";
import Card from "./components/Card";

class App extends Component {

state = {
  Cards,
};

}


render(); {
  return (
  <Header />,
  {this.state.cards.map(card => (
  <Card
    id={Card.id}
    key={Card.id}
    />
  ))
};
}
export default App;