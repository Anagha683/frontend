function Logos()
{
    return (
        <div style={{backgroundColor:"pink",color:"blue",display: "flex",flexDirection:'column',justifycontent:"space-between",alignItems:"center",width:"400px",height:"300px",border:"2px solid black",padding:50}}>
       
          <br></br>
          <h1>LOGIN</h1>
            <label>username</label>
            <input type="username"placeholder="Enter your username"/>
            <br></br>
             <label>Password</label>
            <input type="Password"placeholder="Enter your RePassword"/>
            <br></br>
               <label>RePassword</label>
            <input type="RePassword"placeholder="Enter your RePassword"/>
            <br></br>
              <button>Login</button>
              </div>
              );
}
export default Logos;