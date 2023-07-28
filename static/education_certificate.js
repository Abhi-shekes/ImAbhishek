document.addEventListener("DOMContentLoaded", function () {
    const educationBtn = document.getElementById("educationBtn");
    const certificationBtn = document.getElementById("certificationBtn");
    const educationSection = document.getElementById("educationSection");
    const certificationSection = document.getElementById("certificationSection");

    // Show Education section and hide Certification section by default
    educationSection.style.display = "block";
    certificationSection.style.display = "none";
    educationBtn.classList.add("active");
    certificationBtn.classList.remove("active");

    educationBtn.addEventListener("click", function () {
        educationSection.style.display = "block";
        certificationSection.style.display = "none";

        // Toggle active class
        educationBtn.classList.add("active");
        certificationBtn.classList.remove("active");
    });

    certificationBtn.addEventListener("click", function () {
        educationSection.style.display = "none";
        certificationSection.style.display = "block";

        educationBtn.classList.remove("active");
        certificationBtn.classList.add("active");
    });
});


