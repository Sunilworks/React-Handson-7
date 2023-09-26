import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../Slice/Slice';
import { useDispatch,} from 'react-redux';

function NewStudent() {

  // const index = useLocation().state.index;

  const dispatch = useDispatch();
  const Navi = useNavigate();

    const [info, setInfo] = useState({
      name : '',
      age : '',
      batch:'',
      course:''
})

const handleChange = (e) => {
  setInfo({...info,[e.target.name] : e.target.value})
}

const handleClick = () =>{
  dispatch(addStudent({info}))
  Navi('/student')
  console.log(info);
}
  return (
    <div className='edstu'>
    <h1>This is New Student Compo</h1>
    <label>Name: </label>
    <input type="text" name='name' placeholder='enter name'onChange={handleChange}/> <br />
    <label>Age :</label>
    <input type="number" name='age' placeholder='enter age' onChange={handleChange}/> <br />
    <label>Batch :</label>
    <input type="text" name='batch' placeholder='enter batch' onChange={handleChange}/> <br />
    <label>Course :</label>
    <input type="text" name='course' placeholder='enter course'onChange={handleChange}/> <br />
    <button onClick={() => Navi('/student')} style={{marginLeft : 620}}>Cancel</button>
    <button onClick={handleClick} style={{marginLeft : 620}}>Add</button>
    </div>
  )
}

export default NewStudent