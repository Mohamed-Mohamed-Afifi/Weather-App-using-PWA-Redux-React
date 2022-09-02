import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {
    const data = useSelector(state => state.Fdata.data)
    return (
        <div className='card col-md-6 col-12 d-flex justify-content-center align-items-center my-4 py-4'>
            <div className='d-flex  justify-content-center align-items-center'>
                <h5 className='state'>{data.weather[0].description}</h5>
                <sup><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather' width='50px' /></sup>

            </div>
            <h1 className='temp'>Temp</h1>
            <div className='d-flex my-4'>
                <h1 className='temp-deg'>{Number.parseInt(data.main.temp)}</h1>
                <sup className='temp-unit'>&deg;C</sup>
            </div>
        </div>
    )
}

export default Card