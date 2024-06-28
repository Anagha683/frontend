import { useState } from 'react';
import{useNavigate} from "react-router-dom";
import axios from "axios";
export default function Reg() {
  const navigate=useNavigate();
  const [username,setName] = useState(0);
  const[email,setEmail]=useState(0);
 const[password,setPassword]=useState(0);
 const[repassword,setRePassword]=useState(0);
 const[result,setResult]=useState(0);
 const[error,setError]=useState(false);
function handleSubmit()
{
if(password==repassword){
  setResult({username,email,password,repassword});
  setError(false);
  //navigate('/logos');
  axios.post('http://localhost:5000/register',{
    username,
    email,
    
    password,repassword
  });

  }

else{
  setError(true);
  navigate('/error');
}
}
  function handleChange1(e) 
  {
    setName(e.target.value)
  }

  function handleChange2(e) {
    setEmail(e.target.value)
  }
   function handleChange3(e) {
    setPassword(e.target.value)
  }
   function handleChange4(e) {
    setRePassword(e.target.value)
  }
  return(
    <>
    <div style={{backgroundColor:'pink',display:'flex',flexDirection:'column',width:'400px',margin:'50px',border:'2px solid blue',borderRadius:10,padding:50}}>
      <h1>REGISTER</h1>
   <input type="Username" placeholder="Enter your Username" onChange={handleChange1}/>
   <label>email</label>
   <input type="Email" placeholder="Enter your Email" onChange={handleChange2}/>
   <label>password</label>
   <input type="password" placeholder="Enter your password" onChange={handleChange3}/>
   <label>repassword</label>
   <input type="repassword" placeholder="Enter your repassword" onChange={handleChange4}/>
   {error==true?<p>you must enter all fields</p>:''}
  <button onClick={handleSubmit}>
    signup
   </button>
   </div>
  <p>data:{result.username} &nbsp;{result.email} &nbsp;{result.password} &nbsp;{result.repassword}</p>
   </>
  );
}
