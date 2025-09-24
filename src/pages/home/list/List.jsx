import './list.css'
import Header from '../../../components/header/Header'
import Navbar from '../../../navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../../components/searchItem/SearchItem'

function List () {

  // const location = useLocation();
  // const [destination]= useState(location.state.destination)
  // const [date,setDate]= useState(location.state.date)
  // const [openDate,setOpenDate]= useState(false)
  // const [options]= useState(location.state.options)

  const location = useLocation();
  const defaultState = location.state || {
  destination: '',
  date: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
  options: { adult: 1, children: 0, room: 1 },
};

const [destination] = useState(defaultState.destination);
const [date, setDate] = useState(defaultState.date);
const [openDate, setOpenDate] = useState(false);
const [options] = useState(defaultState.options);
  
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input placeholder={destination} type="text"/>
            </div>
            <div className='lsItem'>
              <label>Check-in Date </label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")}`} to {format(
                date[0].endDate,"MM/dd/yyyy")}</span>
              {openDate &&(
                <DateRange onChange={(item) => setDate([item.selection])} 
                minDate={new Date()}
              ranges={date}/>)}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>

              <div className='lsOptionItem'>
                <span className='lsOptionText'>Min Price <small>per night</small></span>
                <input type="number" className='lsOptionInput' />
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Max Price <small>per night</small></span>
                <input type="number" className='lsOptionInput'></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText' >Adult </span>
                <input type="number" min={1} className='lsOptionInput' placeholder={options.adult}></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Children</span>
                <input type="number" min={0} className='lsOptionInput' placeholder={options.children}></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Room</span>
                <input type="number" min={1} className='lsOptionInput' placeholder={options.room}></input>
              </div>
              </div>
            </div>
            <button className='searchlist'>Search</button>
          </div>
          <div className='listResult'>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
