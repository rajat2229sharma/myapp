import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Image from './components/image/image';
import Result from './components/result/result';
import Home from './components/home/home';

function App() {
  return (
    // <div className="App">
    //   <Image />
    //   <Result />
    // </div>
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/randomimage" exact component={Image}></Route> */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/randomimage" exact component={Image}></Route>
          <Route path="/result" exact component={Result}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;