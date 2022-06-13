import { useLocation} from "react-router-dom";

const MemeRoute = () => {
   let location = useLocation();
   console.log(location)
    return ( 
        <div>
           <p >{location.state.name}</p>
           <img src={location.state.url}/> 
        </div>
     );

}
 
export default MemeRoute;