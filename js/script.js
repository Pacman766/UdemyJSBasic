/* Задания на урок:

1) Реализовать функционал, чтобы после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const MenuDB = {
    menu: ['Фильмы', 'Сериалы', 'Мультфильмы', 'Клипы', 'Трейлеры'],
  };

  const adDelete = document.querySelectorAll('.promo__adv img'),
    bg = document.querySelector('.promo__bg'),
    genre = bg.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    // menuList = document.querySelector('.promo__menu-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkBox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value; // получаем введенное значение
    const favorite = checkBox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)} ...`;
      }

      movieDB.movies.push(newFilm); // добавляем новый фильм в массив movies
      sortArray(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((element) => element.remove());
  };

  const makeChanges = () => {
    genre.textContent = 'драма';
    bg.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArray = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = '';

    films.forEach((film, i) => {
      movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
  }
  deleteAdv(adDelete);
  makeChanges();
  sortArray(movieDB.movies);
  createMovieList(movieDB.movies, movieList);

  // menuList.innerHTML = '';

  // MenuDB.menu.forEach((item, i) => {
  //   menuList.innerHTML += `
  //         <li><a class="promo__menu-item promo__menu-item_active" href="#">${
  //           i + 1
  //         } ${item}</a></li>
  //     `;
  // });

  // document.querySelector('.add button').addEventListener('click', () => {
  //   let data = document.querySelector('.adding__input').value;
  //   movieDB.movies.push(data);
  // });
});
