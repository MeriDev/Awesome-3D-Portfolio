import Navbar from './sections/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <canvas id="canvas"></canvas>
      <main className="max-w-7xl mx-auto bg-black-200"></main>
    </>
  );
};

export default App;
