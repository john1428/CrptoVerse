import { useState } from 'react'
// import { useUserContext } from '../../context/userContext';
import '../../css/index.css'

const LoginUser = () => {


    const [user,setuser] = useState({
        username:'',
        userPassword : ''

    });
    const [isAuth, setisAuth] = useState('');

    const handleUserChange = (e) =>{
        setuser({
            ...user,
            [e.target.name] : [e.target.value]
        })
        console.log(user);
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();

        setisAuth(true);

        true;
    }




  return (

    <div>

        {isAuth && <p>You are now logged in as {user.username}</p>}
        {!isAuth && 
            <div className="Auth-form-container">
            <form action="" onSubmit = {handleFormSubmit} className="Auth-form">
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>


                <div className='emaildiv'>
                    <label className='p-3'>User Name</label>
                    <input type="text" className='m-3 p-3' name="username" value={user.username} onChange={handleUserChange}/>
                </div>
                <div className='passworddiv'>
                    <label>Password</label>
                    <input type="password" className='m-3 p-3' name="userPassword"  value={user.userPassword} onChange={handleUserChange}/>
                </div>

                <button className='form-button'>Submit</button>

                </div>
            </form>
            </div>
            }
    </div>
  )
}

export default LoginUser
