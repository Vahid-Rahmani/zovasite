/* ZOVA — lightweight interactions: mobile nav + scroll reveal */
(function () {
  "use strict";

  var copy = {
    en: {nav:["Features","How it Works","Learn","Screenshots","Privacy","Support"], heroKicker:"AI-powered classroom assistance for Chrome", heroTitle:"Understand every class.|In your language.", heroLead:"Follow online lessons with live transcription, translation, optional translated audio, classroom explanations and saved study notes — directly in your browser.", heroNote:"Zova is 100% free to use. Google API limits or terms may apply separately.", add:"Add to Chrome", how:"See how Zova works"},
    de: {nav:["Funktionen","So funktioniert es","Anleitung","Screenshots","Datenschutz","Support"], heroKicker:"KI-Unterstützung für den Unterricht in Chrome", heroTitle:"Verstehe jeden Unterricht.|In deiner Sprache.", heroLead:"Folge Online-Unterricht mit Live-Transkription, Übersetzung, optionalem Audio, Erklärungen und gespeicherten Lernnotizen — direkt im Browser.", heroNote:"Zova ist 100 % kostenlos. Für Google-API können eigene Limits oder Bedingungen gelten.", add:"Zu Chrome hinzufügen", how:"So funktioniert Zova"},
    zh: {nav:["功能","使用方法","指南","截图","隐私","支持"], heroKicker:"Chrome 智能课堂助手", heroTitle:"理解每一堂课。|用你的语言学习。", heroLead:"通过实时转录、翻译、可选语音、课堂解释和学习笔记，直接在浏览器中跟上在线课程。", heroNote:"Zova 完全免费。Google API 可能有单独的限制或条款。", add:"添加到 Chrome", how:"了解 Zova 的工作方式"},
    hi: {nav:["सुविधाएँ","कैसे काम करता है","गाइड","स्क्रीनशॉट","गोपनीयता","सहायता"], heroKicker:"Chrome के लिए AI कक्षा सहायक", heroTitle:"हर कक्षा को बेहतर समझें।|अपनी भाषा में।", heroLead:"लाइव ट्रांसक्रिप्शन, अनुवाद, वैकल्पिक ऑडियो, कक्षा स्पष्टीकरण और सेव किए गए नोट्स के साथ ऑनलाइन पाठों को ब्राउज़र में समझें।", heroNote:"Zova 100% मुफ़्त है। Google API की अपनी सीमाएँ या शर्तें हो सकती हैं।", add:"Chrome में जोड़ें", how:"Zova कैसे काम करता है"}
  };
  var languageSelect = document.querySelector(".language-select");
  var currentLanguage = localStorage.getItem("zova-language") || "en";
  function setText(selector, value) { var el=document.querySelector(selector); if(el && value) el.textContent=value; }
  function applyLanguage(lang) {
    var t=copy[lang] || copy.en; document.documentElement.lang=lang; document.documentElement.dir="ltr";
    var nav=document.querySelectorAll(".site-nav a"); t.nav.forEach(function(v,i){if(nav[i])nav[i].textContent=v;});
    if(document.querySelector(".hero")){setText(".hero .kicker",t.heroKicker);var title=document.querySelector(".hero h1");if(title){var parts=t.heroTitle.split("|");title.innerHTML=parts[0]+"<br><em>"+parts[1]+"</em>";}setText(".hero .lead",t.heroLead);setText(".hero .note",t.heroNote);setText(".hero .actions .btn.store",t.add);setText(".hero .actions .btn.ghost",t.how);}
    document.querySelectorAll(".btn.store").forEach(function(el){if(el.textContent.trim().indexOf("Add")>=0 || el.textContent.trim().indexOf("Chrome")>=0)el.textContent=t.add;});
    if(languageSelect) languageSelect.value=lang; localStorage.setItem("zova-language",lang);
  }
  if(languageSelect){languageSelect.value=currentLanguage;languageSelect.addEventListener("change",function(){applyLanguage(this.value);});}
  applyLanguage(currentLanguage);

  var themeToggle = document.querySelector(".theme-toggle");
  var savedTheme = localStorage.getItem("zova-theme");
  if (savedTheme === "dark") document.body.classList.add("dark-mode");
  if (themeToggle) {
    var setThemeLabel = function () { themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀ Light" : "☾ Dark"; };
    setThemeLabel();
    themeToggle.addEventListener("click", function () { var dark = document.body.classList.toggle("dark-mode"); localStorage.setItem("zova-theme", dark ? "dark" : "light"); setThemeLabel(); });
  }

  // Mobile navigation
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".site-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.textContent = open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      });
    });
  }

  // Disabled "Coming Soon" store buttons should not jump to top
  document.querySelectorAll('.btn.store[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });

  // Gentle scroll reveal for elements marked .reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();
