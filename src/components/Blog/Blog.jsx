import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    // console.log(blog)
    const {title, cover, author, posted_date, author_img, reading_time, hashtags } =blog;

    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className="text-2xl">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
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