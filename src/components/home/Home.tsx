import { useEffect } from "react";

import Body from "@components/body";
import Footer from "@components/footer";
import Header from "@components/header";
import "./home.css";
import "aos/dist/aos.css";
import Aos from "aos";
const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
