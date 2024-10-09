import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Blog from '../../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/NavBar';
import OurServices from '../OurServices/OurServices';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';
// import Datetime from 'react-datetime';
// import "react-datetime/css/react-datetime.css";

const Home = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    return (
       <section>
           <div>
               <Header></Header>
               <OurServices></OurServices>
               <Team></Team>
               <Testimonial></Testimonial>
               <Blog></Blog>
               <Footer></Footer>
           </div>
       </section>
    );
};

export default Home;