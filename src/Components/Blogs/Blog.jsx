// import React from 'react'
import './style.css'

export default function Blogs(props) {

    const { title, desc } = { ...props };

    return (

        <div className="blog-card">
            <h5>{title}</h5>
            <p className="py-4">{desc}</p>
            <a href='#'>Read More</a>
        </div>
    )
}
