// создание списка имён
class renderUsers {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    let users = [
      {
        name: 'Alex',
      },
      {
        name: 'Ivan',
      },
      {
        name: 'Petya',
      },
      {
        name: 'Erik',
      },
      {
        name: 'Vasya',
      },
      {
        name: 'Alexis',
      },
      {
        name: 'Oddi',
      },
      {
        name: 'Igor',
      },
      {
        name: 'Constantin',
      },
      {
        name: 'Kire',
      },
      {
        name: 'Kolya',
      },
      {
        name: 'Alexandr',
      },
      {
        name: 'Tetyana',
      }
    ];

    users.forEach(el => {
      let li = document.createElement('li'),
        p = document.createElement('p');

      p.innerHTML = `
        ${el.name}
      `;

      li.classList.add('search__user');
      li.appendChild(p);

      this.container.appendChild(li);
    });
  }
}

// поиск
class Search {
  constructor(inputId, items) {
    this.searchInput = document.getElementById(inputId);
    this.items = document.querySelectorAll(items);
    this.init();
  }

  init() {
    this.search();
  }

  search() {
    // event на поле поиска
    this.searchInput.addEventListener('keyup', () => {
      // получаем информацию с поиска и убираем пробелы
      let value = this.searchInput.value.toLowerCase().trim();

      if (value != '') {
        this.items.forEach(el => {
          // получаем только текст, без тегов.
          // search - ищет подстроку в строке и возвращает номер подстроки / -1 (если нет)
          if (el.innerText.toLowerCase().search(value) == -1) {
            el.style.display = 'none';
          } else {
            el.style.display = 'block';
          }
        });
      } else {
        this.items.forEach(el => {
          el.style.display = 'block';
        });
      }
    });
  }
}
