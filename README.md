# 🧩 Drag-and-Drop Playground

A simple and beautiful React application for creating a visual playground with drag-and-drop functionality using **jQuery** and styled using **Tailwind CSS**.

This app allows users to drag **Text**, **Image**, and **Shape** elements from the sidebar into the playground, reposition them, and edit their properties.

---

## 🚀 Features

- 🔧 Drag-and-drop functionality using jQuery
- 🎨 Real-time element property editing
- 🧱 Supports:
  - Text (with style controls)
  - Images (set/change source)
  - Shapes (color fill, width, height)
- 📱 Fully responsive layout using Tailwind CSS
- 🧠 State-managed playground (data structure for save/load later)

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [jQuery](https://jquery.com/)

---

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ak-k13579/drag-drop-playground.git
   cd drag-drop-playground

2. **Install dependencies**
   npm install
3. **Run the app**
   npm run dev
4. **Open in browser**
   http://localhost:3000
5. **Project Structure**
       src/
    ├── assets/             # Static files (icons, images)
    ├── components/
    │   ├── Sidebar.jsx         # Draggable element buttons (Text, Image, Shape)
    │   ├── Playground.jsx      # Main droppable canvas
    │   ├── PropertiesPanel.jsx # Right panel to edit selected element
    ├── App.jsx
    └── main.jsx

## 🧮 How It Works

🧱 **Sidebar**
Contains 3 draggable icons:
  
  🅰️ Text
  
  🖼 Image
  
  ⬛ Shape (square)
  
🧲 **Playground**
Drop elements from sidebar into playground.

Use jQuery's draggable and droppable to move/position.

Click an element to show its editable properties.


⚙️ **Properties Panel**
Dynamically updates based on the selected element type.

Text: Font family, size, bold, italic, underline.

Image: Change image source.

Shape: Fill color, width, height.

All elements: Width, height.

🧑‍💻 **Author**
Attaullah Khan Sr. Front End Developer

Portfolio: https://www.attaullahkhanweb.com

GitHub: https://github.com/ak-k13579

