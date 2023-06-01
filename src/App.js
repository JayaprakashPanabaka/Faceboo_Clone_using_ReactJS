import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';
// import { Route } from 'react-router';


function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      {/* <HeaderArea /> */}
      <Switch>
        <Route path='/LoginPage' exact = {true} component = {LoginPage} />
        <Route path='/HeaderArea' component={HeaderArea} />
      </Switch>
    </div>
  );
}

export default App;
