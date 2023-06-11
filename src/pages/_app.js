import '@/styles/css/globals.css'
import Sidebar from './components/sidebar'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar'
//import "../../node_modules/bootstrap/dist/js/bootstrap"

export default function App({ Component, pageProps }) {
  return <><Sidebar/><Component {...pageProps} /></>
}
