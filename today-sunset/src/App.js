import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import PhotoUpload from './Component/page/PhotoUpload'; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="post-write" element={<PhotoUpload/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
