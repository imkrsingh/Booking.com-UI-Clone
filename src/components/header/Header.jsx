
import { faBed, faBowlFood, faCalendarDays, faCar, faPerson, faPlane, faTaxi, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1,
        }
    );

    const navidate= useNavigate()

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };


    const handleSearch= ()=>{
     navidate('/hotels', { state:{destination, date, options} })
    }

    return (
        <div className='header'>
            <div className={type==="list"?"headerContainer listMode": "headerContainer"}>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>

                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>

                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxis</span>
                    </div>

                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faBowlFood} />
                        <span>Food</span>
                    </div>

                </div>
                { type !== 'list' &&
                    <><h1 className='headerTitle'>Manish_Booking Hotels goes digital and we couldn’t be more excited!</h1>
                <p className='headerDesc'>Manish_Booking Hotels is a hotel search with an extensive price comparison. The prices shown come from numerous hotels and booking websites. This means that while users decide on Manish_Booking which hotel best suits their needs, the booking process itself is completed through the booking sites (which are linked to our website). By clicking on the “view deal” button, you will be forwarded onto a booking site where you can complete the reservation for the hotel deal found on Manish_Booking.</p>
                <button className='headerBtn'>Sign in / Register</button>

                <div className='headerSearch'>

                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are you going..." className="headerSearchInput" onChange={e=>setDestination(e.target.value)} name="search"></input>
                        <span className='headerSearchText'></span>
                    </div>

                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />}
                    </div>

                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchItem'>{`${options.adult} adult . ${options.children} children . ${options.room} room`} </span>
                        {openOptions && <div className='options'>
                            <div className='optionItem'>
                                <span className='optionText'>Adult</span>
                                <div className='optionCount'>
                                
                                    <button className='optionCounterButton' onClick={() => handleOption("adult", "d")}> - </button>
                                    <span className='optionCounterNumber'>{options.adult}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption("adult", "i")}> + </button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Children</span>
                                <div className='optionCount'>
                                    <button className='optionCounterButton' onClick={() => handleOption("children", "d")}> - </button>
                                    <span className='optionCounterNumber'>{options.children}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption("children", "i")}> + </button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Room</span>
                                <div className='optionCount'>
                                    <button className='optionCounterButton' onClick={() => handleOption("room", "d")}> - </button>
                                    <span className='optionCounterNumber'>{options.room}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption("room", "i")}> + </button>
                                </div>
                            </div>
                        </div>
                        }</div>

                    <div className='headerSearchItem'>
                        <button className='btn' onClick={handleSearch}>Search</button>
                    </div>
                </div></>}
                
            </div>
        </div>
        
    )
}

export default Header
