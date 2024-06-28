import { useState } from 'react';
import{useNavigate} from "react-router-dom";
import axios from "axios";
export default function Login() {
  const navigate=useNavigate();
  const[username,setUsername]=useState(0)

  const[email,setEmail]=useState(0);
 const[password,setPassword]=useState(0);
 const[repassword,setRePassword]=useState(0);
 const[result,setResult]=useState(0);
 const[error,setError]=useState(false);
 const [output, setOutput] = useState('');

async function handleSubmit()
{
  // const minPasswordLength=4;
  // if(password.length==repassword.Length)
  if(password==repassword){
    setResult({email,password,repassword});
    setError(false);
    //navigate('/login');
    const response = await  axios.post('http://localhost:5000/login',{
      username,
      email,
      password
    });
    console.log(response.data)
    if(response.data == 'email not found') {
      setError(true)

    } else { setOutput('welcome' + response.data.username)
    }
  
  
    }
  
  else{
    setError(true);
    navigate('/error');
  }
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
  
    <div style={{backgroundColor:"pink",color:"blue",display: "flex",flexDirection:'column',justifycontent:"space-between",alignItems:"center",width:"400px",height:"300px",border:"2px solid black",padding:50}}>
  
      <h1>LOGIN</h1>
      <label>Username</label>
      <input type="Username" placeholder="Enter your username" onChange={handleChange2}/>
     <label>Email</label>
   <input type="Email" placeholder="Enter your Email" onChange={handleChange2}/>
   <label>password</label>
   <input type="password" placeholder="Enter your password" onChange={handleChange3}/>
   <label>repassword</label>
   <input type="repassword" placeholder="Enter your repassword" onChange={handleChange4}/>
   {error==true?<p>password do not match!</p>:''}
   <button onClick={handleSubmit}>
   login
   </button>
   <p>data:{output}</p>
   </div>
   
  );
}
