import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import Sitetitle from "./components/Sitetitle"

import './styles.css'

function App() {
  console.log('online') // Console log 
  return (
    <div className="d-flex flex-column align-items-center container-fluid bg-success vh-100 p-0">
      <Sitetitle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/search" element={<Searchpage />}/>
        <Route path="/collections" element={<Collections />}/>
      </Routes>
    </div>
  );
}

export default App;
