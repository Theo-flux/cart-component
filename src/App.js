import './App.css';
import {useMediaQuery} from 'react-responsive'
import Navbar from './components/Navbar/Navbar.js'
import Imageslider from './components/ImageSlider/Imageslider.js'
import DesktopImage from './components/DesktopSlider/DesktopImage.js'
import ProductDetails from './components/ProductDetails/ProductDetails.js'

function App() {
  const isMobile = useMediaQuery({query:'(max-width:767px)'})

  return (
    <div className="App">
      <Navbar/>
      <main>
        {isMobile ? <Imageslider/>:<DesktopImage/>}
        <ProductDetails/>
      </main>
    </div>
  );
}

export default App;
