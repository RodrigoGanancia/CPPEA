import MenuBar from "@/components/menu-bar";
import Script from 'next/script';

export default function Home() {
  return (
    <body className="bg-gradient-to-t from-[#f2aaaa] to-[#a6c1ee] h-screen">
      <MenuBar /> 
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" type="module" />
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" noModule />
    </body>
  );
}
