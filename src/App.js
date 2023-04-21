
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ApplePage from "./api/pages/ApplePage";
import BbcPage from "./api/pages/BbcPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header className="headrer">
        <div>
        <Link to="/"><p className="mainTitle">World News</p></Link>
        </div>
        <div>
          <Link to="/" className="homeLink">Home</Link>
          <Link to="/AppleNews" className="aplleLink">Apple News</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<BbcPage/>} />
        <Route path="/AppleNews" element={<ApplePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
