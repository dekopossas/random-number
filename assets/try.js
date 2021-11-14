// Function to request a number
async function getNumber() {
  const url = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300';
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      try {
        data.value ? sessionStorage.setItem('gameAnswer', data?.value) : '';
        if (data.StatusCode) {
          throw data.StatusCode;
        }
      } 
      catch (e) {
        handleRequestError(e);
      }
    })
    .catch((err) => console.error('falha', err));
}
