document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Form validation
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let message = document.querySelector("textarea[name='message']").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        alert("Thank you "+name+" your massege sent successfully.");
        this.reset();

        function validateEmail(email) {
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        // Navbar highlight on scroll
        window.addEventListener("scroll", function () {
            let sections = document.querySelectorAll("section");
            let scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                if (scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight) {
                    let currentId = section.getAttribute("id");
                    document.querySelectorAll("nav ul li a").forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").substring(1) === currentId) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        });
    });
});