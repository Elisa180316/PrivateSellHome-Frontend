import { Outlet } from "react-router-dom";
import  useSession  from '../hook/useSession';
import Home from "../pages/Home";

const ProtectedRoutes = () => {
  const session = useSession();
  return session ? <Outlet /> : <Home />;
}

export default ProtectedRoutes;