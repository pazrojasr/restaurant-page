function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const chefImage = document.createElement("img");
    chefImage.src = "images/chef.png";
    chefImage.alt = "Chef";

    home.appendChild(createParagraph("El arte del dulce en cada obra maestra"));
    home.appendChild(createParagraph("Hecho con amor desde 2022"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("¡Dulzura online, deleite en persona!"));

    return home;
  }

  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }

  export default loadHome;
