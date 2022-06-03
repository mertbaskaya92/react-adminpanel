import Home from "./sayfalar/home/Home";
import Login from "./sayfalar/login/Login";
import List from "./sayfalar/list/List";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login/>} />
            <Route path="list" element={<List/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
