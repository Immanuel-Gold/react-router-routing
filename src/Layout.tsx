import { NavLink, Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="h-fit w-full flex flex-col">
      <nav className="h-[60px] w-full bg-[#111] flex justify-between items-center py-[8px] px-[12px]">
        <h2 className="text-[2.2rem] font-bold text-indigo-500">
          {" "}
          <NavLink to="/">RRV7</NavLink>
        </h2>

        <ul className="flex items-center gap-x-[26px] [&>a]:text-[1.3rem] [&>a]:font-bold [&>a]:text-[#f1f1f1] pr-[8px]">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/more">More</NavLink>
          <NavLink to="more/blogs/1">Blogs 1</NavLink>
          <NavLink to="more/help">Help</NavLink>
        </ul>
      </nav>

      <Outlet />
    </main>
  );
};

export default Layout;
