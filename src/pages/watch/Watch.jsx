import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation, Link } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src= {location.movie.video}
      />
      </Link>
      
    </div>
  );
}