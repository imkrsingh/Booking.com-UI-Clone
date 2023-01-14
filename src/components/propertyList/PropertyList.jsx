import './propertyList.css'

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src='https://picsum.photos/320/240?random=5' alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Hotels</h1>
                <h2 className='desc'>233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src='https://picsum.photos/320/240?random=6' alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Apartments</h1>
                <h2 className='desc'>233 Apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src='https://picsum.photos/320/240?random=7' alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Resorts</h1>
                <h2 className='desc'>233 Resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src='https://picsum.photos/320/240?random=8' alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Villas</h1>
                <h2 className='desc'>233 Villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src='https://picsum.photos/320/240?random=9' alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Cabins</h1>
                <h2 className='desc'>233 Cabins</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src='https://picsum.photos/320/240?random=10' alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Holiday Homes</h1>
                <h2 className='desc'>233 Holiday Homes</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src='https://picsum.photos/320/240?random=12' alt='' className='pListImg'/>
            <div className='pListTitles'>
                <h1>Serviced Apartments</h1>
                <h2 className='desc'>233 Serviced Apartments</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList
