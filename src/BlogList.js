const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    return ( 
        <div className="blog-list">
             {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{title}</h2>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default BlogList;