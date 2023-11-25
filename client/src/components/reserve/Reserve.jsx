import {  faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import useFetch from '../../hooks/userFetch'
import { SearchContext } from '../../context/SearchContext'
import './reserve.css';

function Reserve({setOpen, hotelId}) {
    const [selectedRooms, setselectedRooms] = useState([])
    const {data, loading, error} = useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`);
    const {dates} = useContext(SearchContext)


    const handleSelect = (e)=>{
        const checked= e.target.checked;
        const value = e.target.value;
        setselectedRooms(
            checked 
            ? [...selectedRooms, value]
            : selectedRooms.filter(item => item !== value))
    }

    const getDatesInRage = (start,end) =>{
        const date = new Date(start).getTime();
    }

    const handleClick =(e)=>{

    }
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
                        {item.roomNumbers.map(roomNumber => (
                    <div className="room">
                            <label>{roomNumber.number}</label>
                            <input type="checkbox" value={roomNumber._id} onChange={handleSelect} />
                    </div>
                        ))}
                </div>
            ))}
            <button className='rButton' onClick={handleClick}>Reserve Now!</button>
        </div>
    </div>
  )
}

export default Reserve