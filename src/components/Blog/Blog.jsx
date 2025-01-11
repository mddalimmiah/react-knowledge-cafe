import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookmark}) => {
    // console.log(blog)
    const {title, cover, author, posted_date, author_img, reading_time, hashtags } =blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8 mt-4 rounded-lg' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-14 ' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className="text-2xl">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=' flex space-x-3'>
                    <span>{reading_time} read</span>
                    <button onClick={() => handleAddToBookmark(blog)}
                    className='text-2xl text-red-400'>
                        <FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-8">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mx-3'><a href="">#{hash}</a></span>)
                }
            </p>

        </div>
    );
};
Blog.propTypes ={
    // missing parameter remove korar jonno
    blog:PropTypes.object.isRequired
     
}
export default Blog;