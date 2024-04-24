import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import News from './pages/News'
import Landing from './pages/Landing';
import { Suspense } from 'react';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
    <Suspense fallback={'hello'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/category/:category' element={<News/>} />
          <Route path='/search' element={<SearchPage/>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    </>
  );
}

export default App
