import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import Search from "../../Search/Search";

import "./styles.sass";

const Home = () => {
  return (
    <div className="home__wrapper">
      <Navbar />
      <div className="home__content">
        <Header />
        <Search />
      </div>
    </div>
  );
};

export default Home;
