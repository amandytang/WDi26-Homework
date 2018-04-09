const fetchBook = function () {
  let title = document.getElementById("title").value;

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

  const info = JSON.parse(xhr.response);
  let imageUrl = info.items[0]["volumeInfo"]["imageLinks"]["smallThumbnail"];
  let bookName = info.items[0]["volumeInfo"]["title"];
  let author = info.items[0]["volumeInfo"]["authors"][0];

  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let img = document.createElement('img');
  img.setAttribute("src", imageUrl);
  p.innerHTML = bookName;
  p2.innerHTML = author;
  document.body.appendChild(p);
  document.body.appendChild(p2);
  document.body.appendChild(img);

  };

  url = "https://www.googleapis.com/books/v1/volumes?q=title:" + title;
  xhr.open('GET', url);
  xhr.send();

};

  const button = document.getElementById('search');

  button.addEventListener('click', fetchBook);
