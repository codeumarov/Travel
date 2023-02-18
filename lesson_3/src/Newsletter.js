import './Newslettercss.css'

function Newsletter(){
  return (
    <>
       <div className="container-news">
         <div className="content-news">
           <div className="title-news">Sign Up For Our Newslatter</div>
           <div className="inp-news">
             <input className="inp" placeholder='Enter your e-mail here'></input>
             <button className="btn">Subscript Now</button>
           </div>
         </div>
       </div>
    </>
  )
}

export default Newsletter