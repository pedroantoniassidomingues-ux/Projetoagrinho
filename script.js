document.addEventListener("DOMContentLoaded", () => {
  
   // 1. MENU HAMBÚRGUER (MOBILE)
   const hamburger = document.getElementById("hamburger");
   const navMenu = document.getElementById("navMenu");
   const navLinks = document.querySelectorAll(".nav-link");


   hamburger.addEventListener("click", () => {
       navMenu.classList.toggle("open");
       const icon = hamburger.querySelector("i");
       if (navMenu.classList.contains("open")) {
           icon.classList.remove("fa-bars");
           icon.classList.add("fa-xmark");
       } else {
           icon.classList.remove("fa-xmark");
           icon.classList.add("fa-bars");
       }
   });


   navLinks.forEach(link => {
       link.addEventListener("click", () => {
           navMenu.classList.remove("open");
           const icon = hamburger.querySelector("i");
           icon.classList.remove("fa-xmark");
           icon.classList.add("fa-bars");
       });
   });


   // 2. MUDANÇA NO CABEÇALHO AO ROLAR TELA
   const navbar = document.querySelector(".navbar");
   window.addEventListener("scroll", () => {
       if (window.scrollY > 50) {
           navbar.classList.add("scrolled");
       } else {
           navbar.classList.remove("scrolled");
       }
   });


   // 3. MENU ATIVO CONFORME O SCROLL DA PÁGINA
   const sections = document.querySelectorAll("section");
   window.addEventListener("scroll", () => {
       let currentId = "";
       sections.forEach(section => {
           const sectionTop = section.offsetTop;
           if (window.scrollY >= sectionTop - 120) {
               currentId = section.getAttribute("id");
           }
       });


       navLinks.forEach(link => {
           link.classList.remove("active");
           if (link.getAttribute("href") === `#${currentId}`) {
               link.classList.add("active");
           }
       });
   });


   // 4. BOTÃO VOLTAR AO TOPO
   const backToTopBtn = document.getElementById("backToTop");
   window.addEventListener("scroll", () => {
       if (window.scrollY > 400) {
           backToTopBtn.classList.add("show");
       } else {
           backToTopBtn.classList.remove("show");
       }
   });


   backToTopBtn.addEventListener("click", () => {
       window.scrollTo({ top: 0, behavior: "smooth" });
   });


   // 5. EFEITO EXPANDIR/ESCONDER (COLLAPSE) NOS MATERIAIS
   const toggleButtons = document.querySelectorAll(".btn-toggle-info");
   toggleButtons.forEach(button => {
       button.addEventListener("click", function() {
           const hiddenContent = this.previousElementSibling;
          
           hiddenContent.classList.toggle("open");
           this.classList.toggle("active");


           if (hiddenContent.classList.contains("open")) {
               this.innerHTML = `Ver menos <i class="fas fa-chevron-up"></i>`;
           } else {
               this.innerHTML = `Ver mais <i class="fas fa-chevron-down"></i>`;
           }
       });
   });


   // 6. ALERTA LÚDICO NO FORMULÁRIO DE CONTATO
   const contactForm = document.getElementById("contactForm");
   contactForm.addEventListener("submit", (e) => {
       e.preventDefault();
       const nome = document.getElementById("name").value;
       alert(`Oba! Que legal, ${nome}! 🌱 Sua mensagem voou direto para a nossa equipe do campo. Entraremos em contato logo logo!`);
       contactForm.reset();
   });
});