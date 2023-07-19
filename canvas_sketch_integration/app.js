
const sketch = () => {
  return ({ context, width, height }) => {
    // Tu código de animación aquí
    context.fillStyle = 'red';
    context.fillRect(0, 0, width, height);
  };
};

// Configura el lienzo de canvas-sketch
const settings = {
  dimensions: [600, 400],
  animate: true,
  context: '2d',
  duration: 4,
  fps: 30,
};

// Crea el lienzo y pasa el sketch y la configuración
const sketchCanvas = document.getElementById('canvas');
const createSketch = canvasSketch(sketch, settings);
createSketch(sketchCanvas);
