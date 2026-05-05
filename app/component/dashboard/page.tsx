"use client";

import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";

interface User {
  _id: string;
  email: string;
}
export default function Dashboard() {
    const router = useRouter();
  const [user, setUser] = useState<User[]>([]);

  // fetch user data from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await response.json();
        console.log("Userss:",data.user);
        setUser(data.user);
        console.log("Cookies:",document.cookie);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchUser();
  }, []);

  

  // handle logout
 const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log("Logout success", data);

        // redirect after logout
        router.push("/component/login");
      } else {
        console.log("Logout failed", data.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex relative overflow-hidden">

      {/* Background Blobs (same theme) */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] bg-blue-900/20 rounded-full blur-[120px]" />

      {/* Sidebar */}
      <div className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 z-10 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">MyApp</h2>

        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-white cursor-pointer">Dashboard</li>
          <li className="hover:text-white cursor-pointer">Profile</li>
          <li className="hover:text-white cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col z-10">

        {/* Topbar */}
        <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-sm hover:opacity-90"
          >
            Logout
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold mb-2">Users</h3>
            <p className="text-gray-400 text-sm">Manage your users</p>
            { user.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {user.map((u) => (
                  <li key={u._id}>{u.email}</li>
                ))}
              </ul>
            ) : (
              <p>No users found</p>
            )}
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold mb-2">Orders</h3>
            <p className="text-gray-400 text-sm">Track all orders</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-gray-400 text-sm">View earnings</p>
          </div>

        </div>
      </div>
    </div>
  );
}