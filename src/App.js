import {useState} from "react"
import Matrix from "./Components/Matrix";
function App() {

  const initialState = {m1:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], m2:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]], answer:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}
  const [state, setState] = useState(initialState);

  const updateMatrix = (value, i , j, name) => {
    let matrix = [...state[name]];
    matrix[i][j] = parseInt(value);
    console.log(matrix)
    setState({m1:name=="m1"?matrix:state.m1, m2:name=="m2"?matrix:state.m2, answer:name=="answer"?matrix:state.answer});
    console.log(state)
  }
  return (
    <div className="App" style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", width:"100vw"}}>
      <Matrix matrix={state.m1} name={"m1"} updateMatrix={updateMatrix} style={{flexBasis: "40%", flexShrink:0}}/>
      <Matrix matrix={state.m2} name={"m2"} updateMatrix={updateMatrix} style={{flexBasis: "40%", flexShrink:0}}/>
      <Matrix matrix={state.answer} name={"answer"} updateMatrix={updateMatrix} style={{flexBasis: "40%", flexShrink:0}}/>
    </div>
  );
}

export default App;
