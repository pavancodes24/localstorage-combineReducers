import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Todo } from "./Todo";

export const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Todo />
    </div>
  );
};
