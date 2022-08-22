import React from "react";
import { useState } from "react";

import Home from "@components/home";
import Particle from "@components/ParticalBackground/Particl";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <>
      <Particle />
      {!loading && <Home />}
    </>
  );
}

export default App;
