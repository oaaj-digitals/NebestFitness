import "./App.css";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
	return (
		<>
			<Header />
			<About />
			<Services />
			<Gallery />
			<Testimonials />
		</>
	);
}

export default App;
