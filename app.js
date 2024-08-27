let files=[];
const button=document.querySelector('.top button');
const form=document.querySelector('.form');
const container=document.querySelector('.container');
const text=document.querySelector('.inner');
const browse=document.querySelector('.select');
const input=document.querySelector('.file');



browse.addEventListener('click',()=> input.click());
input.addEventListener('change', () => {
    handleFiles(input.files);
  });
function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
    //   if (!file.type.startsWith('image/')) continue;
  
      const imgElement = document.createElement('div');
      imgElement.classList.add('image');
  
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
  
      const span = document.createElement('span');
      span.textContent = '×';
      span.addEventListener('click', () => {
        imgElement.remove();
      });
  
      imgElement.appendChild(img);
      imgElement.appendChild(span);
      document.querySelector('.container').appendChild(imgElement);
    }
  }

