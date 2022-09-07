// import logo from './logo.svg';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './Redux/dataSlice';
import Card from './Card';
import './styles/App.css';
import Themes from './Themes';
console.log(document.getElementsByTagName('link'))
// const colr=useSelector(state => state.colors.color)
function App() {
  const refd = useRef()
  const dispatch = useDispatch()
  const AppClass = useSelector(state => state.color.appClass)
  console.log(AppClass)
  const found = useSelector(state => state.Fdata.error)
  const handel = (e) => {
    if (refd.current.value) {
      dispatch(getData(refd.current.value))
    }
  }
  const handelclick = (e) => {
    if (e.key === 'Enter' && refd.current.value) {
      dispatch(getData(refd.current.value))

    }
  }
  return (
    <div className={`App-${AppClass ?? '5ce4ff'}-theme`}>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <input type='text' name='country' ref={refd} className="countryIn col-md-4 col-12 mx-0 mx-md-3" placeholder='Please Enter The Country Name' onKeyDown={(e) => handelclick(e)} />
          <button onClick={() => handel()} className='searchBtn col-md-2 col-12 mx-0'>Search</button>
          <div className="w-100"></div>
          {!found && <Card />}
        </div>
      </div>
      <Themes />
    </div>
  );
}

export default App;
