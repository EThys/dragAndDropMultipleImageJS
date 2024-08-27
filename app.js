let files=[];
const button=document.querySelector('.top button');
const form=document.querySelector('form');
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

  form.addEventListener('dragover', (e) => {
    e.preventDefault();
    form.classList.add('dragOver');
    text.innerHTML="Drop images here"
  });
  
  form.addEventListener('dragleave', () => {
    form.classList.remove('dragOver');
    text.innerHTML=`Drag and drop inages here or <span class="select">Browse</span>`
  });
  
  form.addEventListener('drop', (e) => {
    e.preventDefault();
    form.classList.remove('dragOver');
    console.log('Drop reussie');
    handleFiles(e.dataTransfer.files);
  });

