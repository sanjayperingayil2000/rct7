import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import '../index.css'
import { useSelector,useDispatch } from 'react-redux'
import { studentUpdated } from '../components/StudentSlice';
import { useLocation } from 'react-router-dom';



export const Edit = () => {

    const {state}=useLocation();
    const {editId}=state;
    const dispatch=useDispatch();
    const navigate=useNavigate();
   
    const data=useSelector((state)=>state.student.filter((item)=>{return item.id===editId }).map((item)=>item))
    console.log(data)
    const sName=(data[0].name);
    const sAge=(data[0].age);
    const sCourse=(data[0].course);
    const sBatch=(data[0].batch);
 
    const [newName, setNewName] = useState(sName)
    const [newAge, setNewAge] = useState(sAge)
    const [newCourse, setNewCourse] = useState(sCourse)
    const [newBatch, setNewBatch] = useState(sBatch)

    const handleSubmit=(e)=>{
        e.preventDefault();
    if(newName && newAge && newCourse && newBatch ){
        dispatch(studentUpdated({
           id:editId, newName,newAge,newCourse,newBatch
        }))
        setNewName('');
        setNewAge('');
        setNewCourse('');
        setNewBatch('');
        navigate('/student')
    
    }
    
       }
    
    const cancel = () => {
        setNewName("");
        setNewAge("");
        setNewCourse("");
        setNewBatch("");
        navigate('/students');
    };

return (
    <>
    <div className='center'>
    <form action=''>
        <b>Name :&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder=' ' value={newName} onChange={(e) => {setNewName(e.target.value)}}  required/><br/><br/>
        <b>Age :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder=' ' value={newAge} onChange={(e) => {setNewAge(e.target.value)}}  required/><br/><br/>
        <b>Course :&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder=' ' value={newCourse} onChange={(e) => {setNewCourse(e.target.value)}}  required/><br/><br/>
        <b>Batch :&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <input type="text" className="" placeholder=' ' value={newBatch} onChange={(e) => {setNewBatch(e.target.value)}}  required/><br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" onClick={handleSubmit}>Submit</button>
        &nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" onClick={cancel}>cancel</button>
    
    </form>
    </div>

    </>
)
}

// return (
//     <>
//  <Header/>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor='Name'>Name</label>
//             <input type='text'
//                 value={Name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <label htmlFor='Age'>Age</label>
//             <input type='text'
//                 value={Age}
//                 onChange={(e) => setAge(e.target.value)}
//             />
//             <label htmlFor='Course'>Course</label>
//             <input type='text'
//                 value={Course}
//                 onChange={(e) => setCourse(e.target.value)}
//             />
//             <label htmlFor='Batch'>Batch</label>
//             <input type='text'
//                 value={Batch}
//                 onChange={(e) => setBatch(e.target.value)}
//             />
//             <input type='submit' value='Done' />
//         </form>
//     </>
//   )
// }

// export default EditData

