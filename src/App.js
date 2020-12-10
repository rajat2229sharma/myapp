import Image from './components/Image/image';
import Navbar from './components/Navbar/navbar';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from './components/Home/home';
import Result from './components/Result/result';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/randomimage" exact component={Image}></Route>
          <Route path="/result" exact component={Result}></Route>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
