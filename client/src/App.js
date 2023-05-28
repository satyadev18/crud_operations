
import './App.css';
import { Detail, Edit, Register, Homepage, Navbar } from './components';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />}> </Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/edit/:id' element={<Edit />}></Route>
        <Route exact path='/view/:id'
          element=
          {<Detail />}> </Route>
      </Routes>





    </div>
  );
}

export default App;
