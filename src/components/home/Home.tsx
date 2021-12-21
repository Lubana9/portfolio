import Body from "@components/body";
import Footer from "@components/footer";
import Header from "@components/header";
import "./home.css";
const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
