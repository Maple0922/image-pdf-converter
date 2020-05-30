pdfMake.fonts = {
  NotoSans: {
    normal: 'NotoSans.otf',
    bold: 'NotoSans.otf',
    italics: 'NotoSans.otf',
    bolditalics: 'NotoSans.otf'
  }
}

function previewFile() {
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  const previewImage = document.querySelector('.preview-image');
  const previewSpace = document.querySelector('.preview-space');
  const showButton = document.querySelector('.show-button');
  const downloadButton = document.querySelector('.download-button');

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    previewImage.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
    showButton.classList.remove('disabled');
    downloadButton.classList.remove('disabled');
    previewImage.style.display = "block";
    previewSpace.style.display = "none";
  } else {
    showButton.classList.add('disabled');
    downloadButton.classList.add('disabled');
    previewImage.style.display = "none";
    previewSpace.style.display = "block";
  }
}

var docDefinition = {
  content: 'This is an sample PDF printed with pdfMake. 日本語のテスト',
  defaultStyle: {
    font: 'NotoSans'
  }
};
