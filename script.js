// ============================================================
// scripts.js — Portfólio Joel Cavalcante | Dark Theme
// ============================================================

// ─── TEMA ───────────────────────────────────────────────────
function toggleTheme() {
  var isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateThemeBtn(isLight);
}

function updateThemeBtn(isLight) {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.innerHTML = isLight
    ? '<i class="fa fa-moon-o"></i> Tema'
    : '<i class="fa fa-sun-o"></i> Tema';
}

// Aplica tema salvo ao carregar
(function () {
  var saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
  }
  // Atualiza botão após DOM carregar
  document.addEventListener('DOMContentLoaded', function () {
    var saved2 = localStorage.getItem('theme');
    updateThemeBtn(saved2 === 'light');
  });
})();

// ─── BARRAS + CARDS ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  // Anima barras de skill
  document.querySelectorAll('.bar').forEach(function (bar) {
    var w = bar.getAttribute('data-w');
    setTimeout(function () {
      bar.style.width = w + '%';
    }, 500);
  });

  // Mostra sidebar e cards com classe .show
  document.querySelectorAll('.sidebar, .card').forEach(function (el) {
    setTimeout(function () {
      el.classList.add('show');
    }, 100);
  });

  // ─── FORMULÁRIO ───────────────────────────────────────────
  var form = document.getElementById('contact-form');
  if (!form) return;

  var emailRegex = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');

  function validate(id, errorId, rule) {
    var field = document.getElementById(id);
    var error = document.getElementById(errorId);
    if (!field || !error) return true;
    var ok = rule(field.value);
    field.classList.toggle('error', !ok);
    error.classList.toggle('show', !ok);
    return ok;
  }

  document.getElementById('nome').addEventListener('blur', function () {
    validate('nome', 'nome-error', function (v) {
      return v.trim().length >= 2;
    });
  });

  document.getElementById('email').addEventListener('blur', function () {
    validate('email', 'email-error', function (v) {
      return emailRegex.test(v.trim());
    });
  });

  document.getElementById('mensagem').addEventListener('blur', function () {
    validate('mensagem', 'mensagem-error', function (v) {
      return v.trim().length >= 10;
    });
  });

  form.addEventListener('submit', function (e) {
    var ok1 = validate('nome', 'nome-error', function (v) {
      return v.trim().length >= 2;
    });
    var ok2 = validate('email', 'email-error', function (v) {
      return emailRegex.test(v.trim());
    });
    var ok3 = validate('mensagem', 'mensagem-error', function (v) {
      return v.trim().length >= 10;
    });

    var fb = document.getElementById('form-feedback');
    fb.className = '';
    fb.textContent = '';

    if (!ok1 || !ok2 || !ok3) {
      // Bloqueia envio se inválido
      e.preventDefault();
      fb.className = 'error-feedback';
      fb.textContent = 'Corrija os campos destacados antes de enviar.';
      return;
    }

    // Se válido, deixa o FormSubmit enviar normalmente
    var btn = form.querySelector('.btn-submit');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Enviando...';
  });

});