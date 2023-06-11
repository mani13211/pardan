import '@/styles/css/globals.css'
import Sidebar from './components/sidebar'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar'
import Head from 'next/head'
//import "../../node_modules/bootstrap/dist/js/bootstrap"

export default function App({ Component, pageProps }) {
  return <>
  <Head>

        <title>Smile Draws</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link href="https://fonts.googleapis.com/css2?family=Euphoria+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
       
  </Head>
  <Sidebar/><Component {...pageProps} /></>
}
