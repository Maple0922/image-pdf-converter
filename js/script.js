function display(isExistFile,isExistFileName) {
  const previewImage = document.querySelector('.preview-image');
  const previewSpace = document.querySelector('.preview-space');
  const showButton = document.querySelector('.show-button');
  const downloadButton = document.querySelector('.download-button');
  const spShowButton = document.querySelector('.sp-show-button');

  if(isExistFile){
    previewImage.style.display = "block";
    previewSpace.style.display = "none";
  }else{
    previewImage.style.display = "none";
    previewSpace.style.display = "block";
    showButton.classList.add('disabled');
    downloadButton.classList.add('disabled');
    spShowButton.classList.add('disabled');
  }

  if (isExistFile && isExistFileName) {
    showButton.classList.remove('disabled');
    downloadButton.classList.remove('disabled');
    spShowButton.classList.remove('disabled');
  } else {
    showButton.classList.add('disabled');
    downloadButton.classList.add('disabled');
    spShowButton.classList.add('disabled');
  }

  let windowWidth = document.documentElement.clientWidth;
  console.log(windowWidth);
  if (windowWidth < 767 && isExistFile){
    spShowButton.classList.remove('disabled');
  }
}

function previewFile() {
  const file = document.querySelector('input[type=file]').files[0];
  const fileName = document.querySelector('.file-name-input').value;
  const previewImage = document.querySelector('.preview-image');

  loadImage.parseMetaData(file, (data) => {
    var options = {
      canvas: true
    };
    if (data.exif) {
      options.orientation = data.exif.get('Orientation');
    }
    loadImage(file, (canvas) => {
      var dataUri = canvas.toDataURL('image/*');
      previewImage.src = dataUri;
    }, options);
  });

  display(file,fileName);
}

function checkFileName() {
  const file = document.querySelector('input[type=file]').files[0];
  const fileName = document.querySelector('.file-name-input').value;

  display(file,fileName);
}


function openPDF(){
  const previewImage = document.querySelector('.preview-image');
  dataURI = previewImage.src;
  var docDefinition = {
    content: [
      {
        image: dataURI,
        width: 595,
        // height: 841,
        margin: [-40, -40, -40, -40]
      }
    ]
  };
  pdfMake.createPdf(docDefinition).open();
}

function downloadPDF(){
  const previewImage = document.querySelector('.preview-image');
  const downloadFileName = document.querySelector('.file-name-input').value + '.pdf';
  dataURI = previewImage.src;
  var docDefinition = {
    content: [
      {
        image: dataURI,
        width: 595,
        // height: 841,
        margin: [-40, -40, -40, -40]
      }
    ]
  };
  pdfMake.createPdf(docDefinition).download(downloadFileName);
}
