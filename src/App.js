import Navigation from './Components/Nav';
import MainDisplay from './Components/MainDisplay';

function App() {
  return (
    <div className="text-center leading-relaxed font-semibold overflow-x-clip px-32 py-8 w-full h-full text-Almost-Black bg-Almost-White">
      <Navigation />
      <MainDisplay/>
    </div>
  );
}

export default App;
