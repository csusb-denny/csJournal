import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function AppPage() {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar />
      <h1>Hello App (Protected)</h1>
      <p>Welcome, {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
