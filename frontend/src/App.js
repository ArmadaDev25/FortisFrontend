import Navbar from "./components/Navbar";
import './styles.css'

function App() {
  console.log('online') // Console log 
  return (
    <div className="d-flex flex-column align-items-center container-fluid bg-success vh-100 p-0">
      <Navbar/>
    </div>
  );
}

export default App;
