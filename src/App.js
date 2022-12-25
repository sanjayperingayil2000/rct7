import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Students from './pages/students';
import Contactus from './pages/contactus';
import { Edit } from './pages/edit';
import New from './pages/new';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/students' element={<Students />} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/new' element={<New/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
