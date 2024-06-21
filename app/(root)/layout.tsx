import Sidebar from "@/components/Sidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Guest", lastName: "User" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>
      {children}
    </main>
  );
}
