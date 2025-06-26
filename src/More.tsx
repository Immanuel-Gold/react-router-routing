import { Outlet } from "react-router";

const More = () => {
  return (
    <main className="p-[8px]">
      <h2 className="text-[2.4rem] font-bold p-[22px]">More</h2>
      <Outlet />
    </main>
  );
};

export default More;
