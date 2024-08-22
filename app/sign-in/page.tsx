import LoginForm from "../_components/loginPage/loginpage/LoginForm";





export default function SignInPage(){
    return (
        <div className="w-full min-h-screen flex justify-center items-start p-24">
        <div className="w-full md:w-3/5 flex flex-col items-center">
           <LoginForm/>
        </div>
     
     </div>
    )
}