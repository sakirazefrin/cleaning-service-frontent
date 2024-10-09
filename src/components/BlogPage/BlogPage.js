
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BlogPost from '../BlogPost/BlogPost';
import NavBar from '../Home/Navbar/NavBar';
import Footer from '../Shared/Footer/Footer';
import BlogCard from './BlogCard/BlogCard';

const BlogPage = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    //This PAge will SHow all The Blog Posts
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://expressclean.herokuapp.com/allBlog")
            .then(res => res.json())
            .then(data => {
                console.log(data.length)
                setServices(data)
            })
            .catch(err => console.log(err))

    }, [])
    console.log("This is BLOG and loggedInUser",loggedInUser)
    return (
        <div>
            <NavBar></NavBar>
            <section className="mx-5 pb-5">
                <div className="text-center py-5">
                    <h1>Welcome to Express-Clean Blog .</h1>
                    <h3>Stay Connected to New Technology</h3>
                </div>
                <div className="container my-5">
                    <div className="row d-flex justify-content-center my-2">
                        {
                            services.map(service => <BlogCard key={service._id} service={service}></BlogCard>)
                        }
                    </div>

                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default BlogPage;