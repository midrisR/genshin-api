import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
	return (
		<div className="container mx-auto px-20 py-20 min-h-screen bg-slate-600">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
