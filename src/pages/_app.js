import '@/styles/css/globals.css'
import Sidebar from './components/sidebar'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useEffect,useState } from "react";
import Navbar from './components/navbar'
import Head from 'next/head'
import Script from 'next/script';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'
//import "../../node_modules/bootstrap/dist/js/bootstrap"

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    });
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    });
  })
  return <>
  <LoadingBar
          color='#c73529'
          progress={progress}
          waitingTime={300}
          onLoaderFinished={() => setProgress(0)}
        />
  <Head>

        <title>{process.env.NEXT_PUBLIC_sitename}</title>
        
        <meta name="description" content="Welcome to smiledraws, the online portfolio of Smilesardarni, a talented sketch artist. Explore a world of intricate drawings, stunning portraits, and captivating illustrations. Get inspired by Smilesardarni's creativity and attention to detail. Commission personalized artwork or browse the gallery for unique pieces. Immerse yourself in the world of artistry and discover the beauty of hand-drawn masterpieces."/>
        <meta name="keywords" content="Smilesardarni,smile.draws,smiledraws, smile , drwas, smiledrwas sketch artist, smilesardarni drwas"/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="oEXph0QUQQ7OktWapvqshfP_7GsRnffXYWPih2FKNQk" />
       
  </Head>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></Script>

  <Sidebar/><Component {...pageProps} /></>
}
