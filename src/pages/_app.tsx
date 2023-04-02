import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { AuthProvider } from '@/context/auth';
import { ChatProvider } from '@/context/chat';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChatProvider>
        <Component {...pageProps} />
      </ChatProvider>
    </AuthProvider>
  );
}
