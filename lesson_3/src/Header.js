import Image from './image/Logo.png'
import './Headercss.css'
function Header(){
  return(
    <>
       <div className="Container">
         <div className="content">
           <div className="nav-left">
             <img src={Image}></img>
             <div className='title'>Explore</div>
           </div>
             <div className="nav-right">
             <ul>
               <li><a href="">Home</a></li>
               <li><a href="">Tours</a></li>
               <li><a href="">Hotel</a></li>
               <li><a href="">Gallery</a></li>
               <li><a href="">Pages</a></li>
               <li><a href="">Blog</a></li>
               <li><a href="">Contact</a></li>
               <li><a href="">Login</a></li>
               <li><a href=""  id="sign">Sign Up</a></li>
               
             </ul>
             </div>
         </div>
       </div>
    </>
  )
}

export default Header