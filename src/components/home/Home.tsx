import Body from "@components/body";
import Footer from "@components/footer";
import Header from "@components/header";
import "./home.css";
const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>

      <div className="body">
        <Body />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
