import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [islogin, setIslogin] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await axios.post("/api/v1/auth/logout").then((res) => {
        setUser(null);
        navigate('/login');
      })
    } catch (error) {
      console.log(error.message);
    }
  };
  async function fetchData() {
    try {
      await axios.get("/api/v1/auth/getuser").then((res) => {
        setUser(res.data.data.username)
      }).catch((error)=>{
        console.log(error.message)
      })
      setIslogin(true)
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <nav className="w-full h-16 bg-white border-gray-200 text-black shadow-md sticky top-0">
      <div className="w-full h-full sm:w-3/4 flex flex-wrap items-center justify-between mx-auto">
        <Link
          to={'/'}
          className="text-4xl font-bold"
        >Zomato</Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col justify-center items-center text-lg font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3  text-slate-700 hover:text-black"
              >
                Home
              </Link>
            </li>
            {
              !user && <>
                <li>
                  <Link
                    to={"/login"}
                      className="block py-2 px-3 text-slate-700 hover:text-black"
                    aria-current="page"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                     className="block py-2 px-3  text-slate-700 hover:text-black"
                  >
                    Register
                  </Link>
                </li>
              </>
            }
            {
              user &&<>
              <p className="text-white text-md">welcome back, {user}</p>
                <li
                  onClick={logout}
                  className=" text-black rounded-lg px-4 cursor-pointer bg-white py-1"
                >
                  Logout
                </li></>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
