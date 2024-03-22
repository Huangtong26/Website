function searchManga(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const mangaDescriptions = document.querySelectorAll('.manga p');

  mangaDescriptions.forEach(desc => {
    desc.parentElement.style.display = 'none';
  });

  mangaDescriptions.forEach(desc => {
    if (desc.textContent.toLowerCase().includes(searchTerm)) {
      desc.parentElement.style.display = 'flex';
      desc.parentElement.classList.add('filtered-manga');
    }
  });
}

function filterByGenre(event) {
  event.preventDefault();

  const genre = event.target.textContent.toLowerCase();
  const allManga = document.querySelectorAll('.manga');

  allManga.forEach(manga => {
    manga.classList.remove('filtered-manga');
    const mangaGenre = manga.getAttribute('data-genre');

    if (mangaGenre === genre || genre === 'all') {
      manga.style.display = 'flex';
      manga.classList.add('filtered-manga');
    } else {
      manga.style.display = 'none';
    }
  });
}

document.querySelectorAll('.category-list a').forEach(button => {
  button.addEventListener('click', filterByGenre);
});

document.getElementById('search-form').addEventListener('submit', searchManga);