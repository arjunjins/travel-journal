import "./App.css";
import Card from "./assets/components/Card/Card";
import Navbar from "./assets/components/Navbar/Navbar";
import data from "../data";

function App() {
  let size = screen.width;
  const cardArray = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  if (size < 1000) {
    return (
      <div className="App-not-working">
        <h1>Please use a desktop</h1>
      </div>
    );
  } else if (size > 1000) {
    return (
      <div className="App">
        <Navbar />
        {cardArray}
      </div>
    );
  }
}

export default App;
