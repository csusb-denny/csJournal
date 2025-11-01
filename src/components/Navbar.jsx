import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: 12 }}>Home</Link>
      <Link to="/login" style={{ marginRight: 12 }}>Login</Link>
      <Link to="/signup" style={{ marginRight: 12 }}>Signup</Link>
      <Link to="/app">App</Link>
    </nav>
  );
}
