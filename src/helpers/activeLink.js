const activeLink = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  return () => {};
};

export default activeLink;
