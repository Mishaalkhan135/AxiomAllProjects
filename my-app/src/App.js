import "./App.css";
import Routes from "./Config/Routes";

const App = () => {
  // const [key, setKey] = useState("");
  // const [value, setValue] = useState("");
  // const [obj, setObj] = useState({});
  // const addKeyValue = () => {
  //   obj[key] = value;
  //   setObj({ ...obj });

  //   //setObj({ ...obj, [key]: value });
  //   console.log("obj", Object.entries(obj));
  //   setKey("");
  //   setValue("");
  // };
  // const user = useSelector((state) => state?.user);
  // useEffect(() => {
  //   console.log("user", user);
  // }, [user]);

  return (
    <div>
      <Routes />
      {/* {user?.email ? (
        <div>
          <Todo />
        </div>
      ) : (
        <Login />
      )} */}
      {/* <div>
        <input
          name='key'
          onChange={(e) => setKey(e?.target?.value)}
          value={key}
          placeholder='Please Enter Key Here'
        />
        <input
          name='value'
          onChange={(e) => setValue(e?.target?.value)}
          value={value}
          placeholder='Please Enter Value Here'
        />
        <button onClick={addKeyValue}>Add</button>
      </div>

      <div>
        {Object.entries(obj).map((v, i) => {
          return (
            <p key={i}>{`${v[0]?.charAt(0)?.toUpperCase()}${v[0]?.slice(
              1,
              4
            )}:${v[1]}`}</p>
          );
        })}
      </div> */}
    </div>
  );
};

export default App;
