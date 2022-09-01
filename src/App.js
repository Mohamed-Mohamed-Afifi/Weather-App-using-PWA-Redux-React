// import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './Redux/dataSlice';
function App() {
  const refd = useRef()
  const dispatch = useDispatch()
  const handel = () => {
    if (refd.current.value) {
      dispatch(getData(refd.current.value))
    }
  }
  return (
    <div className="App">
      <input type='text' name='country' ref={refd} />
      <button onClick={() => handel()}>show</button>
    </div>
  );
}

export default App;
