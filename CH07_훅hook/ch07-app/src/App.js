import logo from './logo.svg';
import './App.css';
import UseState01 from './hooks/1_useState/UseState01';
import UseState02 from './hooks/1_useState/UseState02';
import UseState03 from './hooks/1_useState/UseState03';
import UseEffect01 from './hooks/2_useEffect/UseEffect01';
import UseEffect02 from './hooks/2_useEffect/UseEffect02';
import UseEffect03 from './hooks/2_useEffect/UseEffect03';
import UseRef01 from './hooks/3_useRef/UseRef01';
import UseRef02 from './hooks/3_useRef/UseRef02';
import UseRef03 from './hooks/3_useRef/UseRef03';
import UseMemo01 from './hooks/4_useMemo/UseMemo01';
import UseMemo02 from './hooks/4_useMemo/UseMemo02';
import UseCallback02 from './hooks/5_useCallback/UseCallback02';
import UseCallback03 from './hooks/5_useCallback/UseCallback03';
import UseReducer02 from './hooks/6_useReducer/UseReducer02';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseReducer02 />
      </header>
    </div>
  );
}

export default App;
