import React from 'react';
import './ShaderGradient.css';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const shaderGradient = () => {
  return (
    <div className="shader-bg">
      <ShaderGradientCanvas className="absolute top-0 left-0 w-full h-full">
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.4&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=5.1&color1=%23372e4f&color2=%238645b1&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=3&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=20&rotationY=0&rotationZ=-90&shader=defaults&type=plane&uAmplitude=0&uDensity=1.7&uFrequency=0&uSpeed=0.3&uStrength=3.3&uTime=8&wireframe=false"
        />
      </ShaderGradientCanvas>
    </div>
  );
};

export default shaderGradient;