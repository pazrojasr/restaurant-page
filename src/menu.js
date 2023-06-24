function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
      createMenuItem(
        "Tiramisú",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Cannoli",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Panna Cotta",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Gelato",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Zeppole",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Cassata Siciliana",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Torta Caprese",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Sfogliatelle",
      )
    );

    return menu;
  }

  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `img/sweet.png`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
  }

  function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }

  export default loadMenu;
