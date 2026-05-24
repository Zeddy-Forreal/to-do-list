  const scroll     = document.getElementById('taskScroll');
  const input      = document.getElementById('taskInput');
  const addBtn     = document.getElementById('addBtn');
  const clearBtn   = document.getElementById('clearBtn');
  const countNum   = document.getElementById('countNum');
  const emptyState = document.getElementById('emptyState');
  const themeBtn   = document.getElementById('themeBtn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
(function () {
  let tasks = [];
  let filter = 'all';

  if(localStorage.getItem("todo_tasks")){
    tasks=JSON.parse(localStorage.getItem("todo_tasks"))

    render()
  }



  function save() {
    localStorage.setItem('todo_tasks', JSON.stringify(tasks));
  }

  function esc(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function render() {
    scroll.innerHTML = ""

    const visible = tasks.filter(t => {
      if (filter === 'active') return !t.done;
      if (filter === 'done')   return t.done;
      return true;
    });

    emptyState.style.display = visible.length === 0 ? 'flex' : 'none';

    visible.forEach(t => {
      const row = document.createElement('div');
      row.className = 'task-row' + (t.done ? ' done' : '');
      row.dataset.id = t.id;
      row.innerHTML = `
        <button class="check" aria-label="Toggle">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
        <span class="task-text">${esc(t.text)}</span>
        <span class="done-pill">done</span>
        <button class="del" aria-label="Delete">
          <svg viewBox="0 0 24 24">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
          </svg>
        </button>`;

      row.querySelector('.check').onclick = () => toggle(t.id);
      row.querySelector('.del').onclick   = () => remove(t.id, row);
      scroll.appendChild(row);
    });

    updateCount();
  }

  function updateCount() {
    countNum.textContent = tasks.filter(t => !t.done).length;
  }

  function toggle(id) {
    const t = tasks.find(x => x.id === id);
    if (!t) return;
    t.done = !t.done;
    save();
    render();
  }

  function remove(id, row) {
    row.style.transition = 'opacity 0.15s, transform 0.15s';
    row.style.opacity    = '0';
    row.style.transform  = 'translateX(12px)';
    setTimeout(() => {
      tasks = tasks.filter(x => x.id !== id);
      save();
      render();
    }, 160);
  }

  function addTask() {
    const text = input.value.trim();
    if (!text) return;
    tasks.unshift({ id: Date.now(), text, done: false });
    save();
    render();
    input.value = '';
    input.focus();
  }

  addBtn.onclick = addTask;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });

  clearBtn.onclick = () => {
    tasks = tasks.filter(t => !t.done);
    save();
    render();
  };

  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      filter = btn.dataset.f;
      render();
    };
  });

  let light = false;
  themeBtn.onclick = () => {
    light = !light;
    document.body.classList.toggle('light', light);
    document.getElementById('themeIcon').innerHTML = light
      ? '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>'
      : `<circle cx="12" cy="12" r="5"/>
         <line x1="12" y1="2" x2="12" y2="4"/>
         <line x1="12" y1="20" x2="12" y2="22"/>
         <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>
         <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
         <line x1="2" y1="12" x2="4" y2="12"/>
         <line x1="20" y1="12" x2="22" y2="12"/>
         <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>
         <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>`;
  };


})();