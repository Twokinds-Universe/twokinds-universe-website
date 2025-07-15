let pagesInfo = {
  pageNumber: 0,
  currentLanguage: 'en',
  isSketch: false,
  isGlow: true,
  isSpeechless: false,
};

let lastPageNumber = 1261;
const imageSourceBaseUrl = "https://twokinds-xyz.github.io"

async function fetchSketchAvailability() {
  let sketchAvailable;
  try {
    const response = await fetch(`${imageSourceBaseUrl}/pages/sketch/${pagesInfo.pageNumber + 1}.png`);
    if (response.status === 200) {
      sketchAvailable = true;
    } else {
      sketchAvailable = false;
    }
  } catch (error) {
    console.error('Error fetching sketch:', error);
  }

  return sketchAvailable;
}

async function fetchSpeechlessAvailability() {
  let speechlessAvailable;
  try {
    const response = await fetch(`${imageSourceBaseUrl}/pages/speechless/${pagesInfo.pageNumber + 1}.png`);
    if (response.status === 200) {
      speechlessAvailable = true;
    } else {
      speechlessAvailable = false;
    }
  } catch (error) {
    console.error('Error fetching speechless:', error);
  }

  return speechlessAvailable;
}

function updatePagePreviews() {
  const pagePreviewContainer = document.querySelector('.page-preview-container');
  const existingPreviews = Array.from(pagePreviewContainer.children);

  let startPage, endPage;
  if (pagesInfo.pageNumber + 1 < 3) {
    startPage = 1;
    endPage = Math.min(lastPageNumber, 5);
  } else if (pagesInfo.pageNumber + 1 >= lastPageNumber - 2) {
    endPage = lastPageNumber;
    startPage = Math.max(1, lastPageNumber - 4);
  } else {
    startPage = pagesInfo.pageNumber - 1;
    endPage = pagesInfo.pageNumber + 3;
  }

  const totalPages = endPage - startPage + 1;

  while (existingPreviews.length < totalPages) {
    const preview = document.createElement('a');
    const img = document.createElement('img');
    img.classList.add('page-preview', 'placeholder');
    preview.appendChild(img);
    pagePreviewContainer.appendChild(preview);
    existingPreviews.push(preview);
  }

  while (existingPreviews.length > totalPages) {
    pagePreviewContainer.removeChild(existingPreviews.pop());
  }

  existingPreviews.forEach((preview, index) => {
    const pageIndex = startPage + index;
    const img = preview.querySelector('img');

    // preview.href = `/?p=${pageIndex}`;

    preview.onclick = () => goToPage(pageIndex);

    img.src = `${imageSourceBaseUrl}/pages/preview/${pageIndex}.png`;
    img.alt = `Page ${pageIndex}`;

    img.classList.remove('current-page-preview');

    if (pageIndex === pagesInfo.pageNumber + 1) {
      img.classList.add('current-page-preview');
    }

    img.onload = () => {
      img.classList.remove('placeholder');
    };

    img.onerror = () => {
      img.classList.remove('placeholder');
      img.src = 'img/placeholder.png';
    };
  });
}

function update() {
  const url = new URL(window.location.href);
  url.searchParams.set('p', pagesInfo.pageNumber + 1);
  url.searchParams.set('l', pagesInfo.currentLanguage);
  if (fetchSketchAvailability()) {
    url.searchParams.set('s', pagesInfo.isSketch);
  };
  if (fetchSpeechlessAvailability()) {
    url.searchParams.set('sp', pagesInfo.isSpeechless);
  };
  window.history.replaceState({}, '', url.toString());

  document.querySelector('.image-container').classList.remove('page-error');

  const imgUrl = `${imageSourceBaseUrl}/pages/${pagesInfo.currentLanguage}/${pagesInfo.pageNumber + 1}.png`;
  const sketchUrl = `${imageSourceBaseUrl}/pages/sketch/${pagesInfo.pageNumber + 1}.png`;
  const speechlessUrl = `${imageSourceBaseUrl}/pages/speechless/${pagesInfo.pageNumber + 1}.png`;
  const currentUrl = pagesInfo.isSpeechless ? speechlessUrl : (pagesInfo.isSketch ? sketchUrl : imgUrl);

  fetchSketchAvailability().then(sketchAvailable => {
    sketchVerButton.disabled = !sketchAvailable;
  });

  fetchSpeechlessAvailability().then(speechlessAvailable => {
    speechlessVerButton.disabled = !speechlessAvailable;
  });

  document.querySelector('html').lang = pagesInfo.currentLanguage;
  document.querySelector('title').textContent = `Page ${pagesInfo.pageNumber + 1}`;
  page.src = currentUrl;
  // blurredPage.src = currentUrl;
  downloadButton.href = currentUrl;
  downloadButton.download = `${pagesInfo.currentLanguage}${pagesInfo.pageNumber + 1}.png`;

  page.onerror = function () {
    this.onerror = null;
    this.src = 'img/placeholder.png';
    document.querySelector('.image-container').classList.add('page-error');
  };

  // blurredPage.onerror = function () {
  //   this.onerror = null;
  //   this.src = 'img/placeholder.png';
  // };

  // lastPageNumber ? pageCounter.textContent = `${pagesInfo.pageNumber + 1}/${lastPageNumber} - ${Math.round(pagesInfo.pageNumber / lastPageNumber * 100)}%` : pageCounter.textContent = `${pagesInfo.pageNumber + 1}/loading...`;
  pageCounter.textContent = `${pagesInfo.pageNumber + 1}/${lastPageNumber} - ${Math.round(pagesInfo.pageNumber / lastPageNumber * 100)}%`;
  updatePagePreviews();
  updateButtonState();
};

