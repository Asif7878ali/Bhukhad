import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from 'react-redux';
import Store from "./store/Store";

function App() {
  return (
    <>
      <Provider store={Store}>

        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
