const Matrix = ({matrix, updateMatrix, name, visualise}) => {
  const handleChange = (e) =>{
    updateMatrix(e.target.value, e.target.dataset.i,e.target.dataset.j, name)
  }

    return(
      <div>
          {matrix.map((x,i)=>
            <div key={`${i}`} style={{display:"flex"}}>
              {x.map((y,j)=> 
                <input  data-i={i}  
                        data-j={j} 
                        style={{width:"30px",backgroundColor: name=="m1"?(i==visualise? `hsl(60, ${100 - 100/matrix[0].length*j}%, 50%)`:""):(j==visualise?`hsl(60, ${100 - 100/matrix.length*i}%, 50%)`:"")}} 
                        key={`${i}${j}`} 
                        maxLength={5} 
                        value={y} 
                        onChange={handleChange}
                />)}
            </div>
          )
          }
      </div>
    )
}

export default Matrix;

