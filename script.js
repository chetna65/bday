// Page 1 - Balloons
// if (document.body.classList.contains('balloon-page')) {
//   for (let i = 0; i < 20; i++) {
//     const balloon = document.createElement('div');
//     balloon.className = 'balloon';
//     balloon.style.position = 'absolute';
//     balloon.style.left = Math.random() * window.innerWidth + 'px';
//     balloon.style.bottom = '-100px';
//     balloon.style.width = '40px';
//     balloon.style.height = '55px';
//     balloon.style.borderRadius = '50%';
//     balloon.style.background = 'radial-gradient(circle at 30% 30%, #ff6f61, #ff4e50)';
//     balloon.style.animation = `float ${Math.random() * 4 + 4}s ease-in infinite`;
//     document.body.appendChild(balloon);
//   }
// }


// Page 3 - Friend Messages
const messages = [
  `Anu happy birthday dear , welcome to grp of 19 and ha haste rahe hasate rahe and keep smiling\n
  😊– Vedika`,



  `"Happiest birthday Ananya ✨
  Its great to have you as friend
I always enjoy listening to you and all your stories & I don’t  know how you able to make me laugh on silliest things .
Once again wishing you happy birthday and sending your way bouquet of happiness.❤" – Mansi Gupta`,



  `"Although I haven’t known you for long, the moments I’ve spent have been truly memorable. I’m grateful to have
   a friend like you. Wishing you a joyful and wonderful birthday, filled with love and happiness!" – Azma`,



  `"Anu, today is a very special day for your family and your close ones because they got YOU as their daughter, sister and friend😌.
Ananya, I wish you a veryyyyyy Happyyyyyyy Birthdayyyyyyy✨🤍. 
I hope that you have an extremely wonderful day filled with joy, blessings, laughter and enjoy it to the fullest😁😎🥂.
Once again, Happyyyyyy Birthday." – Madhura`,



  `"Many many happy returns of the day Ananya.
Keep that lovely smile always on. Wishing you the best in everything you do. 
Happy Birthday to the best Dancer ! ❤" – Mansi Jain`,



  `"Meri pyaari Ananya🪄
It's just great to have a friend like you.💕 Tune tb mujhe smjha jb koi nhi smjh skta tha. Tune mujhe apna frustration ko express krne ke liye space diya.
Thank you so much for understanding me and being there for me.💝 Happy Birthday to you once again.🥳 May you have a wonderful life ahead.✨ May god bless you with lots of opportunities and success.📈" – Chetna`,


  `"Happy birthday ananya😌✨may is b'day ke sath👀 tu aur pyaree dancerr bne🙂‍↔vesee to tuu already hai 👀ke humare to apse akhe he Nhii htte✨.😌aur esaa he apna bhn vala rishta bna rhe (diduuuu😌)." – Shraddha`,


  `Wishing you love, laughter, and everything that makes your heart smile today and always.
   Here’s to all the memories we’ve made and all the ones yet to come.
   Keep smiling , Keep growing and  may you future shine as bright as a star 💫
   Once Again A Very happy Birthday dear Ananyaaaa 🎀
   – Bhumika`,



  `"Helloooo sweetpie, Have a wonderful wonderful year ahead! Keep smiling always and never let anyone defame your shine! ☀" – Divya`
];


function showMessage(index) {
  const box = document.getElementById('message-box');
  box.style.display = 'block';
  box.textContent = messages[index];
}
