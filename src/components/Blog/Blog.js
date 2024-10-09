import React, { useEffect, useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';

const Blog = () => {

    //This PAge will SHow all The Blog Posts
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://expressclean.herokuapp.com/allBlog")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <div>
            {/* <NavBar></NavBar> */}
        <section className="m-5 pb-5">
            <div className="text-center my-5 py-5">
                <h1>Our Blog Posts</h1>
            </div>
            <div className="container my-5">
                <div className="row d-flex justify-content-center my-2">
                    {
                        services.map(service => <BlogPost key={service._id} service={service}></BlogPost>)
                    }
                </div>

            </div>
        </section>
        </div>
    );
};

export default Blog;