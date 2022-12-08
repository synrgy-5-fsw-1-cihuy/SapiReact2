import './App.css';
import Header from './components/header/Header';
import Content1 from './components/content/Content1';
import Content2 from './components/content2/Content2';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';


function App() {
  const person = {
    name: "Farrel"
  };

  return (
    <div className="App">
      <Header name="Jalil" age={20} person={person} />
      <Slider />
      <Content1 />
      <Content2 />
      {/* FAQ */}
      <Footer />
    </div>
  );
}

export default App;
