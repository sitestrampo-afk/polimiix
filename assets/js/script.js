'use strict';

// Todos os links usam o mesmo WhatsApp e a mesma mensagem de saudação.
const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.greeting)}`;

document.querySelectorAll('a').forEach(link => {
  link.href = whatsappUrl;
  link.removeAttribute('target');
});

// Mantém o redirecionamento para controles adicionados posteriormente.
document.addEventListener('click', event => {
  const control = event.target.closest('a, button');
  if (!control) return;
  if (control.tagName === 'A') {
    control.href = whatsappUrl;
    return;
  }
  event.preventDefault();
  window.location.assign(whatsappUrl);
});
