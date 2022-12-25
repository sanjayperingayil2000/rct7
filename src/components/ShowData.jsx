import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function ShowData() {
    const data=useSelector((state)=>state.student) 
    return (
    <>
        <thead>
        <tr>
        <th style={{width:"30%",textAlign:"left",padding:"15px",color:"red"}}>Name </th>
        <th style={{width:"15%",textAlign:"right",padding:"15px",color:"red"}}>Age </th>
        <th style={{width:"15%",textAlign:"right",padding:"15px",color:"red"}}>Course </th>
        <th style={{width:"20%",textAlign:"right",padding:"15px",color:"red"}}>Batch </th>
        <th style={{width:"20%",textAlign:"right",padding:"15px",color:"red"}}>Change </th>
        </tr>
        </thead>
        
        <tbody>
        {
        data.map((item,index)=>{
            return(
            <>
            <tr key={index}>
                {/* {item.id} */}
                <th style={{width:"30%",textAlign:"left",padding:"15px"}}>{item.name}</th>
                <th style={{width:"15%",textAlign:"right",padding:"15px"}}>{item.age} </th>
                <th style={{width:"15%",textAlign:"right",padding:"15px"}}>{item.batch}</th>
                <th style={{width:"20%",textAlign:"right",padding:"15px"}}>{item.course} </th>
                <th style={{width:"20%",textAlign:"right",padding:"15px"}}>
                <Link to="/edit" state={{ editId: item.id}} style={{textDecoration:"none"}} >Edit</Link> 
   
                </th>
            </tr>
            </>
            )
        }
        )
        }
        </tbody>
        {/* import React from 'react'import { useSelector } from 'react-redux'import { Link } from 'react-router-dom';import { studentUpdated } from '../features/StudentSlice';function ShowData() {const data=useSelector((state)=>state.student)// console.log(data);return (<div>Data is:{data.map((item,index)=>{return(<div key={index}>{item.Name}{item.Age} {item.Batch}{item.Course} </div>)})}</div>)}export default ShowData */}
    </>
)
}
export default ShowData
// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { studentUpdated } from '../features/StudentSlice';


// function ShowData() {
//     const navigate=useNavigate();
//     const data=useSelector((state)=>state.student)

//     // console.log(data);
//   return (
//     <div>Data is:
//         { 
//             data.map((item,index)=>{
//                 return(
//                     <div key={index}>{item.id},{item.Name}{item.Age} {item.Batch}{item.Course}  <span><button onClick={()=>{
//                         const id=item.id;
//                         navigate('/editstudent',{state:id});
//                         // console.log(id);
//                     }}>Edit</button></span> </div>
//                 )
//             })
           
//         }
//     </div>
//   )
// }

// export default ShowData
