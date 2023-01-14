import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
       <img src="https://picsum.photos/500/500?random=3" alt="" className="featuredImg"/>
       <div className="featuredTitle">
        <h1>India</h1>
        <h2>157 Properties</h2>
       </div>
    </div>
    <div className="featuredItem">
       <img src="https://picsum.photos/500/500?random=2" alt="" className="featuredImg"/>
       <div className="featuredTitle">
        <h1>USA</h1>
        <h2>129 Properties</h2>
       </div>
    </div>
    <div className="featuredItem">
       <img src="https://picsum.photos/500/500?random=1" alt="" className="featuredImg"/>
       <div className="featuredTitle">
        <h1>England</h1>
        <h2>143 Properties</h2>
       </div>
    </div>
    </div>
  )
}

export default Featured
