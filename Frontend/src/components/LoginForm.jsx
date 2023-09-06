import "./style/loginForm.css";

function LoginForm() {
  return <>
  <div className="wrapper">

    <form action="/login" method="POST" >
      <input type="upload" />
      <button>Upload</button>
      <input type="button" value="submit" />
        
    </form>
  </div>
  
  
  </>;
}

export default LoginForm;
