const form = document.querySelector('form');

form.onsubmit = (e) => {
  e.preventDefault();

  const formElements = Array.from(form);

  var queryParams = new URLSearchParams();
  formElements.map((input) => queryParams.set(input.name, input.value));

  const url = `/api/contact?${queryParams.toString()}`;

  const response = fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => form.reset())
    .catch((e) => console.log(e));
};
