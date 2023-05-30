import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import GraphComponent from "../../components/new/GraphComponent";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div style={{marginTop:"70px"}} className="charts">
      
          {/* <Graph title=" Intensity" aspect={2 / 1} /> */}
          <GraphComponent/>
        </div>
      </div>
    </div>
  );
};

export default Home;
