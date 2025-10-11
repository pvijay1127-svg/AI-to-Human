import LoginForm from '@/components/auth/LoginForm'

     export default function Login() {
       return (
         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
           <div className="max-w-md w-full">
             <div className="text-center mb-8">
               <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
               <p className="text-gray-600 mt-2">Sign in to your account</p>
             </div>
             <LoginForm />
           </div>
         </div>
       )
     }