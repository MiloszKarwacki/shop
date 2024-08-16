"use client";
import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  login: string;
  password: string;
  role: string;
}

const LoginPage: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/users.json");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.login === login && user.password === password
    );

    if (user) {
      // Ustawienie stanu zalogowania w localStorage
      localStorage.setItem("isLoggedIn", "true");
      if (user.role === "admin") {
        router.push("/adminPanel");
      } else {
        router.push("/userPanel");
      }
    } else {
      setError("Invalid login or password");
    }
  };

  //****************************
  //nie działa :(( nie wiem czemu
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  // **************************

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col bg-blue-300 p-4 h-1/2 w-1/2 justify-center items-center rounded-2xl">
        <h1 className="text-3xl my-4">Login</h1>
        <InputField
          label="Login"
          placeholder="Enter your login"
          width="1/2"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <InputField
          label="Password"
          placeholder="Enter your password"
          width="1/2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
