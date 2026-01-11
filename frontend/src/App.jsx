import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'sonner'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Send from './pages/Send'
import NotFound from './pages/NotFound'
import Appbar from './components/Appbar'
import PrivateRoute from './components/PrivateRoute'
import ProtectedLayout from './components/ProtectedLayout'

function App() {

  return (
    <>
    <BrowserRouter>
    <Toaster position='top-right' richColors/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>

        <Route element={<ProtectedLayout/>}>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/send' element={<Send/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
