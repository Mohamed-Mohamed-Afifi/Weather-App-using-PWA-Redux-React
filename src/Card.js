import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
    const data = useSelector(state => state.Fdata.data)
    console.log(new Date(data.dt * 1000 + (data.timezone * 1000)))
    return (
        <div className='card col-md-4 col-12 d-flex justify-content-center align-items-center my-4 py-4'>
            <div className='d-flex  justify-content-center align-items-center'>
                <h5 className='state'>{data.weather[0].description}</h5>
                <sup><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} width='50px' /></sup>

            </div>
            <h1 className='temp'>Temp</h1>
            <div className='d-flex my-4'>
                <h1 className='temp-deg'>{Number.parseInt(data.main.temp)}</h1>
                <sup className='temp-unit'>&deg;C</sup>
            </div>
            <div className='d-flex justify-content-between col-12'>
                <div>
                    <FontAwesomeIcon icon={faGaugeHigh} className='wind-icon my-2' />
                    <h5 className='wind'>{data.wind.speed} M/h</h5>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGaugeHigh} className='wind-icon my-2' />
                    <h5 className='wind'>{data.wind.speed} M/h</h5>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGaugeHigh} className='wind-icon my-2' />
                    <h5 className='wind'>{data.wind.speed} M/h</h5>
                </div>
            </div>
        </div>
    )
}

export default Card