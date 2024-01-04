import './App.css'
import { HomeSection1 } from './components/home/homeSection1/HomeSection1'
import { Navbar } from './components/navbar/Navbar'

function App() {

  return (
    <>
      <div className='w-full'>
        <Navbar />
        <HomeSection1 />
      </div>
    </>
  )
}

export default App
