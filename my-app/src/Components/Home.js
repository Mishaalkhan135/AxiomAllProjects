import { Link } from "react-router-dom";
import { Button, Image } from "antd";
import allPaths from "../Config/path";

const Home = (props) => {
  return (
    <div>
      <h1>This is home</h1>
      <Image src={require("../assets/coding.gif")} />
      <Button type='primary'>
        <Link to={allPaths.Login}>Go To Login</Link>
      </Button>
    </div>
  );
};
export default Home;
