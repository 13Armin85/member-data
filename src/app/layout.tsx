import './globals.scss';
import { AuthProvider } from '@/providers/AuthProvider';

export const metadata = {
  title: 'Auth Demo',
  description: 'Simple auth flow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
