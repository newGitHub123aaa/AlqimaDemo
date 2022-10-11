import { Provider } from "react-redux";
import "./style/App.scss";
import store from "./redux/store";
import Routers from "./router/Routers";
import NavLinks from "./component/UI/navLinks/NavLinks";
import Footer from './component/UI/footer/Footer';

// img of design for test
import homeImg from "./assets/images/home_alqima.png";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="for-test">
          <img src={homeImg} alt="" />
        </div>
        <NavLinks />
        <Routers />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
