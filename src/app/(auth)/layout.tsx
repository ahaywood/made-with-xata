import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

import '../globals.css';
import '../../tailwind.css';

export const metadata = {
  title: 'Login | Made with Xata',
  description: '',
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
        <div className="box-wrapper mt-8 mb-10">
          <div className="box">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
