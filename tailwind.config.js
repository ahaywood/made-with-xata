/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/images/header.svg')",
        showcase: "url('/images/showcase-bg.svg')",
        footer: "url('/images/footer.svg')",
      },
      backgroundSize: {
        '100-auto': '100% auto',
      },
      colors: {
        bunker: '#2d2d2d',
        caribbeanGreen: '#00dc9d',
        montana: '#393939' /* dark gray */,
        selectiveYellow: '#ffbb00',
        stack: '#8c8c8c' /* light gray */,
        carmine: '#fc0342' /* red */,
        vividOrange: '#ff6206' /* orange */,
        safetyOrang: '#fd9700' /* orange yellow */,
        uclaGold: '#f0b000' /* yellow */,
        alienArmpit: '#73d000' /* green yellow */,
        malachite: '#00cc59' /* sea foam green */,
        munsellGreen: '#00c080',
        tiffanyBlue: '#00bda6',
        irisBlue: '#00bbd6',
        vividCerulean: '#00a8eb',
        blueDeFrance: '#3582f8',
        veryLightBlue: '#6862f3',
        lavenderBlue: '#9353f9',
        lavender: '#b144fa',
        phlox: '#e612f1',
        fluorescentPink: '#f8149a',
        folly: '#ff005d',
        gray: '#818181',
        eerieBlack: '#181818',
        darkGray: '#575757',
        dimGray: '#6a6a6a',
      },
      dropShadow: {
        browser: '0px 75px 150px rgba(52, 64, 84, 0.18)',
        toggle:
          '0px 1px 3px rgba(16, 24, 40, 0.4), 0px 1px 2px rgba(16, 24, 40, 0.15)',
      },
      gap: {
        adminGalleryTable: '48px',
      },
      gridTemplateColumns: {
        adminGalleryTable: '66px minMax(0, 1fr) 185px 300px 80px',
      },
      maxWidth: {
        pageWidth: '1240px',
      },
      zIndex: {
        slideOutPanel: '9999',
        accountBar: '8000',
        stickyTableHeader: '20',
        stickyTableContents: '15',
        rainbowButton: '10',
        rainbowButtonGlow: '9',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      pageTitle: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
  safelist: [
    'bg-alienArmpit',
    'bg-malachite',
    'bg-munsellGreen',
    'bg-tiffanyBlue',
    'bg-irisBlue',
    'bg-vividCerulean',
    'bg-blueDeFrance',
    'bg-veryLightBlue',
    'bg-lavenderBlue',
    'bg-lavender',
    'bg-phlox',
    'bg-fluorescentPink',
    'bg-folly',
  ],
};
