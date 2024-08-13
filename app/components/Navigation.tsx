import React from "react";

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
const Navigation = () => {
  return (
    <div className="flex justify-between p-4 mx-4">
      <div>Logo</div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <a href={item.path}>{item.title}</a>
        ))}
      </div>

      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navigation;
