import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { HomeSection } from './components/homeSection/HomeSection'

function App() {

  return (
    <>
      <div className='w-full'>
        <Navbar />
        <HomeSection />
      </div>
    </>
  )
}

export default App
