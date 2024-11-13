import Navbar from "./components/Navbar";
import Visits from "./components/Visits";
import data from "./data";


const App = () => {

  const allData = data.map((item) => <Visits key={item.id} {...item}/>)
  return (
    <>
      <Navbar />
      <main>
        {allData}
      </main>
    </>
  );
}

export default App;
