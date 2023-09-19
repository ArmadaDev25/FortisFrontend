import Navbar from "./components/Navbar";
import HomepageBody from "./components/homepage_components/HomepageBody";
import './styles.css'

function App() {
  console.log('online') // Console log 
  return (
    <div className="d-flex flex-column align-items-center container-fluid bg-success vh-100 p-0">
      <Navbar/>
      <HomepageBody/>
    </div>
  );
}

export default App;
