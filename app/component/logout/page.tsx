"use client";

import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter(); // ✅ correct place

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/logout", {
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
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
