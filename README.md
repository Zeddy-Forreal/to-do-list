<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

# ✅ To-Do List

**A clean, minimal task manager built with pure HTML, CSS, and JavaScript.**  
No frameworks, no installs — just open and start getting things done.

[Features](#-features) · [Getting Started](#-getting-started) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

- ➕ **Add Tasks** — Type and hit Enter or click Add to create a task instantly
- ✅ **Complete Tasks** — Click any task to mark it done with a strikethrough
- 🗑️ **Delete Tasks** — Remove individual tasks with the trash button
- 🔍 **Filter Views** — Switch between All, Active, and Completed tasks
- 🧹 **Clear Completed** — Remove all finished tasks in one click
- 💾 **Persistent Storage** — Tasks are saved to localStorage and survive page refreshes
- 🌙 **Dark / Light Mode** — Toggle between themes with a single button
- 📱 **Responsive** — Works cleanly on desktop, tablet, and mobile

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Zeddy-Forreal/to-do-list.git
cd to-do-list
```

### 2. Open in browser

No build step, no installs. Just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 3. Start adding tasks

Type into the input field and press **Enter** or click **Add**. Your tasks save automatically — they'll still be there when you close and reopen the page.

---

## 📁 File Structure

```
to-do-list/
├── index.html            App markup and structure
├── style/
│   └── main.css          All styles — layout, themes, animations, responsive
└── javascript/
    └── main.js           All logic — tasks, filters, localStorage, dark mode
```

---

## 🎨 Customization

All colors are CSS custom properties at the top of `main.css`. Switch up the whole look by editing just these:

```css
:root {
  --c-bg:       #111318;   /* Page background         */
  --c-surface:  #1a1d25;   /* Card background          */
  --c-line:     #2e3240;   /* Borders and dividers     */
  --c-accent:   #a78bfa;   /* Primary accent (purple)  */
  --c-green:    #34d399;   /* Completed task color     */
  --c-red:      #f87171;   /* Delete button color      */
  --c-text:     #f0f0f5;   /* Primary text             */
  --c-muted:    #6b7080;   /* Secondary / dim text     */
}
```

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
