import React from "react";
import "./azbuka.css";


// const LearningPage = () => {
//   return (
//     <div>
//       <div style={styles.learningPage}>
//         <header style={styles.learningHeader}>
//           <h1 style={styles.h1}>Изучай жестовый язык</h1>
//           <p>Добро пожаловать! Здесь ты можешь учиться жестовому языку легко и с удовольствием.</p>
//         </header>

//         <section>
//           <h2 style={styles.sectionTitle}>Обучающие видео</h2>
//           <div style={styles.videosGrid}>
//             {videos.map((video, i) => (
//               <div key={i} style={styles.videoCard}>
//                 <iframe
//                   src={video.url}
//                   title={video.title}
//                   style={styles.iframe}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//                 <h3 style={styles.videoTitle}>{video.title}</h3>
//               </div>
//             ))}
//           </div>
//         </section>
        

//         <section>
//           <h2 style={styles.sectionTitle}>Алфавит жестами</h2>
//           <div className="alphabet-grid">
//             {alphabet.map((item, index) => (
//               <div className="alphabet-card" key={index}>
//                 <div className="card-face front">
//                   <img src={item.frontImage} alt={item.frontDescription} />
//                   <p>{item.frontDescription}</p>
//                 </div>
//                 <div className="card-face back">
//                   <img src={item.backImage} alt={item.backDescription} />
//                   <p>{item.backDescription}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>

//       <footer style={styles.footer}>© 2025 MANP — Все права защищены</footer>
//     </div>
//   );
// };

const videos = [
  { title: "Алфавит жестами", url: "https://www.youtube.com/embed/jtbwEalS0CE?si=7JRvYGiYgrPUlq-L" },
  { title: "Простые фразы", url: "https://www.youtube.com/embed/fotbHsZdw4Y?si=2Ut02sPQ0GMmdA2W" },
  { title: "Повседневное общение", url: "https://www.youtube.com/embed/jgNex8M_tKI?si=DO9erAt3SrhSnlWI" },
  { title: "Алфавит", url: "https://www.youtube.com/embed/jtbwEalS0CE?si=W4XaXYFREl8a8YIJ" },
  { title: "Жесты для общения", url: "https://www.youtube.com/embed/l4VmBNIVpfE?si=nOMwKM74YGTUyJuw" }
];

