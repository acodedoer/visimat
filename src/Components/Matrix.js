const Matrix = ({matrix, updateMatrix, name}) => {
  const handleChange = (e) =>{
    updateMatrix(e.target.value, e.target.dataset.i,e.target.dataset.j, name)
  }
  console.log(matrix)
    return(
      <div>
          {matrix.map((x,i)=>
            <div key={`${i}`} style={{display:"flex"}}>{x.map((y,j)=> <input data-i={i} data-j={j} style={{width:"30px"}} key={`${i}${j}`} maxLength={5} value={y} onChange={handleChange}/>)}</div>
          )
          }
      </div>
    )
}

export default Matrix;

