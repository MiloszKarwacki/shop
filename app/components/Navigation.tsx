"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Navigation: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedInstatus = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsLoggedIn(loggedInstatus === "true");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <div className="flex justify-between p-4 bg-blue-400 fixed top-0 w-full">
      <div>
        <a href="/home">Logo</a>
      </div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <a key={item.title} href={item.path}>
            {item.title}
          </a>
        ))}
      </div>

      <div>
        <Link href="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
