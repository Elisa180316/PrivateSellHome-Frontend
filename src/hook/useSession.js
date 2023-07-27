import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useSession = () => {
  const localStorageValue = localStorage.getItem("user");

  const user = localStorageValue
    ? JSON.parse(localStorageValue).auth.user
    : null;

  const decodedSession = user ? jwt_decode(user.token) : null;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  return decodedSession;
};

export default useSession;