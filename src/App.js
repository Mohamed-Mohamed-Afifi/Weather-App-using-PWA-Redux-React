// import logo from './logo.svg';
import './styles/App.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './Redux/dataSlice';
import Card from './Card';
function App() {
  const refd = useRef()
  const dispatch = useDispatch()
  const found = useSelector(state => state.Fdata.error)
  const handel = () => {
    if (refd.current.value) {
      dispatch(getData(refd.current.value))
    }
  }
  return (
    <div className="App d-flex flex-md-row flex-column">
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <input type='text' name='country' ref={refd} className="countryIn col-md-4 col-12 mx-0 mx-md-3" placeholder='Please Enter The Country Name' />
          <button onClick={() => handel()} className='searchBtn col-md-2 col-12 mx-0'>Search</button>
          <div className="w-100"></div>
          {!found && <Card />}
        </div>
      </div>
    </div>
  );
}

export default App;
