import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome
        </h1>

        <p className="mt-4 text-gray-600">
          Sign in with your Google account.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;