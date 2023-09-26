import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Student() {
  const data = useSelector((state) => state.Stu_Data);
  console.log(data);
  const Navi = useNavigate();
  return (
    <>
      <div className="main">
        <div className="container">
          <h2>This is Student Page</h2>
          <button className="btn" onClick={() => Navi("/newStudent")}>Add New Student</button>
        </div>
        {
          <table className="students-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Batch</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.batch}</td>
                    <td>{item.course}</td>
                    <Link to="/editStudent" state={{ index }}>
                      <td>Edit</td>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    </>
  );
}

export default Student;
