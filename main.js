let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #503459;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #503459;">Técnico en Programación Web y Estudiante de Ingeniería en Administración de Sistemas</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
