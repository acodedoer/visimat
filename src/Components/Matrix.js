const Matrix = ({matrix, updateMatrix, name, visualise, operation, showSolution}) => {
  const handleChange = (e) =>{
    updateMatrix(e.target.value, e.target.dataset.i,e.target.dataset.j, name)
  }

    return(
      <table  border="1" cellPadding="0" cellSpacing="0">
        <tbody>
          {matrix.map((x,i)=>
            <tr key={`${i}`}>
              {x.map((y,j)=> name!=="answer"?
                <td style={{padding:"5px",textAlign:"center",backgroundColor: operation==3?name=="m1"?(i==visualise.question.i? `hsl(60, ${100 - 100/matrix[0].length*j}%, 50%)`:""):(j==visualise.question.j?`hsl(60, ${100 - 100/matrix.length*i}%, 50%)`:""): i==visualise.question.i && j == visualise.question.j? "red":""}}><input  data-i={i}  
                        data-j={j}
                        style={{all:"unset",width:"40px",backgroundColor:"#eaeaea"}} 
                        key={`${i}${j}`} 
                        maxLength={5} 
                        value={y}
                        onChange={handleChange}
                /></td>
                :
                <td  onClick ={()=>showSolution(i,j)} data-i={i} data-j={j} style={{width:"40px",textAlign:"center", cursor:"pointer",padding:"5px", backgroundColor:visualise.answer.i == i && visualise.answer.j == j?"red":""}} key={`${i}${j}`}> {y} </td>
                        
                )}
            </tr>
          )
          }
          </tbody>
      </table>
    )
}

export default Matrix;

