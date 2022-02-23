const snakbar = document.getElementById('message-container');
const snaker = (type, mes, time = 4000) => {
  const para = document.createElement('p');
  para.classList.add('snakbar');
  para.innerHTML = `${mes} `;
  switch (type) {
    case 'error':
      para.classList.add('error');
      break;

    case 'success':
      para.classList.add('success');
      break;

    case 'remove':
      para.classList.add('remove');
      break;

    default:
      para.classList.add('error');
  }
  snakbar.appendChild(para);
  para.classList.add('fadeout');
  setTimeout(() => {
    snakbar.removeChild(para);
  }, time);
};

export default snaker;