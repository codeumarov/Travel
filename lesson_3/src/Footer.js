import Image from '../src/image/Logo.png'
import Twitter from '../src/image/Twiter.png'
import Beance from '../src/image/Behance.png'
import Ins from '../src/image/instagram.png'
import Vim from '../src/image/vimeo.png'
import Vector4 from '../src/image/Vector (4).png'
import tel from '../src/image/tel.png'
import clock from '../src/image/clock.png'
import manzil from '../src/image/manzil.png'
import '../src/Footercss.css'



function Footer() {
  return (
    <>
      <div className="footer_Container" style={{ backgroundColor: 'red' }}>
        <div className="footer_Content">
          <div className="footer_Cart">
            <div className="footer_title">
              <img src={Image}></img>
              <div>Explore</div>
            </div>
            <div className="paragrapx">Continually productize compelling dome packed with all Elated utilize website and creating supply next-generation</div>
            <div className="par">Follow Us On:</div>
            <div className="imgaes">
              <img src={Twitter}></img>
              <img id="m" src={Beance}></img>
              <img src={Ins}></img>
              <img id="m"src={Vim}></img>
              <img src={Vector4}></img>
            </div>
          </div>
          <div className='footer_Cart'>
            <div className="footer_titles">Tour Type</div>
            <div id="text">
              Adventure Tours Grouo Tour Seasonal Tours Relaxation Toure Family Friendly Tour
            </div>
          </div>
             <div className='footer_Cart'>
               <div className='footer_titles'>Contact info</div>
               <div className='footer_tel'>
                 <div><img id="tel_img" src={tel}></img></div>
                 <div>88130-589-745-6987 <div>+1655-456-523 </div></div>
               </div>
               <div className='footer_tel tell_2'>
                 <div id="tel_img"><img src={clock}></img></div>
                 <div>88130-589-745-6987 <div>+1655-456-523 </div></div>
               </div>
               <div className='footer_tel'>
                 <div><img id="tel_img" src={manzil}></img></div>
                 <div>88130-589-745-6987 <div>+1655-456-523 </div></div>
               </div>
             </div>
             <div className='footer_Cart'>
            <div className="footer_titles">Gallery</div>
            <div className="left">
               <div id="carts">hello</div>
               <div id="carts">hello</div>
               <div id="carts">hello</div>
            </div> 
            <div className="left">
               <div id="carts">hello</div>
               <div id="carts">hello</div>
               <div id="carts">hello</div>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer