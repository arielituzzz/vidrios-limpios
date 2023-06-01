import { HashRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./style.scss";
import { Contact } from "./assets/data";
import iconWhatsapp from "./assets/imgs/icons/whatsappMain.png";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Main />
        </Switch>
        <Footer />
        <a href={Contact.whatsApp} className="app__whatsapp">
          <img
            src={iconWhatsapp}
            alt="iconWhatsapp"
            className="app__whatsapp__icon"
          />
        </a>
      </Router>
    </div>
  );
}

export default App;
