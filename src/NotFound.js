import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page id not found</p>
            <Link to="/">Back to homepahe</Link>
        </div>
     );
}
 
export default NotFound;