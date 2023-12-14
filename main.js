let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #A48DE2;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #A48DE2;">Designer and Front end </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
