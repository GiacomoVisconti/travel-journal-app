import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import DefaultLayout from './layouts/defaultLayout'
import HomePage from './pages/HomPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
