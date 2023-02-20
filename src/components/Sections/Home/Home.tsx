import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import Search from "../../Search/Search";

import "./styles.sass";

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <div className="home__content">
        <Header />
        <Search />
      </div>
    </section>
  );
};

export default Home;
