import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />}
      <Route path="/home" element={<Home />}
      <Route path="/about" element={<About />}
      <Route path="/contact" element={<ContactMe />}
      <Route path="/work" element={<Work />}
      <Route path="/resume" element={<Resume />}
    </Routes>
    </div>
  </>
  );
}

export default App;
