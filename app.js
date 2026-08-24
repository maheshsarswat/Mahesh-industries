const form = document.getElementById("chatForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();
  const text = `Hello Mahesh Industries,%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/919928246088?text=${text}`, "_blank", "noopener");
});
if ("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));