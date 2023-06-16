import Header from "./components/Header";
import Footer from "./components/Footer";
import GoodsContainer from "./components/GoodsContainer/GoodsContainer";
import Rules from "./components/Rules/Rules";
import Sales from "./components/Sales/Sales";

function App() {
  return (
    <div className="wrap">
      <Header/>
      <GoodsContainer/>
      <Sales/>
      <Rules/>
      <Footer/>
    </div>
  );
}

export default App;
