import './MailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, save money</h1>
      <span className='mailDesc'>Sign up and we'll send the best deals to you</span>
      <div className='mailInputContainer'>
        <input type='text' placeholder='Please Enter Your Email' className='mailtext'/>
        <button className='signUp'>Sign up</button>
      </div>
    </div>
  )
}

export default MailList
