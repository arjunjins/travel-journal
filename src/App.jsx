import "./App.css";
import Card from "./assets/components/Card/Card";
import Navbar from "./assets/components/Navbar/Navbar";

function App() {
  let size = screen.width;
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
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
