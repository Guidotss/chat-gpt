import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { AuthProvider } from '@/context/auth';
import { ChatProvider } from '@/context/chat';
import { UiProvider } from '@/context/ui'; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UiProvider>
        <ChatProvider>
          <Component {...pageProps} />
        </ChatProvider>
      </UiProvider>
    </AuthProvider>
  );
}
