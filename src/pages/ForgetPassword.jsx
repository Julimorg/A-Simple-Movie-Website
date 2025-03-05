import { getAuth, sendPasswordResetEmail } from "../../auth";  

function PasswordReset() {  
  const auth = getAuth();  

  const handleResetPassword = (email) => {  
    sendPasswordResetEmail(auth, email)  
      .then(() => {  
        // Password reset email sent!  
        console.log("Password reset email sent!");  
      })  
      .catch((error) => {  
        const errorCode = error.code;  
        const errorMessage = error.message;  
        console.error("Error sending password reset email:", errorCode, errorMessage);  
      });  
  };  

  return (  
    <div>  
      <button onClick={() => handleResetPassword("user@example.com")}>  
        Reset Password  
      </button>  
    </div>  
  );  
}  

export default PasswordReset; 