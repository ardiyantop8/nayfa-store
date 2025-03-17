import { useRouter } from "next/router";
import LoginForm from "@/components/template/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (data) => {
    console.log("Login Data:", data);
    // Simulasi login sukses
    if (data.username === "admin" && data.password === "password") {
      alert("Login berhasil!");
      router.push("/dashboard"); // Redirect ke dashboard
    } else {
      alert("Username atau password salah!");
    }
  };

  return <LoginForm onSubmit={handleLogin} />;
}