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

  reader.addEventListener("load", setUri, false);

  function setUri(){
    previewImage.src = reader.result;
  }

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


function openPDF(){
  const previewImage = document.querySelector('.preview-image');
  dataURI = previewImage.src;
  var docDefinition = {
    content: [
      {
        image: dataURI,
        width: 595,
        height: 841,
        margin: [-40, -40, -40, -40]
      }
    ]
  };
  pdfMake.createPdf(docDefinition).open();
}

function downloadPDF(){
  const previewImage = document.querySelector('.preview-image');
  dataURI = previewImage.src;
  var docDefinition = {
    content: [
      {
        image: dataURI,
        width: 595,
        height: 841,
        margin: [-40, -40, -40, -40]
      }
    ]
  };
  pdfMake.createPdf(docDefinition).download('title.pdf');
}
