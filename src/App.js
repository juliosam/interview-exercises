import { useEffect, useState } from "react";

function App() {
  
  const [count, setCount] = useState(0)
  const [geter, setGeter] = useState("")
  useEffect(()=>{fetcher()},[])
  useEffect(()=>{
    const interval = setInterval(()=>{setCount(count+1)},1000);
    return(()=>clearInterval(interval));
  });

  const [activityArray, setActivityArray] = useState([])

  const fetcher = async ()=>{
    const data = await fetch('https://www.boredapi.com/api/activity/')
    const getResult= await data.json()
    console.log(getResult)
    setGeter(getResult.activity)
    setActivityArray([...activityArray, getResult]) 
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
              <p key={activity.key}>{activity.activity}</p>
              <span> Category: {activity.type}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
