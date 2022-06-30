
import AplicacionCrudApi from "./components/AplicacionCrudApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      <h1>React Router</h1>

      <hr />

      <AplicacionCrudApi /> 
      {/* <Route exact path="/" element={<Login/>}></Route>   */}
      <hr />

    </div>
  );
}

export default App;
