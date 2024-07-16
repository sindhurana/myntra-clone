
import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Outlet } from 'react-router'
import FetchItems from '../components/FetchItems'
import LoadingSpinner from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'

function App() {

  const fetchStatus = useSelector(store => store.fetchStatus);

  return (
    <>


      <Header />
      <FetchItems />
      {fetchStatus.currentlyfetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
