import "./App.css";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/Navi";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <Navi />
        <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
