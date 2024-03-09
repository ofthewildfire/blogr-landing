
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fontsource-variable/overpass';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import './App.css'
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';


function App() {

    return (
      <>
      <NavBar/>
      <Hero/>
      </>
    )
}

export default App
