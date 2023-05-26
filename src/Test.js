import React from 'react'

function Test() {
    let arr=[1,2,3,4];
  return arr.map ((res)=>{
    return(
         <span style={{color:"red",paddingLeft:"10px"}}>{res.date} {res.week} demo</span>
  );
});
}
  

//rfce--we get the code

export default Test



