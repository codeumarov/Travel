import Image from '../src/image/Vector.png'
import Image1 from '../src/image/Vector (1).png'
import Image3 from '../src/image/Vector (2).png'
import Image2 from '../src/image/people.png'
import '../src/Maincss.css'

function Main(props) {
  console.log(props)
  return (
    <>
      <div className='main-Container'>
        <div className="main-Content" >
          <img style={{ width: 424, height: 350, borderRadius: '14px 14px 0 0', boxShadow: '0px 6px 24px #E4E2EE'}} src={props.children.img}></img>
          <div className="title">{props.children.title}</div>
          <div className="person">
            <div><img className="Image" src={Image}></img>{props.children.day}  Day's  <img className="Image2" src={Image2}></img> {props.children.person}  person <img className="Image1" src={Image1}></img>{props.children.review} (2.4k Review)</div>
            <div  className="main_Bottom">
               <div className="country"><img className="Image3" src={Image3}></img>{props.children.country}</div>
               <div className="price">${props.children.price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Main



{/* <div className='mainContent'>
            <div className="mainTop">
               <img style={{ width: 424, height: 350 }} src={props.children.img}></img>
             </div>
             <div className="mainBottom">
               <div>{props.children.id} {props.children.title}
              <div><img src={Image}></img> {props.children.day} Day <img src={Image2}>
              </img> {props.children.person} perosn
                <img src={Image1}></img> {props.children.review} (2.5k Review)</div>
              <div></div>
              <div><img src={Image3}></img> {props.children.day} {props.children.country} </div>
               </div>
             </div>
            </div> */}