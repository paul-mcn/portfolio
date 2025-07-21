import React, { useRef } from "react";

type Props = {
  className?: string;
};

const HomePageParticles = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const canvas = canvasRef.current;

  return <canvas className={props.className} ref={canvasRef}></canvas>;
};

export default HomePageParticles;
