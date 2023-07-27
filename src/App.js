import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from './Pages/Team/Team/Team';
import Contact from './Pages/Contact/Contact/Contact';
import Directions from './Pages/Directions/Directions/Directions';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import FAQ from './Pages/FAQ/FAQ/Faq.jsx';
import MessageReceived from './Pages/MessageReceived/MessageReceived/MessageReceived';
import Loading from './Pages/Loading/Loading';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/team" element={<Team />} />
					<Route path="/directions" element={<Directions />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/messagereceived" element={<MessageReceived />} />
					<Route path="/loading" element={<Loading />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
