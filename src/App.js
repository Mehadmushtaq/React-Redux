// import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from "react-redux";
import Cart from './components/cart';

function App() {
  return (
    <>
    {/* wrap app with Provider and pass store as propt so tha't all of it's childs can access it */}
      <Provider store={store}>
        <Cart/>
      </Provider>

    </>
  );
}

export default App;
