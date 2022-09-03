import React from 'react'
import Colorbtn from './Colorbtn'
import './styles/themes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
const Themes = () => {
    const handelClick = (e) => {
        e.currentTarget.parentNode.parentElement.classList.toggle('show')
        console.log(e.currentTarget.parentNode.parentElement.classList)
    }
    return (
        <>
            <div className='theme-menu hide col-2'>
                <div className='container py-4'>
                    <button className='theme-btn' onClick={(e) => handelClick(e)}>
                        <FontAwesomeIcon icon={faGear} />
                    </button>
                    <h5>Please Select the Color</h5>
                    <Colorbtn />
                </div>
            </div>
        </>
    )
}

export default Themes