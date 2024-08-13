import FirstGrid from '../components/fisrtGridContent/firstGridContent'
import Navbar from '../components/navbar/navbar'
import SecondGridContent from '../components/secondGridContent/secondGridContent'

import './App.css'

function App() {

  return (
    <div className='body'>
      <Navbar/>
      <div>
        <FirstGrid/>
        <div className='second'>
          <SecondGridContent/>
        </div>

      </div>
    </div>

  )
}

export default App
