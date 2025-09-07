import React from "react";
import App from "./App";
import Footer from "./footer";

function ALL() {
  return (
    <div>
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <App />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ALL;
