import { createSlice } from "@reduxjs/toolkit";
import Student from './Data'

const StudentSlice=createSlice({
    name:'students',
    initialState:Student,
    reducers:
    {
        AddStudent:(state,action)=>{state.push(action.payload);},
        studentUpdated:(state,action)=>{
            const {id,name,age,course,batch}=action.payload;
            const exsitingStudent=state.find((user)=>user.id===id)
            if(exsitingStudent){
                exsitingStudent.name=name;
                exsitingStudent.age=age;
                exsitingStudent.course=course;
                exsitingStudent.batch=batch;
            }
        }

    }
    
}
)

export default StudentSlice.reducer;
export const {AddStudent,studentUpdated} = StudentSlice.actions;