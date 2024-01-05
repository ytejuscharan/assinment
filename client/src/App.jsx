import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Registration/Register';
import GetData from './components/GetData/GetData';
import Admin from './components/Admin/Admin';
import Dashboard from './Dashboard';



function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/getdata' element={<GetData />}></Route>
        <Route path='/Admin' element={<Admin />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
