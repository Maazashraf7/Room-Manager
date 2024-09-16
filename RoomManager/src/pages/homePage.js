
import { Link} from "react-router-dom";

import Myimages from "../componenets/layout/images/myImage.jpg";

const HomePage = () => {
 


  return (
    
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Myimages}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Room Manager"
          />
          <div>
            <h1 className="text-5xl font-bold">ROOM MANAGER</h1>
            <p className="py-6">
              Welcome to monthly expenses of the room.
            </p>
            <Link to="/login" className="text-blue-500 hover:underline">
              LOGIN HERE
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default HomePage;
