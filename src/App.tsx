import "./App.css";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<Header />
			<About />
			<Services />
			<Gallery />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
