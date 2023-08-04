import {  Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        <h2> Aqui vem o footer</h2>
      </footer>
    </>
  );
}
