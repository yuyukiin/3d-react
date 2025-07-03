import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      
      {/* Lado esquerdo - Conteúdo de texto */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          my name is, <br />  Yuri Alexander

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
        >
            I'm a Computer Science student and this is a bit of my journey. I've already developed projects like a restaurant management system and a university gate control system.

        </motion.p>
      </div>

      {/* Lado direito - Animação 3D */}
      <Spline
        className="absolute xl:right-[-28%] rigth-0 top-[-20%] lg:top-0"
        scene="https://prod.spline.design/avtrtKf0ZkUg9DlU/scene.splinecode"
      />
    </section>
  );
};

export default HeroSection;
