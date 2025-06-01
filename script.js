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
  '"You’re such a bright light in our lives!" – Neha',
  '"Thank you for being the most supportive friend!" – Arjun',
  '"May your year be filled with laughter and dreams!" – Priya'
];

function showMessage(index) {
  const box = document.getElementById('message-box');
  box.style.display = 'block';
  box.textContent = messages[index];
}
