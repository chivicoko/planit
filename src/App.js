import Form from "./components/Form";
import Header from "./components/Header";
import Time from "./components/Time";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Form/>} />
            <Route path="/time" element={<Time/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
