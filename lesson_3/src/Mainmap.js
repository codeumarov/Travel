
import Main from "./Main";
import Images from '../src/image/Logo.png'
import '../src/Maincss.css'
function Mainmap() {

  const users = [
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2e-_4XHcpyiPJMI_kVqy5alUr2XyDPsUcmA&usqp=CAU',
      title: "Enjoy Beauty place in Bali City",
      day: 10,
      person: 8,
      review: 4.8,
      country: "Bali, indonesha",
      price: 1200,
    },
    {
      id: 2,
      img: "https://images.all-free-download.com/images/graphiclarge/frosty_winter_in_modern_city_6892181.jpg",
      title: "Enjoy Beauty place in Bali City",
      day: 10,
      person: 8,
      review: 4.8,
      country: "Bali, indonesha",
      price: 1200,
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFE_qfjgzxBpvQH6NGBMHkmPqj7wgJJLnP1BvLY5RRJMKd7Xld5SX6FM4o0-JYDEzmsA&usqp=CAU",
      title: "Enjoy Beauty place in Bali City",
      day: 10,
      person: 8,
      review: 4.8,
      country: "Bali, indonesha",
      price: 1200,
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuLId9xBcnSGBbTcAvspi0jb1_2r1wH9MDQGSeSz7rBq1QGvA52Zv8Dk_n02LyvTUyzU&usqp=CAU",
      title: "Enjoy Beauty place in Bali City",
      day: 10,
      person: 8,
      review: 4.8,
      country: "Bali, indonesha",
      price: 1200,
    },
    {
      id: 5,
      img: "https://img.freepik.com/premium-photo/modern-city-park-daytime-landscaped-with-greenery_1127-4712.jpg?w=360",
      title: "Enjoy Beauty place in Bali City",
      day: 10,
      person: 8,
      review: 4.8,
      country: "Bali, indonesha",
      price: 1200,
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdb5YLrG9w01bTH-qUuIer135wa1WQBD-Vk1oyWZZ38PRHMgw8Lde2Alzd0uF6ZMQH24E&usqp=CAU",
      title: "Enjoy Beauty place in Bali City",
      day: 10,
      person: 8,
      review: 4.8,
      country: "Bali, indonesha",
      price: 1200,
    },



  ]
  return (
    <div className="user-Container">
      <div className="users">
        
          {
            users.map((user) => (
              <Main key={user.id}>{user}</Main>
            ))
          }
       
      </div>
    </div>
  )
}
export default Mainmap
