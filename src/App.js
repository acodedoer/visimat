import {useState, useEffect} from "react"
import Matrix from "./Components/Matrix";
import Paper from '@mui/material/Paper';
import SelectOperation from "./Components/SelectOperation";
import NumericInput from "react-numeric-input";
import TextField from '@mui/material/TextField';
import "./App.css";

function App() {
  const initialState = {m1:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], m2:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]], answer:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], solution:"", operation:1}
  const initialVisualStates = {selectedCell:{question:{i:null,j:null}, answer:{i:null,j:null}}}

  const [visualState, setVisualState] = useState(initialVisualStates);
  const [state, setState] = useState(initialState);

  const updateMatrix = (value, i , j, name) => {
    let matrix = [...state[name]];
    matrix[i][j] = parseInt(value) || matrix[i][j];
    
    setState({m1:name=="m1"?matrix:state.m1, m2:name=="m2"?matrix:state.m2, answer: performOperation(), solution:state.solution, operation:state.operation});
  }

  const setOperation = (op) => {
    setState({m1:state.m1, m2:state.m2, answer: state.answer, solution:state.solution, operation:op});
  }

  useEffect(() => {
    updateAnswer();
  }, [state.operation]);

  const updateAnswer = () =>{
    setState({m1:state.m1, m2:state.m2, answer: performOperation(), solution:state.solution, operation:state.operation});
  }

  const showSolution = (m, n) =>{
    setVisualState({selectedCell:{question:{i:m,j:n}, answer:{i:m,j:n}}});
    let solution = "";
    if(state.operation == 1){
      solution=`${state.m1[m][n]} + ${state.m2[m][n]} = ${state.m1[m][n] + state.m2[m][n]}`;
    }
    else if (state.operation == 2){
      solution=`${state.m1[m][n]} - ${state.m2[m][n]} = ${state.m1[m][n] - state.m2[m][n]}`; 
    }
    else if (state.operation == 3){
      let plus = " + ";
      let equalToAnswer = ` = ${state.answer[m][n]}`
      for(let i =0; i<state.m1[m].length; i++){
        solution += state.m1[m][i]+ " x " +state.m2[i][n]+ `${i<state.m1[m].length-1?plus:equalToAnswer}`;
      }
    }
    
    setState({m1:state.m1, m2:state.m2, answer: state.answer, solution:solution,operation: state.operation});
  }

  const performOperation = () => {
    switch (state.operation) {
      case 1:
        return addMatrices(state.m1,state.m2)
      case 2:
        return subtractMatrix(state.m1,state.m2)
      case 3:
        return multplyMatrices(state.m1,state.m2)
      default:
        throw new Error ('Inavlid operaion selected!');
        break;
    }
  }

  const addMatrices = (m1,m2) => {
    const matrix = [];
    for(let i =0; i<m1.length; i++){
      let row = [];
      for(let j = 0; j<m1[0].length; j++){
        row.push(m1[i][j] + m2[i][j]);
      }
      matrix.push(row);
    }
    return matrix;
  }

  const subtractMatrix = (m1,m2) => {
    const matrix = [];
    for(let i =0; i<m1.length; i++){
      let row = [];
      for(let j = 0; j<m1[0].length; j++){
        row.push(m1[i][j] - m2[i][j]);
      }
      matrix.push(row);
    }
    return matrix;
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
    <div className="App" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", flexWrap:"wrap", width:"100vw", height:"100vh"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", width:"100%"}}>
        <div style={{textAlign:"center"}}>
        <TextField
          id="filled-number"
          label="Row"
          type="number"
          size="small"
          
          defaultValue={4}
          style={{width:"64px"}}
        />

        <span style={{fontSize:"32px"}}>&#215;</span>

        <TextField
          id="filled-number"
          label="Col"
          type="number"
          defaultValue={4}
          size="small"
          style={{width:"64px"}}
        />
          <Matrix matrix={state.m1} name={"m1"} operation={state.operation} visualise={visualState.selectedCell} updateMatrix={updateMatrix} style={{flexBasis: "40%", flexShrink:0}}/>
        
        </div>
        <SelectOperation setOperation={setOperation} operation={state.operation}/>
        <Matrix matrix={state.m2} name={"m2"} operation={state.operation} visualise={visualState.selectedCell} updateMatrix={updateMatrix} style={{flexBasis: "40%", flexShrink:0}}/>
      </div>
      <Paper elevation={3} style={{padding:"16px", margin:"32px"}}>{state.solution}</Paper>
      <Matrix matrix={state.answer} visualise={visualState.selectedCell}  name={"answer"} operation={state.operation} showSolution={showSolution} updateMatrix={updateMatrix} style={{flexBasis: "40%", flexShrink:0}}/>
    </div>
  );
}

export default App;
