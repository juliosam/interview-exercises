
const MemeRoute = ({meme}) => {

    return ( 
        <di>
           <p >{meme.name}</p>
           <img src={meme.url}/>
        </di>
     );

}
 
export default MemeRoute;