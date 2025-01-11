import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};
Blog.propTypes ={
    // missing parameter remove korar jonno
    blog:PropTypes.object.isRequired
}
export default Blog;