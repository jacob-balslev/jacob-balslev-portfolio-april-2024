// Cursor 
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  function getRandomInt() {
    return Math.floor(Math.random() * 200) - 100;
  }
  

  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "small") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, 1)";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.opacity = "1";
      cursorBorder.style.boxShadow = "unset"
      cursorBorder.style.top = "-6px";
      cursorBorder.style.left = "-6px";
      cursorBorder.style.setProperty("--size", "12px");
    }
    if (item.dataset.cursor === "big") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, 0)";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.boxShadow = "0 0 0 1px hsl(210 4% 70% / 1)"
      cursorBorder.style.opacity = "0.3";
      cursorBorder.style.top = "-17.5px";
      cursorBorder.style.left = "-17.5px";
      cursorBorder.style.setProperty("--size", "35px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.opacity = "0.4";
    cursorBorder.style.top = getRandomInt(100)+"px";
      cursorBorder.style.left = getRandomInt(100)+"px";
    cursorBorder.style.boxShadow = "0 0 0 1px hsl(210 4% 70% / 1)"
    cursorBorder.style.setProperty("--size", "20px");
  });
});


// Cursor