const alphabet = [
  { letter: "A", frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHykc0bx14IH-RaI49CSfjO8PK-gZfWbGdww&s", frontDescription: "Жест для буквы А", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/hello.svg", backDescription: "Жест для слова 'Привет'" },
  { letter: "B", frontImage: "https://www.clipartbest.com/cliparts/biy/prA/biyprAA9T.png", frontDescription: "Жест для буквы Б", backImage: "https://preview.redd.it/im-working-on-a-constructed-sign-language-my-first-one-and-v0-e3slo611ilfa1.jpg?width=640&crop=smart&auto=webp&s=3bf74b93e51dee4fc08fb66225897a4745aaa7b3", backDescription: "Жест для слова 'Спасибо'" },
  { letter: "C", frontImage: "https://1000logos.net/wp-content/uploads/2023/08/ASL-Alphabet-C.png", frontDescription: "Жест для буквы В", backImage: "https://kidscarehomehealth.com/wp-content/uploads/2022/08/KCHH-sign-language-goodbye.jpg", backDescription: "Жест для слова 'Пока'" },
  { letter: "D", frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmo5v8A1zsBpGeoIR9tR5LuQlIihCk9NgdiRfgpTA53hoX_2eErOhlTA4Y-_8YbVkTBWc&usqp=CAU", frontDescription: "Жест для буквы Г", backImage: "https://i.pinimg.com/736x/56/49/2b/56492b5f2f833fc0674d4eefbb9aaba9.jpg", backDescription: "Жест для слова 'Пожалуйста'" },
  { letter: "E", frontImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sign_language_E.svg/286px-Sign_language_E.svg.png", frontDescription: "Жест для буквы Д", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/sorry.svg", backDescription: "Жест для слова 'Прости'" },
  { letter: "F", frontImage: "https://preview.redd.it/xr8i1rf2jno91.jpg?width=546&format=pjpg&auto=webp&s=c8f35609c8211871ac89e14483691308cb67297f", frontDescription: "Жест для буквы Е", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/yes.svg", backDescription: "Жест для слова 'Да'" },
  { letter: "G", frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5AssmLog6-FgG1ubuHud9NKRb4D4k4B0OgA&s", frontDescription: "Жест для буквы Ё", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/no.svg", backDescription: "Жест для слова 'Нет'" },
  { letter: "H", frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjAQcJcRbZxmCG4IRXzIVcxbV8ByrtzG9yw&s", frontDescription: "Жест для буквы Ж", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/help.svg", backDescription: "Жест для слова 'Помоги'" },
  { letter: "I", frontImage: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Sign_language_J.svg", frontDescription: "Жест для буквы З", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/sorry.svg", backDescription: "Жест для слова 'Извините'" },
  { letter: "J", frontImage: "https://ih1.redbubble.net/image.753006531.0378/tst,small,845x845-pad,1000x1000,f8f8f8.jpg", frontDescription: "Жест для буквы И", backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyoY5TIGM1ZVsAeNTcKpff0vP9uXytrA6vw&s", backDescription: "Жест для слова 'Счастливо'" },
  { letter: "K", frontImage: "https://as2.ftcdn.net/v2/jpg/02/76/05/21/1000_F_276052143_xg9iJXxTjlbQEPsABLFdUPU47eXX2ASq.jpg", frontDescription: "Жест для буквы Й", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/friend.svg", backDescription: "Жест для слова 'Друг'" },
  { letter: "L", frontImage: "https://www.creativefabrica.com/wp-content/uploads/2020/06/10/1591774810/ASL-Alphabet-M.jpg", frontDescription: "Жест для буквы К", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/please.svg", backDescription: "Жест для слова 'Пожалуйста'" },
  { letter: "M", frontImage: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Sign_language_N.svg", frontDescription: "Жест для буквы Л", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/help.svg", backDescription: "Жест для слова 'Помощь'" },
  { letter: "N", frontImage: "https://ih1.redbubble.net/image.753008945.0453/st,small,507x507-pad,600x600,f8f8f8.u2.jpg", frontDescription: "Жест для буквы М", backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbiiKqIdX7IrwWTspCTzzdjC4c6TS5W7spQ&s", backDescription: "Жест для слова 'Я'" },
  { letter: "O", frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xbYkskuVPPjkQKu9Pl9q9IWzj1HCPZFm6A&s", frontDescription: "Жест для буквы Н", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/okay.svg", backDescription: "Жест для слова 'Хорошо'" },
  { letter: "P", frontImage: "https://upload.wikimedia.org/wikipedia/commons/3/34/Sign_language_Q.svg", frontDescription: "Жест для буквы О", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/excuse_me.svg", backDescription: "Жест для слова 'Пожалуйста'" },
  { letter: "Q", frontImage: "https://www.creativefabrica.com/wp-content/uploads/2020/06/11/1591860625/ASL-Alphabet-R.jpg", frontDescription: "Жест для буквы П", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/see.svg", backDescription: "Жест для слова 'Смотри'" },
  { letter: "R", frontImage: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Sign_language_S.svg", frontDescription: "Жест для буквы Р", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/yes.svg", backDescription: "Жест для слова 'Да'" },
  { letter: "S", frontImage: "https://upload.wikimedia.org/wikipedia/commons/1/13/Sign_language_T.svg", frontDescription: "Жест для буквы С", backImage: "https://i.pinimg.com/originals/6b/d1/13/6bd1130a49153484b49b2172748893e2.gif", backDescription: "Жест для слова 'Любить'" },
  { letter: "T", frontImage: "https://i.ytimg.com/vi/spieu1DHQPQ/maxresdefault.jpg", frontDescription: "Жест для буквы Т", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/BabySignLanguage/DictionaryPages/apple-preview-png.png", backDescription: "Жест для слова 'Orange'" },
  { letter: "U", frontImage: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sign_language_F.svg", frontDescription: "Жест для буквы У", backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2tg5j-y3OrfmgEYngXpPIvKcCL_GOOQ2vQ&s", backDescription: "Жест для слова 'До свидания'" },
  { letter: "V", frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefB84yTBETjaW-QAVSeGVzwmX_O0Uhuef_A&s", frontDescription: "Жест для буквы Ф", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/eat.svg", backDescription: "Жест для слова 'Eat'" },
  { letter: "W", frontImage: "https://ih1.redbubble.net/image.753012742.0566/st,small,507x507-pad,600x600,f8f8f8.u1.jpg", frontDescription: "Жест для буквы Х", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/drink.svg", backDescription: "Жест для слова 'Drink'" },
  { letter: "X", frontImage: "https://upload.wikimedia.org/wikipedia/commons/8/83/Sign_language_W.svg", frontDescription: "Жест для буквы Ц", backImage: "https://i.pinimg.com/736x/4f/dc/60/4fdc60b0048637e676fe682d168f9fbb.jpg", backDescription: "Жест для слова 'Sun'" },
  { letter: "Y", frontImage: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Sign_language_X.svg", frontDescription: "Жест для буквы Ч", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/bathroom.svg", backDescription: "Жест для слова 'Bathroom'" },
  { letter: "Z", frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRz_6i0YmNWy9n9Jd6x82jUDWYxQT4e_bJxQ&s", frontDescription: "Жест для буквы Щ", backImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/want.svg", backDescription: "Жест для слова 'Want'" },
  
 
];

const Azbuka = () => {
  return (
    <div className="azbuka-container">
       <section>
          <h2 style={styles.sectionTitle}>Алфавит жестами</h2>
          <div className="alphabet-grid">
            {alphabet.map((item, index) => (
              <div className="alphabet-card" key={index}>
                <div className="card-face front">
                  <img src={item.frontImage} alt={item.frontDescription} />
                  <p>{item.frontDescription}</p>
                </div>
                <div className="card-face back">
                  <img src={item.backImage} alt={item.backDescription} />
                  <p>{item.backDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      <h1>Изучаем Алфавит Жестов</h1>
      <h4>наведи на картинку что бы изучить слова</h4>
      <img className="ser" src="https://cdn-icons-png.flaticon.com/512/6385/6385287.png" alt="" />
      
      <div className="alphabet-grid">
        {alphabet.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={item.frontImage} alt={item.letter} />
                <p>{item.letter}</p>
              </div>
              <div className="card-back">
                <img src={item.backImage} alt={item.letter} />
                <p>{item.backDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Azbuka;
