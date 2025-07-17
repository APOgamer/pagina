window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gherkin').forEach(block => {
    block.innerHTML = block.innerHTML
      .replace(/(Feature:|Scenario:|Given|When|Then|And|Examples:)/g, '<span class="gherkin-keyword">$1</span>')
      .replace(/\|([^|]+)\|/g, '<span class="gherkin-table">|$1|</span>');
  });

  document.querySelectorAll('.card h4').forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
      const card = header.parentElement;
      card.classList.toggle('collapsed');
      if (card.classList.contains('collapsed')) {
        card.querySelectorAll('p,ul').forEach(e => e.style.display = 'none');
      } else {
        card.querySelectorAll('p,ul').forEach(e => e.style.display = '');
      }
    });
  });
});

const style = document.createElement('style');
style.innerHTML = `
.gherkin-keyword { color: #a51c30; font-weight: bold; }
.gherkin-table { background: #fff; color: #a51c30; padding: 0 4px; border-radius: 3px; }
.card.collapsed { background: #fff6f7; border-color: #ccc; }
.card.collapsed h4:after { content: ' [+]'; color: #a51c30; }
.card h4:after { content: ' [-]'; color: #a51c30; }
`;
document.head.appendChild(style); 