
import { Link } from "react-router-dom";
import errorImage from '../../Assets/404.jpg';

const Error404 = () => {
    return (
        <div className="error404">
            <img src={errorImage} alt="404 Error Robot" />
            <a href='https://www.freepik.com/vectors/server-error'>Server error vector created by storyset - www.freepik.com</a>
            <p>
                <Link to="/">Go Back Home</Link> <br />
                
            </p>
        </div>
    );
}

export default Error404;