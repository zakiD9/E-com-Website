export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: "#1A73E8",
        secondary: "#FF6B00",
        accent: "#10B981",
        dark: "#111827",
        light: "#F3F4F6",
        prhover:"#1669C1",
        sechover:"#E65E00E2",
        success:"#34A853",
        error:"#EA4335",
        warning:"#F9AB00",
        text:"#212121",
        sectext:"#424242"
      },
    },
  },
  plugins: [],
}
