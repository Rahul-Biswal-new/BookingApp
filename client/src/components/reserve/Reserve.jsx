import {  faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../../hooks/userFetch'

function Reserve({setOpen, hotelId}) {
    const {data, loading, error} = useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`);
  return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={ () => setOpen(false)} />
            <span>Select your rooms: </span>
            {data.map(item => (
                <div className="rItem" key={item._id}>
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax"> Max People: <b> {item.maxPeople} </b> </div>
                        <div className="rPrice">{item.price}</div>
                    </div>
                    <div className="room">
                        {item.roomNumbers.map(roomNumber => (
                            <label>{roomNumber.number}</label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reserve