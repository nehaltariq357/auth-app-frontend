import Image from "next/image";
import Login from "./component/login/page";
import Signup from "./component/signup/page";
import Logout from "./component/logout/page";

export default function Home() {
return(
  <div>
    {/* <h1>Home</h1> */}

    {/* login page */}
    <Login/>

    {/* signup page */}
    {/* <Signup/> */}

    {/* logout page */}
    {/* <Logout/> */}
  </div>
)
}
