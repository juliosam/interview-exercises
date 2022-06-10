import { useEffect, useState } from "react";

function App() {
  
  const [count, setCount] = useState(0)
  const [geter, setGeter] = useState("")
  useEffect(()=>{fetcher()},[])
  useEffect(()=>{
    const interval = setInterval(()=>{setCount(count+1)},1000);
    return(()=>clearInterval(interval));
  });
  //https://www.boredapi.com/api/activity/
  const [activityArray, setActivityArray] = useState([])
   
  const fetcher = async ()=>{
    const data = await fetch('https://api.imgflip.com/get_memes')
    const getResult= await data.json()
    const currentResult = getResult.data.memes[Math.floor(Math.random()*100)]
    setGeter(currentResult.name)
    setActivityArray([...activityArray, currentResult]) 
  }

  const incrementer = () =>{
    setCount( count + 1)
  }

  return (
    <div className="App">
      <button onClick={incrementer}>+</button>
      <p>{count}</p>
      <button onClick={fetcher}>activate me</button>
      <p className="newest-activity">{geter}</p>
      <ul>
        {activityArray.map(activity => {
          return (
            <li>
              <p key={activity.id} >{activity.name}</p>
              <img src={activity.url}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
