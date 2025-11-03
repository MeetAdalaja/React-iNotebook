# React iNotebook — Secure Notes (MERN)

A clean, full‑stack **MERN** app for taking and organizing notes.  
Create, edit, search, and delete notes with **JWT‑based authentication** and a responsive **React** UI.

[![Last commit](https://img.shields.io/github/last-commit/MeetAdalaja/React-iNotebook)](https://github.com/MeetAdalaja/React-iNotebook/commits/main)
[![Repo size](https://img.shields.io/github/repo-size/MeetAdalaja/React-iNotebook)](https://github.com/MeetAdalaja/React-iNotebook)
[![Open issues](https://img.shields.io/github/issues/MeetAdalaja/React-iNotebook)](https://github.com/MeetAdalaja/React-iNotebook/issues)
![Stack](https://img.shields.io/badge/React-Node-Express-MongoDB-0b7285)

---

## ✨ Features

- 🔐 **Sign up / Login** with hashed passwords and **JWT** auth
- 📝 **CRUD** notes (create, read, update, delete)
- 🏷️ Optional **tags/categories** and **search**
- 📱 **Responsive** UI (desktop & mobile)
- 🔁 Auto‑refresh after edits; toasts/alerts for UX feedback
- 🧰 Clean API separation (**backend**/**frontend**)

> Your repository might include a subset of these; keep what applies and remove the rest.

---

## 🖥️ Live Demo

**▶️ https://react-i-notebook.vercel.app/**

---

## 🗂️ Repository Structure (typical)

```text
React-iNotebook/
├─ backend/                # Express API (auth + notes)
│  ├─ src/
│  │  ├─ models/          # Mongoose schemas (User, Note)
│  │  ├─ routes/          # /api/auth, /api/notes
│  │  ├─ controllers/     # business logic
│  │  ├─ middleware/      # auth (JWT verify), error handler
│  │  └─ index.js         # app bootstrap
│  ├─ package.json
│  └─ .env.example
├─ frontend/               # React app (UI)
│  ├─ src/
│  │  ├─ components/      # NoteCard, NoteForm, Navbar, Toast
│  │  ├─ pages/           # Login, Register, Notes
│  │  ├─ context/         # Auth/Notes context or Redux store
│  │  └─ main.jsx|index.js
│  ├─ package.json
│  └─ .env.example
└─ README.md
```

> If your folder names differ (`server/` instead of `backend/`, CRA vs Vite), adjust commands below accordingly.

---

## ⚙️ Local Development

### 1) Clone
```bash
git clone https://github.com/MeetAdalaja/React-iNotebook.git
cd React-iNotebook
```

### 2) Backend setup
```bash
cd backend
npm install
cp .env.example .env          # then edit values (see ENV below)
npm run dev                   # or: npm start
```
Backend should start on e.g. `http://localhost:5000`

### 3) Frontend setup
Open a **new terminal**:
```bash
cd frontend
npm install
npm run dev                   # Vite
# or: npm start               # CRA
```
Frontend will run on e.g. `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA).

---

## 🔑 Environment Variables

### Backend (`backend/.env`)
```ini
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
JWT_SECRET=change_this_to_a_long_random_string
CORS_ORIGIN=http://localhost:5173  # or http://localhost:3000
```
- **MONGO_URI**: Use **MongoDB Atlas** or a local instance (`mongodb://127.0.0.1:27017/inotebook`).
- **CORS_ORIGIN**: Frontend origin for CORS.

### Frontend (`frontend/.env`)
For **Vite**:
```ini
VITE_API_BASE=http://localhost:5000/api
```
For **CRA**:
```ini
REACT_APP_API_BASE=http://localhost:5000/api
```

---

## 🔌 REST API (typical)

### Auth
```
POST   /api/auth/register   { name, email, password }
POST   /api/auth/login      { email, password }      -> { token }
GET    /api/auth/me         Authorization: Bearer <token>
```

### Notes (protected)
```
GET    /api/notes
POST   /api/notes           { title, body, tags? }
PUT    /api/notes/:id       { title?, body?, tags? }
DELETE /api/notes/:id
```
> Send `Authorization: Bearer <token>` headers for protected routes.

---

## ☁️ Deployment

### Frontend (Vercel/Netlify)
1. Import `frontend/` → Build: `npm run build`
2. Output dir:
   - Vite → `dist`
   - CRA → `build`
3. Set env vars (e.g., `VITE_API_BASE`) in project settings

### Backend (Render/Railway/Fly/Heroku)
1. Connect `backend/`
2. Add env vars: `PORT`, `MONGO_URI`, `JWT_SECRET`, `CORS_ORIGIN`
3. Deploy and note the public URL, e.g., `https://react-inotebook-api.onrender.com`
4. Point the frontend `API_BASE` to `<backend-url>/api`

**CORS tip:** allow your production frontend origin via `CORS_ORIGIN` or a whitelist.

---

## 🧭 Roadmap

- [ ] **Edit in place** and rich‑text notes (Quill/TipTap)
- [ ] **Tags** with quick filter and color chips
- [ ] **Share** note (public link) and **trash/restore**
- [ ] **Rate limiting** and **audit logs**
- [ ] E2E tests (Playwright/Cypress) + API tests (Jest/Supertest)

---

## 🐞 Troubleshooting

- **CORS blocked:** confirm `CORS_ORIGIN` matches your frontend URL
- **JWT errors:** check auth header spelling (`Authorization: Bearer <token>`)
- **Mongo connect fails:** IP allow‑list / SRV string / DNS in MongoDB Atlas
- **Build errors:** delete `node_modules` + lockfile → reinstall; clear `.env` typos

---

## 📄 License

If you plan to open‑source, add a `LICENSE` (e.g., MIT).  
Without a license, all rights are reserved by the author.

---

## 🙏 Credits

Built by **Meet Adalaja** with the MERN stack.  
Thanks to the open‑source community for libraries and tooling.
