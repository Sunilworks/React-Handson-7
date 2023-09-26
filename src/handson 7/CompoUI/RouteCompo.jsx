
import React from 'react'
import { NavLink, Route ,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import NewStudent from './NewStudent'
import EditStudent from './EditStudent'

function RouteCompo() {
  return (
    <>
    <BrowserRouter>
    <nav className="main-nav">
      <div className="Nav">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/student">STUDENT</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
      </nav>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/newStudent' element={<NewStudent/>}></Route>
        <Route path='/editStudent' element={<EditStudent/>}></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}


export default RouteCompo