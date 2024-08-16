"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminPanel: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/login"); //jesli nie jest zalogowany przekieruj do strony logowania
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Panel Administracyjny</h1>

      <button
        className="my-4 bg-blue-500 rounded-3xl p-2 px-8"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminPanel;
