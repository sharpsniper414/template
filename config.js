// ============================================================
//   SURPRISE WEBSITE — CONFIG FILE
//   Sirf yahi file edit karo, baaki sab automatically update!
// ============================================================

const CONFIG = {

  // 1. PASSWORD (4 digits only, e.g. "2011" for 20 November)
  password: "0000",

  // 2. HER NAME (jo bhi naam dikhana hai website pe)
  herName: "Tumhara Naam",

  // 3. YOUR NICKNAME (jo letter mein sign karoge)
  yourName: "Tumhara",

  // 4. SPECIAL DATE (jab pehli baar mile the)
  specialDate: "2000-01-01",           // Format: YYYY-MM-DD
  specialDateDisplay: "1 January 2000", // Jaise dikhega website pe

  // 5. GALLERY PHOTOS (photos/ folder mein daalo, yahan naam likhो)
  //    Agar kam photos hain toh woh entries hata do
  galleryPhotos: [
    { file: "img1.jpg",  caption: "Pehli yaad 🌸" },
    { file: "img2.jpg",  caption: "Woh pal 💖" },
    { file: "img3.jpg",  caption: "Khaas moment ✨" },
    { file: "img4.jpg",  caption: "Tumhari smile 💫" },
    { file: "img5.jpg",  caption: "Best din 🎀" },
    { file: "img6.jpg",  caption: "Yaad hai? 💕" },
  ],

  // 6. TOGETHER PHOTOS (together/ folder mein daalo)
  togetherPhotos: [
    { file: "img1.jpg",  caption: "Dono saath 💖" },
    { file: "img2.jpg",  caption: "Hamare pal 🌸" },
    { file: "img3.jpg",  caption: "Yeh waqt 💫" },
  ],

  // 7. TIMELINE (story page ke chapters)
  timeline: [
    {
      label:   "Chapter\nEk",
      heading: "Pehli Baar ✨",
      text:    "Pehli mulaqaat ka woh pal — yahan apni baat likhो."
    },
    {
      label:   "Chapter\nDo",
      heading: "Dheere Dheere 🌱",
      text:    "Dheere dheere jo hua — apne andaaz mein likhо."
    },
    {
      label:   "Chapter\nTeen",
      heading: "Jab Yaqeen Ho Gaya 💖",
      text:    "Woh pal jab sab clear ho gaya — likhо yahan."
    },
    {
      label:   "Chapter\nAb",
      heading: "Yeh Waqt, Yeh Pal 🎀",
      text:    "Aaj ki baat, aaj ke ehsaas — yahan likhо."
    },
  ],

  // 8. LETTER (message page)
  letterSalutation: "Meri Pyaari [Naam],",
  letterBody: [
    "Pehla paragraph — apne dil ki baat yahan likhо.",
    "Doosra paragraph — aur gehri baat yahan.",
    "Teesra paragraph — jo kehna mushkil tha woh yahan.",
    "Chautha paragraph — aage ki umeed yahan likhо.",
  ],
  letterSign: "Jo tumhe bahut miss karta hai 💜 👾",
  letterPS: "P.S. — Apna P.S. yahan likhо. 🌸",

  // 9. MEMORY JAR CARDS (yaadein page)
  memories: [
    { emoji: "🌅", back: "🌸", text: "Pehli mulaqaat ki yaad — yahan likhо." },
    { emoji: "😂", back: "💫", text: "Woh hassi wala pal — yahan likhо." },
    { emoji: "🌙", back: "✨", text: "Late night baatein — yahan likhо." },
    { emoji: "☕", back: "💖", text: "Chhoti si khushi — yahan likhо." },
    { emoji: "🎵", back: "🎀", text: "Woh ek gaana — yahan likhо." },
    { emoji: "💌", back: "🌺", text: "Jo kehna tha — yahan likhо." },
    { emoji: "⭐", back: "💝", text: "Khaas wala din — yahan likhо." },
    { emoji: "🌸", back: "💕", text: "Tumhari ek baat — yahan likhо." },
  ],

  // 10. WISH WALL (duaayein page)
  wishes: [
    { emoji: "🌸", text: "Pehli dua — apne dil se likhо." },
    { emoji: "💖", text: "Doosri dua — sachchi baat." },
    { emoji: "⭐", text: "Teesri dua — unke sapnon ke liye." },
    { emoji: "🎀", text: "Chauthi dua — unki khushi ke liye." },
    { emoji: "✨", text: "Paanchvi dua — unki smile ke liye." },
    { emoji: "🌺", text: "Chhaatvi dua — unke haath ke liye." },
    { emoji: "💌", text: "Saatvi dua — jo kehna tha." },
    { emoji: "🌙", text: "Aathvi dua — raat ke sukoon ke liye." },
  ],

  // 11. SURPRISE PAGE QUESTION
  surpriseQuestion: "Kya tum meri hogi? 💖",
  surpriseSubtext:  "Yeh sawaal bahut soch ke pooch raha hoon —",
  popupTitle:       "Main Jaanta Tha! 💖",
  popupLines: [
    "Tumne haan bol diya — ab toh record ho gaya! 📝",
    "Tumhare bina yeh sab adhoora tha.",
    "Tumhari ek haan ne poori duniya roshan kar di. 🌸",
  ],

  // 12. QUIZ QUESTIONS (funny/romantic apne hisaab se likhо)
  quizQuestions: [
    {
      q:    "Apna sawaal yahan likhо? 🌸",
      opts: ["Option 1", "Option 2", "Option 3", "Option 4"],
      ans:  0,  // 0=pehla, 1=doosra, 2=teesra, 3=chautha
      fc:   "Sahi! Yahan correct answer ka response likhо.",
      fw:   "Galat! Yahan wrong answer ka response likhо."
    },
    {
      q:    "Doosra sawaal? 💕",
      opts: ["Option A", "Option B", "Option C", "Option D"],
      ans:  1,
      fc:   "Bilkul sahi! 💖",
      fw:   "Nahi yaar! 😅"
    },
    {
      q:    "Teesra sawaal? 💫",
      opts: ["Option I", "Option II", "Option III", "Option IV"],
      ans:  2,
      fc:   "Perfect! 🌸",
      fw:   "Ek aur chance lo 💕"
    },
  ],

};
