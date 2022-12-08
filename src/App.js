import './App.css';
import Header from './components/header/Header';
import Content1 from './components/content/Content1';
import Content2 from './components/content2/Content2';
import Footer from './components/footer/Footer';


function App() {
  // const person = {
  //   name: "Farrel"
  // };

  return (
    <div className="App">
      <Header />
      <Content1 />
      <Content2 />
      {/* FAQ */}
      <Footer />
    </div>
  );
}

export default App;
