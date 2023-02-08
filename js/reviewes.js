const reviews = [
  {
    id: '1',
    name: 'Ali Afzal',
    details: 'Area Head of Telenor',
    comment: 'The AI algorithm is crazy good, it chooses the right meals for me every time. It\'s amazing not to worry about food anymore!',
    image: './images/afzal.png',
  },
  {
    id: '2',
    name: 'Maaz Amjad',
    details: 'Business Owner at medicine.',
    comment: 'Inexpensive, healthy and great-tasting meals, without having any fear about unhealthy food! It feels truly magical.',
    image: './images/maaz.png',
  },
  {
    id: '3',
    name: 'Qasim Tararr',
    details: 'Inspector at ZTBL',
    comment: 'I got to come here with the whole family, and it tastes really nice! Plus, everything is organic and vegan and without plastic.',
    image: './images/qasim.png',
  },
  {
    id: '4',
    name: 'Usman Haider',
    details: '(AFO) at NBP',
    comment: 'Amazing food and an amazing invironment, it was a wonderful experience, I woud definetely recommend it to people.',
    image: './images/usman.png',
  },
];
const reviewers = document.querySelector('.reviewers');
for (let i = 0; i < reviews.length; i += 1) {
  reviewers.innerHTML += `<div class="reviewer">
    <div class="reviewer-img">
    <img src="${reviews[i].image}" alt="Reviwer Picture">
</div>
<div class="reviewer-content">
    <div class="reviewer-name"><h3>${reviews[i].name}</h3></div>
    <div class="reviewer-detail"><i><p>${reviews[i].details}</p></i></div>
    <div class="reviewer-line"></div>
    <div class="reviwer-comment"><p>${reviews[i].comment}</p></div>
</div>
</div>`;
}