import { Header } from '@/components/Header/Header';
import '../globals.css';
import { Footer } from '@/components/Footer/Footer';

export const metadata = {
  title: 'Login | Made with Xata',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
