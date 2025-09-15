import Image from "next/image";
import fundo from '@/assets/5.jpg'
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
      <div className="w-full h-full px-10 py-5 flex flex-col justify-center items-center absolute z-20 bg-black/70">
        <div className="w-full ">
          <Image
            src={whiteLogo}
            alt="Logo"
            width={200}
            height={200}
            className="w-40"
          />
        </div>
        <div className=" w-full h-full  text-white flex flex-col justify-center items-center text-center gap-10 text-2xl">
          <p className="text-5xl md:text-9xl font-publica uppercase">AMI</p>
          <div className="max-w-4xl flex flex-col gap-4 px-2 text-base md:text-lg">
            <p className="font-roboto-semi-bold">Bem-vinda à Associação Mulheres Instruídas</p>
            <p className="font-roboto-semi-bold">Estamos a construir um espaço de transformação, resiliência e consciência para mulheres que desejam superar desafios, ressignificar a sua história e alcançar o seu melhor.</p>
            <p className="font-roboto-semi-bold">A nossa missão é clara: capacitar, instruir e inspirar mulheres para que cada uma descubra a sua força interior. Acreditamos que cada dor pode ser ressignificada, cada obstáculo pode tornar-se um degrau, e cada mulher pode tornar-se protagonista da sua própria vida e de um futuro melhor.</p>
          </div>
        </div>
        <div className="text-white text-lg w-full flex gap-4 items-center justify-start pt-4">
          <a target="_blank" href={'https://www.facebook.com/share/16SHLs8tHr/'}><FaFacebook /></a>
          <a target="_blank" href={'https://www.instagram.com/ami.ao/'}><FaInstagramSquare /></a>
          <a target="_blank" href={'https://www.linkedin.com/in/iracelma-almeida-8880a132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
}
