const Matrix = ({matrix, updateMatrix, name, visualise, operation, showSolution}) => {
  const handleChange = (e) =>{
    updateMatrix(e.target.value, e.target.dataset.i,e.target.dataset.j, name)
  }

    return(
      <div>
          {matrix.map((x,i)=>
            <div key={`${i}`} style={{display:"flex"}}>
              {x.map((y,j)=> name!=="answer"?
                <input  data-i={i}  
                        data-j={j}
                        style={{width:"30px",backgroundColor: operation==3?name=="m1"?(i==visualise.i? `hsl(60, ${100 - 100/matrix[0].length*j}%, 50%)`:""):(j==visualise.j?`hsl(60, ${100 - 100/matrix.length*i}%, 50%)`:""): i==visualise.i && j == visualise.j? "red":""}} 
                        key={`${i}${j}`} 
                        maxLength={5} 
                        value={y} 
                        onChange={handleChange}
                />
                :
                <div  onClick ={()=>showSolution(i,j)} data-i={i} data-j={j} style={{width:"30px",borderStyle: "solid"}} key={`${i}${j}`}> {y} </div>
                        
                )}
            </div>
          )
          }
      </div>
    )
}

export default Matrix;

