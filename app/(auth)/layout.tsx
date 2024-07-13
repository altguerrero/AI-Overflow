import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <h1>{children}</h1>
    </div>
  );
}
