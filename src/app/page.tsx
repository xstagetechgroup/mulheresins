import Image from "next/image";
import fundo from '@/assets/2.jpg'
import whiteLogo from '@/assets/logo-horizontal-white.png'
import { FaFacebook, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full h-screen relative">

      <Image
        src={fundo}
        alt="Iracelma Almeida"
        width={900}
        height={900}
        className="w-full h-full object-cover object-center absolute z-10 "
      />
      <div className="w-full h-full px-10 py-5 flex flex-col justify-center items-center absolute z-20 bg-black/60">
        <div className="w-full ">
          <Image
            src={whiteLogo}
            alt="Logo"
            width={200}
            height={200}
            className="w-40"
          />
        </div>
        <div className=" w-full h-full  text-white flex flex-col justify-center items-center uppercase text-center gap-10 text-lg">
          <p>A Resiliência Não é <br /> ser forte o tempo todo. <br /> É saber levantar-se <br /> com propósito.</p>
          <p className="text-5xl md:text-9xl ">A M I</p>
          <p>· Um Novo Website Brevemente ·</p>
        </div>
        <div className="text-white text-lg w-full flex gap-4 items-center justify-start pt-4">
          <a target="_blank" href={'https://www.facebook.com/share/16SHLs8tHr/'}><FaFacebook /></a>
          <a target="_blank" href={'https://www.instagram.com/associacaomulheresinstruidas?igsh=MWwycXlwOWVseGwzdA=='}><FaInstagramSquare /></a>
          <a target="_blank" href={'https://www.linkedin.com/in/iracelma-almeida-8880a132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
}
