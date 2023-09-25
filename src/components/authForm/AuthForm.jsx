import { useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../../reducers/auth";

/**
 * AuthForm allows a user to either login or register for an account.
 */
function AuthForm() {
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(true);
  const authType = isLogin ? "Login" : "Register";
  const oppositeAuthCopy = isLogin
    ? "Don't have an account?"
    : "Already have an account?";
  const oppositeAuthType = isLogin ? "Register" : "Login";

  /**
   * Send credentials to server for authentication
   */
  async function attemptAuth(event) {
    event.preventDefault();
    setError(null);

    const authMethod = isLogin ? login : register;
    const credentials = { username, password };

    try {
      setLoading(true);
      await authMethod(credentials).unwrap();
    } catch (error) {
      setLoading(false);
      setError(error.data);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center my-28 shadow-sm shadow-black w-4/5 mx-auto sm:w-3/5 md:w-[40%] lg:w-[30%] font-mono">
        <h1 className="text-black text-4xl py-10">{authType}</h1>
        <form onSubmit={attemptAuth} name={authType} className="flex flex-col">
          <label className="text-black text-center pb-3">Username</label>
          <input
            className="input w-full max-w-xs mb-5"
            type="text"
            name="username"
            placeholder="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <label className="text-black text-center pb-3">Password</label>
          <input
            className="input w-full max-w-xs"
            type="password"
            name="password"
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button className="btn text-white mt-12" type="submit">
            {authType}
          </button>
        </form>
        <p className="text-black py-5">
          {oppositeAuthCopy}{" "}
          <a
            className="hover:text-white"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {oppositeAuthType}
          </a>
        </p>
        {loading && <p>Logging in...</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default AuthForm;
