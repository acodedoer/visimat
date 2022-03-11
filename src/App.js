import {useState} from "react"
import Matrix from "./Components/Matrix";
function App() {
  const initialState = {m1:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], m2:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]], answer:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}
  const initialVisualStates = {selectedCell:{i:1,j:3}}

  const [visualState, setVisualState] = useState(initialVisualStates);
  const [state, setState] = useState(initialState);

  const updateMatrix = (value, i , j, name) => {
    let matrix = [...state[name]];
    matrix[i][j] = parseInt(value);
    setState({m1:name=="m1"?matrix:state.m1, m2:name=="m2"?matrix:state.m2, answer: multplyMatrices(state.m1, state.m2)});
  }


  const multplyMatrices = (m1, m2) =>{
    const matrix = []
    for(let i = 0; i<m1.length; i++){
      let row = [];
      for (let j = 0; j<m2[0].length; j++){
        let cell = 0;
        m1[i].forEach((num,index) => {
          cell+=num *m2[index][j];
        });
        row.push(cell);
      }
      matrix.push(row);
    }
    return matrix;
  }

  return (
    <div className="App" style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", width:"100vw"}}>
      <Matrix matrix={state.m1} name={"m1"} visualise={visualState.selectedCell.i} updateMatrix={updateMatrix} style={{flexBasis: "40%", flexShrink:0}}/>
      <Matrix matrix={state.m2} name={"m2"} visualise={visualState.selectedCell.j} updateMatrix={updateMatrix} style={{flexBasis: "40%", flexShrink:0}}/>
      <Matrix matrix={state.answer} name={"answer"} updateMatrix={updateMatrix} style={{flexBasis: "40%", flexShrink:0}}/>
    </div>
  );
}

export default App;
