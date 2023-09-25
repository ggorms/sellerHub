import AuthForm from "../components/authForm/AuthForm";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsPage from "./ProductsPage";

function LoginPage() {
  const me = useSelector((state) => state.auth.credentials.seller);

  const guestRouter = (
    <Routes>
      <Route path="/*" element={<AuthForm />} />
    </Routes>
  );

  const userRouter = (
    <Routes>
      <Route index element={<ProductsPage />} />
    </Routes>
  );

  const loggedIn = me.sellerId;

  return loggedIn !== null ? userRouter : guestRouter;
}

export default LoginPage;
