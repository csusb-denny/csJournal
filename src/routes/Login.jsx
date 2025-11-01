import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Login() {
  const { login } = useAuth();
  return (
    <>
      <Navbar />
      <h1>Hello Login</h1>
      <button onClick={login}>Fake Login</button>
    </>
  );
}
