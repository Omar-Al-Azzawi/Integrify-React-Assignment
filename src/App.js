import "./App.css";
import React from "react";
import Card from "./components/Card";
import User from "./components/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  /*   const [infos, setInfos] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInfos(data));
  }); */
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Card />
          </Route>
          <Route exact path="/users/:id">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
