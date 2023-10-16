import Header from './components/header';
import HelmetHead from './components/helmetHead/HelmetHead';
import Footer from './components/footer';
import Main from './components/mainPageSection/Main';

const App = () => {
  return (
    <>
      <HelmetHead />
      <main>
        <Header />
        <Main />
      </main>
      <Footer />
    </>
  );
};

export default App;
