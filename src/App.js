import { Provider } from "react-redux";
import store from "./redux/store";
import Routers from "./router/Routers";
import NavLinks from "./component/UI/navLinks/NavLinks";
import Footer from "./component/UI/footer/Footer";

// import style and icons
import "./style/App.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
// img of design for test
import homeImg from "./assets/images/testImage/final_home.png";

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
