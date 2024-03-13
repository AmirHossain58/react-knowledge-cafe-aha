// import propTypes from 'prop-types'
// import React from 'react';
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({blog,handleAddRToBookmark,handleMarkAsRead}) => {
    const {title,cover,reading_time,posted_date,author_img,author,hashtags }=blog
    return (
        <div className="space-y-3 mb-20">
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between  items-center">
                <div className="flex gap-5">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={()=>handleAddRToBookmark(blog)} className="ml-2 text-red-600"><CiBookmarkPlus></CiBookmarkPlus></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) =><span key={idx}><a>#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};
// Blog.propTypes = {
//     blog: PropTypes.object.isRequired
// }
export default Blog;