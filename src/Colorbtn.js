import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAppClass } from './Redux/ColorSlice';

const Colorbtn = () => {
    const colors = useSelector(state => state.color.colorData)
    const dispatch = useDispatch();
    //Custom app class and select active color
    const handelclr = (e) => {
        let childs = e.target.parentNode.childNodes;
        for (let i = 0; i < childs.length; i++) {
            childs[i].classList.remove('active')
        }
        e.target.classList.add('active')
        window.localStorage.setItem('color', `${e.target.dataset.color.slice('1')}`)
        dispatch(setAppClass(window.localStorage.getItem('color')))
    }
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {
                colors.map((el, ind) => (
                    <button data-color={el} key={ind} className='Color-btn mx-md-2 col-md-1' onClick={(e) => handelclr(e)} style={{ background: `${el}` }}></button>
                ))
            }
        </div>
    )
}

export default Colorbtn