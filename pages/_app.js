import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
	return (
		<div className="md:container md:mx-auto min-h-screen">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
