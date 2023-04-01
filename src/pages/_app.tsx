import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { AuthContext, AuthProvider } from "@/context/auth";
import { ChatProvider } from "@/context/chat"; 



export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter(); 


  return (
    <AuthProvider>
      <ChatProvider>
        <Component {...pageProps} />
      </ChatProvider>
    </AuthProvider>
  )
}
