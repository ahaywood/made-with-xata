import '../globals.css';
import '../../tailwind.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-pageWidth mx-auto pt-12 pb-14">
          <Header
            user={{
              name: 'Amy Dutton',
              avatar: 'http://placekitten.com/32/32',
              avatarColor: 'alienArmpit',
            }}
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
