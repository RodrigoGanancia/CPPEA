import MenuBar from "@/components/menu-bar"
import Script from 'next/script';

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-[#f2aaaa] to-[#a6c1ee] h-screen">
      <MenuBar></MenuBar> 
      <Script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"/>
    </div>
  );
}
