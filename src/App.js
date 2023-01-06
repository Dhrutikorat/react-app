import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container mt-4">
        <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
