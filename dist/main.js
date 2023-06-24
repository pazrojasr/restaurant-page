(() => {
  "use strict";
  function e(e) {
    const t = document.createElement("p");
    return (t.textContent = e), t;
  }
  const t = function () {
    const t = document.getElementById("main");
    (t.textContent = ""),
      t.appendChild(
        (function () {
          const t = document.createElement("div");
          t.classList.add("home");
          const n = document.createElement("img");
          return (
            (n.src = "img/chef.png"),
            (n.alt = "Chef"),
            t.appendChild(e("El arte del dulce en cada obra maestra")),
            t.appendChild(e("Hecho con amor desde 2022")),
            t.appendChild(n),
            t.appendChild(e("¡Dulzura online, deleite en persona!")),
            t
          );
        })()
      );
  };
  function n(e, t) {
    const n = document.createElement("div");
    n.classList.add("menu-item");
    const a = document.createElement("h2");
    a.textContent = e;
    const o = document.createElement("p");
    o.textContent = t;
    const c = document.createElement("img");
    return (
      (c.src = `img/sweet.png`),
      (c.alt = `${e}`),
      n.appendChild(c),
      n.appendChild(a),
      n.appendChild(o),
      n
    );
  }
  function a() {
    const e = document.createElement("header");
    e.classList.add("header");
    const a = document.createElement("h1");
    return (
      a.classList.add("restaurant-name"),
      (a.textContent = "Il Paradiso dei Dolci"),
      e.appendChild(a),
      e.appendChild(
        (function () {
          const e = document.createElement("nav"),
            a = document.createElement("button");
          a.classList.add("button-nav"),
            (a.textContent = "Inicio"),
            a.addEventListener("click", (e) => {
              e.target.classList.contains("active") || (o(a), t());
            });
          const c = document.createElement("button");
          c.classList.add("button-nav"),
            (c.textContent = "Menu"),
            c.addEventListener("click", (e) => {
              e.target.classList.contains("active") ||
                (o(c),
                (function () {
                  const e = document.getElementById("main");
                  (e.textContent = ""),
                    e.appendChild(
                      (function () {
                        const e = document.createElement("div");
                        return (
                          e.classList.add("menu"),
                          e.appendChild(
                            n(
                              "Tiramisú",
                            )
                          ),
                          e.appendChild(
                            n(
                              "Cannoli",
                            )
                          ),
                          e.appendChild(
                            n(
                              "Panna Cotta",
                            )
                          ),
                          e.appendChild(
                            n(
                              "Gelato",
                            )
                          ),
                          e.appendChild(
                            n(
                              "Zeppole",
                            )
                          ),
                          e.appendChild(
                            n(
                              "Cassata Siciliana",
                            )
                          ),
                          e.appendChild(
                            n(
                              "Torta Caprese",
                            )
                          ),
                          e.appendChild(
                            n(
                              "Sfogliatelle",
                            )
                          ),
                          e
                        );
                      })()
                    );
                })());
            });
          const i = document.createElement("button");
          return (
            i.classList.add("button-nav"),
            (i.textContent = "Contacto"),
            i.addEventListener("click", (e) => {
              e.target.classList.contains("active") ||
                (o(i),
                (function () {
                  const e = document.getElementById("main");
                  (e.textContent = ""),
                    e.appendChild(
                      (function () {
                        const e = document.createElement("div");
                        e.classList.add("contact");
                        const t = document.createElement("p");
                        t.textContent = "📞 123 456 789";
                        const n = document.createElement("p");
                        n.textContent =
                          "🏠 Calle 420, Antofagasta, Chile";
                        const a = document.createElement("img");
                        return (
                          (a.src = "img/afta.png"),
                          (a.alt = "Il Paradiso dei Dolci restaurant location"),
                          e.appendChild(t),
                          e.appendChild(n),
                          e.appendChild(a),
                          e
                        );
                      })()
                    );
                })());
            }),
            e.appendChild(a),
            e.appendChild(c),
            e.appendChild(i),
            e
          );
        })()
      ),
      e
    );
  }
  function o(e) {
    document.querySelectorAll(".button-nav").forEach((e) => {
      e !== this && e.classList.remove("active");
    }),
      e.classList.add("active");
  }
  !(function () {
    const e = document.getElementById("content");
    e.appendChild(a()),
      e.appendChild(
        (function () {
          const e = document.createElement("main");
          return e.classList.add("main"), e.setAttribute("id", "main"), e;
        })()
      ),
      e.appendChild(
        (function () {
          const e = document.createElement("footer");
          e.classList.add("footer");
          const t = document.createElement("p");
          t.textContent = "Copyright © 2023 pazrojasr";
          const n = document.createElement("a");
          n.href = "https://github.com/pazrojasr";
          const a = document.createElement("i");
          return (
            a.classList.add("fab"),
            a.classList.add("fa-github"),
            n.appendChild(a),
            e.appendChild(t),
            e.appendChild(n),
            e
          );
        })()
      ),
      o(document.querySelector(".button-nav")),
      t();
  })();
})();
