import Navbar from './components/Navbar';
import Hero from './sections/Hero';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto ">
        <Hero />
      </main>
    </>
  );
};

export default App;
