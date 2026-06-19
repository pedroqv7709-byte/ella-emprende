window.addEventListener("DOMContentLoaded", () => {

    // TESTIMONIOS

    const textos = [

        "Empecé sin experiencia y ahora tengo mi negocio.",

        "Ella Emprende me ayudó a dar el primer paso.",

        "Una comunidad que realmente inspira y motiva."

    ];

    let i = 0;

    const text = document.getElementById("testimonial-text");

    function cambiarTexto(){

        if(text){

            text.textContent = textos[i];

            i = (i + 1) % textos.length;

        }

    }

    setInterval(cambiarTexto,3000);

    cambiarTexto();

    // SCROLL ANIMATIONS

    window.addEventListener("scroll", () => {

        document.querySelectorAll(".reveal").forEach(el => {

            if(el.getBoundingClientRect().top < window.innerHeight - 100){

                el.classList.add("active");

            }

        });

    });

    // BOTÓN HERO

    const btn = document.querySelector(".main-btn");

    if(btn){

        btn.addEventListener("click", () => {

            document.getElementById("about")
            .scrollIntoView({
                behavior:"smooth"
            });

        });

    }

    // BOTONES BLOG

    document.querySelectorAll(".blog-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            btn.innerHTML = "Próximamente";

            btn.style.background =
            "linear-gradient(45deg,#9c27b0,#673ab7)";

        });

    });

});