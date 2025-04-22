import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-cenetr">Something went wrong</h1>
      <Link className="text-lg text-blue-600 underline" to="/">
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
