import React, { useEffect, useState } from 'react';
import './index.css';
import UpperText from './UpperText';
import Navbar from './Navbar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Profile from './Profile';
import Pagination from './Pagination';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [counter, setCounter] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${counter}`).then((result) => {
      result.json().then((response) => {
        setData(response.data)
      })
    })
  }, [counter])
  const [active, setActive] = useState(null);

  return (
    <div className="App_final" >
      <UpperText />
      <Navbar /><br /><br />
      {
        data && data.map((item) =>
          <>
            <div className="avatar_name_email">
              <div className="users" key={data.id}>
                <img id="img" className="avatar" style={{ borderRadius: "80px", marginLeft: "-10px", cursor: "pointer", width: "90px", marginBottom: "5px" }}
                  src={item.avatar} alt="avatar"

                  //when hover on image this will run
                  onMouseOver={() => setActive(item.id)}
                  onMouseLeave={() => setActive(null)} /><br /><br />

                {
                  active && (active === item.id) && (
                    <div>
                      <Profile item={item} />
                    </div>
                  )
                }
                <div className="name_email">
                  <h2 style={{ fontFamily: "Cambria", fontSize: "15px" }}>
                    {item.first_name} {"   "}{item.last_name}
                  </h2><br />
                  <p style={{ fontFamily: "Cambria" }}>{item.email}</p>
                </div>
              </div>


              <div className="select-field">
                <div className="selection">
                  {(item.id === 1) && (
                    <div className="owner_status" style={{ color: "#32e71a" }}>Active</div>
                  )}
                  {(item.id !== 1) && (
                    <select className="select">
                      <option value="Green">Active</option>
                      <option value="Black">Inactive</option>
                    </select>
                  )}

                  {(item.id === 1) && (
                    <div className="owner_status" > Owner </div>
                  )}
                  {(item.id !== 1) && (
                    <select className="select">
                      <option value="Green">Owner</option>
                      <option value="Black">Manager</option>
                      <option value="Black">Read</option>
                    </select>
                  )}

                  {(item.id === 1) && (
                    <span className="lock" >
                      <LockOutlinedIcon />
                    </span>
                  )}
                  {(item.id !== 1) && (
                    <span className="delete" >
                      <DeleteForeverOutlinedIcon />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </>
        )
      }
      <button className="save_button"> Save </button><br /><br />
      <Pagination setCounter={setCounter} /><br />
    </div>
  );
}
export default App;