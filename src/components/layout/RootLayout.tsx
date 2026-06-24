import Navbar from "../../components/layout/Navbar";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export default function RootLayout() {
  return (
    <>
      <Navbar></Navbar>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
