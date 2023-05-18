import { HashRouter as Router, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./style.scss";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Main />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
