import FormContainer from "../_components/registerPage/FormContainer"



const SignUpPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
       <div className="w-full md:w-3/5 lg:w-2/5 flex flex-col items-center">
       <h1 className="text-2xl lg:text-3xl font-black">Create a Free Account</h1>
         <FormContainer/>
       </div>
    
    </div>
  )
}

export default SignUpPage