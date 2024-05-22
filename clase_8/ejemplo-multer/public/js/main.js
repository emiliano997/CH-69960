fetch("http://localhost:5000/api/user")
  .then((result) => result.json())
  .then((data) => console.log(data));
