import Header from './components/Header';
import Hero from './components/Hero';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Chat />
      </main>
      <Footer />
    </div>
  );
}

export default App;