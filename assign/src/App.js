import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
     {["Android","Blackberry","iPhone","Windows phone"].map(el=>
       <li>{el}</li>
     )}
     </ul>
     <h1>Mobile Manufacturers</h1>
      <ul>
     {["Samsung","HTC","Micromax","Apple"].map(el=>
       <li>{el}</li>
     )}
     </ul>
    </div>
  );
}

export default App;
