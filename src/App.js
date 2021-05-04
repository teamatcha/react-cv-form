import './App.css';
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'


function App(props) {

  return (
    <div className="App">
      <Personal />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
