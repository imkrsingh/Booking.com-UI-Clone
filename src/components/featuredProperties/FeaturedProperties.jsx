import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className='fpItem'>
      <div className='fp'>
        <img src='https://picsum.photos/500/500?random=13' alt='' className='fpImg' />
        <span className='fpName'>La Roulotte de Ciney<br/></span>
        <span className='fpCity'>Belgium, Ciney<br/></span>
        <span className='fpPrice'>starting from Rs2000</span>
        <div className='fpRating'>
        <button className='Rating'>8.2</button>
        <span>Excellent</span>
        </div>
      </div>
      <div className='fp'>
        <img src='https://picsum.photos/500/500?random=14' alt='' className='fpImg' />
        <span className='fpName'>MFC Erfurter Seen<br/></span>
        <span className='fpCity'>Australia, Gembrook<br/></span>
        <span className='fpPrice'>starting from Rs5000</span>
        <div className='fpRating'>
        <button className='Rating'>9.8</button>
        <span>Excellent</span>
        </div>
      </div>
      <div className='fp'>
        <img src='https://picsum.photos/500/500?random=15' alt='' className='fpImg' />
        <span className='fpName'>Carinya Park<br/></span>
        <span className='fpCity'>Italy, Santorso<br/></span>
        <span className='fpPrice'>starting from Rs3000</span>
        <div className='fpRating'>
        <button className='Rating'>8.8</button>
        <span>Excellent</span>
        </div>
      </div>
      <div className='fp'>
        <img src='https://picsum.photos/500/500?random=16' alt='' className='fpImg' />
        <span className='fpName'>Hotel Taj<br/></span>
        <span className='fpCity'>India, Mumbai<br/></span>
        <span className='fpPrice'>starting from Rs10000</span>
        <div className='fpRating'>
        <button className='Rating'>9.9</button>
        <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}
export default FeaturedProperties

