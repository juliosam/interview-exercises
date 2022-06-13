import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  
  const [count, setCount] = useState(0);
  const [geter, setGeter] = useState("");
  const [allList, setAllList] = useState([]);
  useEffect(()=>{fetcher()},[]);
  useEffect(()=>{
    const interval = setInterval(()=>{setCount(count+1)},1000);
    return(()=>clearInterval(interval));
  });
  
  const [activityArray, setActivityArray] = useState([])

  const fetcher = async ()=>{
    const data = await fetch('https://api.imgflip.com/get_memes')
    const getResult= await data.json()
    const currentResult = getResult.data.memes[Math.floor(Math.random()*100)]
    setGeter(currentResult.name)
    setActivityArray([...activityArray, currentResult]) 
    setAllList(getResult.data.memes)
  }

  const incrementer = () =>{
    setCount( count + 1)
  }

  return (
    <div className="App">
      <nav> 
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <button onClick={incrementer}>+</button>
      <p>{count}</p>
       <ol>
        {allList.map(meme=>{ 
          return(
          <li className="memelist" >
            <Link style={{fontSize: "12px"}} to="/memeRoute" meme={meme}>{meme.name}</Link>
          </li>)
        })}
      </ol> 
      <button onClick={fetcher}>activate me</button>
      <p className="newest-activity">{geter}</p>
      <ul>
        {activityArray.map(activity => {
          return (
            <li key={activity.id}>
              <p >{activity.name}</p>
              <img src={activity.url}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
