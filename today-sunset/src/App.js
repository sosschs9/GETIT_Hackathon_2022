import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/page/mainPage";
import PhotoUpload from "./component/page/PhotoUpload";
import Test from "./component/page/testPage";
import Like from "./component/ui/Like";
import PhotoListPage from './component/page/PhotoListPage';
import PhotoViewPage from './component/page/PhotoViewPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path="photo-upload" element={<PhotoUpload />} />
          <Route path="photolist-view" element={<PhotoListPage />} />
          <Route path="photo/:postId" element={<PhotoViewPage />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