document.addEventListener('DOMContentLoaded', function () {
  const pageParam = getQueryParam('p');
  const langParam = getQueryParam('l');
  const isSketchParam = getQueryParam('s');
  const isSpeechlessParam = getQueryParam('sp');

  if (pageParam !== null && !isNaN(pageParam)) {
    pagesInfo.pageNumber = parseInt(pageParam, 10) - 1;
  }

  if (langParam !== null) {
    pagesInfo.currentLanguage = langParam;
  }

  if (isSketchParam !== null) {
    pagesInfo.isSketch = isSketchParam === 'true';
  }

  if (isSpeechlessParam !== null) {
    pagesInfo.isSpeechless = isSpeechlessParam === 'true';
  }

  languageSelect.value = pagesInfo.currentLanguage;

  update();
});

const page = document.querySelector('.page');
const blurredPage = document.querySelector('.blurred-page');
const pageCounter = document.querySelector('.page-number');
const sketchVerButton = document.getElementById('sketch-ver-button');
const speechlessVerButton = document.getElementById('speechless-ver-button');
const goToForm = document.getElementById('go-to-page-form');
const languageSelect = document.getElementById('language');
const downloadButton = document.getElementById('download');
let isToolsShown = false;
let isVisible = true;

languageSelect.addEventListener('change', function () {
  pagesInfo.currentLanguage = languageSelect.value;
  update();
});

let changePage = function (action) {
  if (action === 'first') {
    pagesInfo.pageNumber = 0;
  } else if (action === 'last') {
    pagesInfo.pageNumber = lastPageNumber - 1;
  } else if (action === 'previous' && pagesInfo.pageNumber > 0) {
    pagesInfo.pageNumber -= 1;
  } else if (action === 'next' && pagesInfo.pageNumber < lastPageNumber - 1) {
    pagesInfo.pageNumber += 1;
  }
  update();
};

goToForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let pageInput = document.getElementById('page-input').valueAsNumber;
  goToPage(pageInput);
  document.getElementById('page-input').value = "";
});

sketchVerButton.addEventListener('click', function() {
  pagesInfo.isSketch = !pagesInfo.isSketch;
  if (pagesInfo.isSketch) {
    pagesInfo.isSpeechless = false;
  }
  update();
});

speechlessVerButton.addEventListener('click', function() {
  pagesInfo.isSpeechless = !pagesInfo.isSpeechless;
  if (pagesInfo.isSpeechless) {
    pagesInfo.isSketch = false;
  }
  update();
});

function getQueryParam(param, url = window.location.href) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get(param);
};

function updateButtonState() {
  sketchVerButton.textContent = pagesInfo.isSketch 
    ? texts['en'].returnButton 
    : texts['en'].sketchVerButton;
  speechlessVerButton.textContent = pagesInfo.isSpeechless 
    ? texts['en'].returnButton 
    : texts['en'].speechlessVerButton;
};

document.addEventListener('keydown', function(event) {
  if (event.shiftKey && event.key === 'ArrowLeft') {
    changePage('first');
  } else if (event.shiftKey && event.key === 'ArrowRight') {
    changePage('last');
  } else if (event.key === 'ArrowLeft') {
    changePage('previous');
  } else if (event.key === 'ArrowRight') {
    changePage('next');
  }
});

function goToPage(pageIndex) {
  if (pageIndex >= 1 && pageIndex <= lastPageNumber) {
    pagesInfo.pageNumber = pageIndex - 1;
    update();
  }
}
