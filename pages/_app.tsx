
import Nossr from '@/components/nossr'
import { CountdownProvider } from '@/context/CountdownContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='h-screen'>
    <Nossr>

    <CountdownProvider><Component {...pageProps} /></CountdownProvider>
    </Nossr>
    </div>
}
