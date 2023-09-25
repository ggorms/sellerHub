import { Link } from "react-router-dom";
import { useLogoutMutation } from "../reducers/auth";
import { useSelector } from "react-redux";
import LoginPage from "../Pages/LoginPage";

function Nav() {
  const [logout] = useLogoutMutation();
  const seller = useSelector((state) => state.auth.credentials.seller) || "";
  return (
    <nav>
      <div className="bg-black flex justify-between h-10 fixed w-full">
        <Link
          className="mx-3 text-white flex flex-col justify-center hover:text-gray-500"
          to={"/"}
        >
          Home
        </Link>
        {seller.sellerId && (
          <button className="text-white hover:text-gray-500" onClick={logout}>
            Logout
          </button>
        )}
        <Link
          className="mx-3 text-white flex flex-col justify-center  hover:text-gray-500"
          to={"/login"}
        >
          Account
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
