function App(){
  
  function foe(){
    fetch ("http://localhost:5000/home")
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data)})
  }
  
  return(
    <>
    <button onClick={foe}>show data</button>
    </>
    

  )

}


export default App
 