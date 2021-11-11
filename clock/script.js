const URL_TO_FETCH = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300';

const fetchNumber =() => {
  fetch(URL_TO_FETCH)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error('Failed retrieving information', err));
};
