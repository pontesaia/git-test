
// import logo from "./src/images/insulin-drip-logo-sml.svg";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <h2>Calculator</h2>
      	<img
			src="insulindrip-logo-sml.svg"
			style={{ width: "150px" }}
			id="brandLogo"
			alt="brandLogo"
			/>
        <Calculator/>
    </div>
  );
}

export default App;
