import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import "../App.css";

const MatrixElementInputTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
      padding: '0px',
      textAlign: 'center'
    }
});

const Matrix = ({matrix, updateMatrix, name, visualise, operation, showSolution}) => {
  const handleChange = (e) =>{
    console.log(e);
    updateMatrix(e.nativeEvent.data, e.target.dataset.i,e.target.dataset.j, name)
  }

    return(
       <table className='matrix'>
          <tbody>
          {matrix.map((x,i)=>
            <tr key={`${i}`}>
              {x.map((y,j)=> name!=="answer"?
                <td>
                  <MatrixElementInputTextField  
                    style={{width:"32px", backgroundColor: operation==3?name=="m1"?(i==visualise.question.i? `hsl(60, ${100 - 100/matrix[0].length*j}%, 50%)`:""):(j==visualise.question.j?`hsl(60, ${100 - 100/matrix.length*i}%, 50%)`:""): i==visualise.question.i && j == visualise.question.j? "red":""}}
                    value={y}
                    size="small" 
                    key={`${i}${j}`} 
                    onChange={(e)=>{updateMatrix(e.target.value, i,j, name)}}
                /></td>
                :
                <td  onClick ={()=>showSolution(i,j)} data-i={i} data-j={j} style={{width:"40px",textAlign:"center", cursor:"pointer",padding:"5px", backgroundColor:visualise.answer.i == i && visualise.answer.j == j?"red":""}} key={`${i}${j}`}> {y} </td>
                        
                )}
            </tr>
          )}
          </tbody>
        </table>
      )
          
}

export default Matrix;

