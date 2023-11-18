let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #503459;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #503459;">Soy Técnico en Programación Web y estudiante de FIME</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
