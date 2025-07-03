import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // Verifica se o dispositivo é móvel (mobile)
  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches;

  // Não renderiza o cursor personalizado em dispositivos móveis
  if (isMobile) return null;

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    // Centraliza os elementos do cursor (baseado no centro)
    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });

    // Movimento suave do cursor principal
    const xPara = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3.out' });
    const yPara = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3.out' });

    // Movimento suave da borda do cursor (mais lento)
    const xParaBorda = gsap.quickTo(cursorBorder, 'x', { duration: 0.5, ease: 'power3.out' });
    const yParaBorda = gsap.quickTo(cursorBorder, 'y', { duration: 0.5, ease: 'power3.out' });

    // Ao mover o mouse
    const aoMoverMouse = (e) => {
      xPara(e.clientX);
      yPara(e.clientY);
      xParaBorda(e.clientX);
      yParaBorda(e.clientY);
    };

    // Ao pressionar o botão do mouse
    const aoPressionarMouse = () => {
      gsap.to([cursor, cursorBorder], { scale: 0.8, duration: 0.15 });
    };

    // Ao soltar o botão do mouse
    const aoSoltarMouse = () => {
      gsap.to([cursor, cursorBorder], { scale: 1, duration: 0.15 });
    };

    // Adiciona os eventos
    window.addEventListener('mousemove', aoMoverMouse);
    window.addEventListener('mousedown', aoPressionarMouse);
    window.addEventListener('mouseup', aoSoltarMouse);

    // Remove os eventos ao desmontar o componente
    return () => {
      window.removeEventListener('mousemove', aoMoverMouse);
      window.removeEventListener('mousedown', aoPressionarMouse);
      window.removeEventListener('mouseup', aoSoltarMouse);
    };
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
      />

      {/* Contorno do cursor */}
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[999] mix-blend-difference opacity-50"
      />
    </>
  );
};

export default CustomCursor;
