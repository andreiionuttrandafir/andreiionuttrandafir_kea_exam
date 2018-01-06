let navigation = document.querySelector(".nav");
        let mainly = document.querySelector("main");
        let anim = document.querySelector("#anim");

        anim.addEventListener("animationend", function() {
            setTimeout(function() {
                navigation.style.display = "block";
                mainly.style.display = "block";
                anim.style.display = "none";

            }, 500);
        });