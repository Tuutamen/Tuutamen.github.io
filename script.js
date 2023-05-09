 const cardsData = [
      {
        img: 'images/1cross.png',
        name: 'New balance 9060',
        price: 50000,
        newPrice: 2500,
        link: '1cross.html'
      },
      {
        img: 'images/2cross.png',
        name: 'Nike Vista Lite',
        price: 55000,
        newPrice: 3000,
        link: '#'
      },
      {
        img: 'images/3cross.png',
        name: 'Nike Air Max 2021',
        price: 60000,
        newPrice: 6000,
        link: '#'
      },
      {
        img: 'images/4cross.png',
        name: 'Nike Vista',
        price: 40000,
        newPrice: 8000,
        link: '#'
      },
      {
        img: 'images/5cross.png',
        name: 'Nike Jordan',
        price: 28000,
        newPrice: 4500,
        link: '#'
      },
      {
        img: 'images/8cross.png',
        name: 'Nike Air Force',
        price: 27000,
        newPrice: 5000,
        link: '#'
      },
      {
        img: 'images/6cross.png',
        name: 'New Balance 530',
        price: 45000,
        newPrice: 12000,
        link: '#'
      },
      {
        img: 'images/7cross.png',
        name: 'Nike M2K Tekno',
        price: 43000,
        newPrice: 9000,
        link: '#'
      },
    ];

for (let i = 0; i < cardsData.length; i++) {
  const cardData = cardsData[i];

  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const cardContentElement = document.createElement('a');
  cardContentElement.classList.add('card-content');
  cardContentElement.href = cardData.link;

  const imgElement = document.createElement('img');
  imgElement.src = cardData.img;

  const nameElement = document.createElement('h2');
  nameElement.textContent = cardData.name;

  const priceElement = document.createElement('p');
  priceElement.textContent = `${cardData.newPrice} NST`;

  const oldPriceElement = document.createElement('s');
  oldPriceElement.textContent = `${cardData.price} RUB`;

  cardContentElement.appendChild(imgElement);
  cardContentElement.appendChild(nameElement);
  cardContentElement.appendChild(priceElement);
  cardContentElement.appendChild(oldPriceElement);

  cardElement.appendChild(cardContentElement);
  document.querySelector('.cards-container').appendChild(cardElement);
}