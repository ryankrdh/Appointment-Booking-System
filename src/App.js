import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // handles URL changes
// import AuthProvider from './Context/AuthProvider';
import Team from './Pages/Team/Team/Team';
// import Approved from './Pages/Approved/Approved';
import Contact from './Pages/Contact/Contact/Contact';
import Directions from './Pages/Directions/Directions/Directions';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import FAQ from './Pages/FAQ/FAQ/Faq.jsx';
import MessageReceived from './Pages/MessageReceived/MessageReceived/MessageReceived';
// import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Services/Service/Service';

function App() {
	return (
		<div className="App">
			{/* <AuthProvider> */}
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/team" element={<Team />} />
					<Route path="/service" element={<Service />} />
					<Route path="/directions" element={<Directions />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/faq" element={<FAQ />} />
					{/* <Route path="/approved" element={<Approved />} /> */}
					<Route path="/messagereceived" element={<MessageReceived />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
				<Footer />
			</Router>
			{/* </AuthProvider> */}
		</div>
	);
}

export default App;
