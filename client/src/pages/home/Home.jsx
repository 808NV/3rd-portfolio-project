import "./Home.scss";
import header from "../../assets/bg.png";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <div className="txtContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p className="description">
            Explore our vast selection of properties and discover your ideal
            home sweet home. Whether you're searching for a cozy apartment, a
            spacious family house, or your dream waterfront property, we've got
            you covered. Start your journey towards finding the perfect place
            today.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>20+</h1>
              <h2>Years Of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={header} alt="header" />
      </div>
    </div>
  );
};

export default Home;
