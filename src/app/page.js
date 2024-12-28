import About from "../../components/Homepage/About";
import Landing from "../../components/Homepage/Landing";
import Map from "../../components/Homepage/Map";
import Product from "../../components/Homepage/Product";

export default function Home() {
  return (
    <div>
      <Landing/>
      <About/>
      <Product/>
      <Map/>
    </div>
  );
}
