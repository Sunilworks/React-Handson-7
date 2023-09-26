import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editStudent } from '../Slice/Slice';

function EditStudent() {
    const index = useLocation().state.index;
    console.log(index);

    const dispatch = useDispatch();

    const data = useSelector((state) => state.Stu_Data);
    const Navi = useNavigate();

    const [info, setInfo] = useState({
      name : data[index].name,
      age : data[index].age,
      course:data[index].course,
      batch:data[index].batch
})

  const handleChange = (e) => {
    setInfo({...info,[e.target.name] : e.target.value})
  }

  const handleClick = () =>{
      dispatch(editStudent({info,index}))
      Navi('/student')
      console.log(info);
  }

  return (
    <div className='edstu'>
    <h1>This is Edit Student</h1>
    <label>Name: </label>
    <input type="text" name='name' placeholder='enter name' onChange={handleChange}/> <br />
    <label>Age :</label>
    <input type="number" name='age' placeholder='enter age' onChange={handleChange}/> <br />
    <label>Batch :</label>
    <input type="text" name ='batch'placeholder='enter batch' onChange={handleChange}/> <br />
    <label>Course :</label>
    <input type="text" name='course' placeholder='enter course'onChange={handleChange}/> <br />
    <button onClick={() => Navi('/student')} style={{marginLeft : 620}}>Cancel</button>
    <button onClick={handleClick} style={{marginLeft : 620}}>Update</button>
    </div>
  )
}

export default EditStudent