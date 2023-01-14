import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import MailList from '../../../components/MailList/MailList'
import Navbar from '../../../navbar/Navbar'
import './hotel.css'

const Hotel = () => {

  const photos = [
    {
      src:"https://picsum.photos/500/500?random=41"
    },
    {
      src:"https://picsum.photos/500/500?random=42"
    },
    {
      src:"https://picsum.photos/500/500?random=43"
    },
    {
      src:"https://picsum.photos/500/500?random=44"
    },
    {
      src:"https://picsum.photos/500/500?random=45"
    },
    {
      src:"https://picsum.photos/500/500?random=46"
    },
  ];
  return (
    <div>
      <Navbar/>  
      <Header type="list"/>
      <div className='hotelContainer'>
      
        <div className='hotelWrapper'>
        <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAdress'>
         <FontAwesomeIcon icon={faLocationDot}/> 
            <span>Elton St 125 India</span>
          </div>
          <span className='hotelDistance'>
            Excellent Location - 500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over Rs.114 at this Property and get a free airport taxi 
          </span>
          <div className='hotelImages'>
             {photos.map(photos=>(
              <div className='hotelImgWrapper'>
                <img src={photos.src} alt="" className='hotelImg'/>
              </div>
             ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the heart of </h1>
              <p className='hotelDesc'>Manish_Booking is located in the heart of the historic center of Florence in an extremely characteristic, quite and lively area within short walk distance to all sites and is surrounded by the extraordinary beauty of churches, buildings, shops and monuments. Manish_Booking is part of a lovingly restored 1800 palace.</p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>Rs.945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
