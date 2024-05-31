import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Components from './components/Components';
import ScrolToTop from './components/Elements/ScrolToTop';
import Loader from "./components/Elements/Loader";
import Home1 from './components/Pages/Home';

const App = () => {
  
  return (
    <div className="App">
      {/* <Home1/> */}
      <Components />  
      <ScrolToTop/>
      <Loader/>  
    </div>
  );
}

export default App;