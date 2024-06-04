import { LoginForm } from "./login-form";

export default function Login() {
  return (
    <div className="min-h-screen" >
      <h1 className="text-2xl font-semibold text-center">Login</h1>
      <div className="flex justify-center ">
        <LoginForm />
      </div>
    </div>
  );
}
