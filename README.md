# 💖 Surprise Website Template

Ek romantic kawaii website — kisi bhi khaas insaan ke liye.
Sirf **config.js** edit karo — baaki sab automatic!

---

## 📁 Folder Structure

```
site/
├── config.js        ← SIRF YAHI EDIT KARO
├── index.html       ← Password + Home
├── story.html       ← Timeline
├── gallery.html     ← Uski photos
├── together.html    ← Dono ke saath
├── message.html     ← Love letter
├── quiz.html        ← Quiz game
├── yaadein.html     ← Memory flip cards
├── waqt.html        ← Live countdown
├── duaayein.html    ← Wish notes
├── surprise.html    ← Proposal + Runaway No button
├── style.css        ← Design (mat chhuoo)
├── shared.js        ← Logic (mat chhuoo)
├── photos/          ← Gallery photos yahan daalo
└── together/        ← Together photos yahan daalo
```

---

## ⚙️ Setup (Sirf 3 Steps!)

### Step 1 — config.js kholo aur fill karo

```js
const CONFIG = {
  password: "0000"                   // 4 digit password
  herName: "Name",                   // Uska naam
  yourName: "Tumhara",                 // Tumhara naam/nickname
  specialDate: "Special Date",           // YYYY-MM-DD format
  specialDateDisplay: "28 june 2026",
  ...
}
```

### Step 2 — Photos daalo

- **Uski photos** → `photos/` folder mein (img1.jpg, img2.jpg...)
- **Dono ke saath** → `together/` folder mein (img1.jpg, img2.jpg...)
- `config.js` mein file names aur captions update karo

### Step 3 — Browser mein kholo

`index.html` double-click karo — bas! 🎉

---

## 🔐 Password

- `config.js` mein `password: "2011"` change karo
- Koi bhi 4 digit number (ya zyada bhi) rakh sakte ho
- Date format mein rakho toh unhe guess karna easy hoga

---

## ✏️ Kya Kya Customize Ho Sakta Hai

| Config Key | Kya hai |
|------------|---------|
| `herName` | Bade naam wali heading |
| `timeline` | Story ke chapters |
| `letterBody` | Letter ke paragraphs |
| `memories` | Yaadein ke flip cards |
| `wishes` | Duaayein ke sticky notes |
| `quizQuestions` | Quiz ke sawaal + answers |
| `surpriseQuestion` | Proposal ka sawaal |
| `popupLines` | Haan bolne ke baad popup text |

---

## 💡 Tips

- Photos square crop mein best dikhti hain
- Letter mein apni sachchi baatein likhо — woh best lagta hai
- Quiz mein funny + romantic mix karo
- Password woh date rakho jo sirf woh jaane

---

Made with 💖 — Tumhara Surprise Website
