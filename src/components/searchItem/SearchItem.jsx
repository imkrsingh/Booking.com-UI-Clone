import { sq } from 'date-fns/locale'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src='https://picsum.photos/500/500?random=20' alt='' className='siImg'/>
        <div className='siDesc'>
          <h1 className='siTitle'>Tower Street Apartment</h1>
          <span className='siDistance'>500m from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>
            Studio Apartment with Air Conditioning
          </span>
          <span className='siFeatures'>
            Entire studio * 1 bathroom *21m sq 1full bed
          </span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancellOpSubtitle'>
            You can cancel later, so luck in this great price today!
          </span>
        </div>
        <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailTexts'>
                <span className='siPrice'>
                    Rs. 1236
                </span>
                <span className='siTaxOp'>
                    Includdes taxes and fees
                </span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>  
  )
}

export default SearchItem
