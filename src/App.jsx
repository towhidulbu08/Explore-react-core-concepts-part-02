
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'


function App() {
    
    function handleClick(){
      alert('button clicked')
    }

    const handleClick2=()=>{
      alert('button click2')
    }

    const addToFive=(n)=>{
      alert(n+5);
    }

  return (
    <>
      
      <h3>React Core Concepts Part 02</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{
        alert('third clicked')
      }}>Third</button>

      {/* vaziyla */}
      <button onClick={()=> addToFive(3)}>Four</button>
      
      
    </>
  )
}

export default App
