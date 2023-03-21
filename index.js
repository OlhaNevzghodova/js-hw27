const form = document.querySelector('form');
const firstName = document.querySelector('#name');
const lastName = document.querySelector('#lastname');
const dateOfBirth = document.querySelector('#dateOfBirth');
const address = document.querySelector('#address');
const table = document.querySelector('table')


form.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
        event.preventDefault();
        showTable();
        form.innerHTML = '';
    }

})

function showTable() {
    const gender = document.querySelector('input[name="flexRadioDefault"]:checked')
    const city = document.querySelector('#location > option:checked')
    const languages = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedLanguages = Array.from(languages).map(cl => cl.value);
    const inputs = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        gender: gender.value,
        location: city.innerHTML,
        address: address.value,
    }
    table.innerHTML = `<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">option</th>
      <th scope="col">value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Name</td>
      <td>${inputs.firstName}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Lastname</td>
      <td>${inputs.lastName}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Birth date</td>
      <td>${inputs.dateOfBirth}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Gender</td>
      <td>${inputs.gender}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Location</td>
      <td>${inputs.location}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Address</td>
      <td>${inputs.address}</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Languages</td>
      <td>${checkedLanguages}</td>
    </tr>
  </tbody>`
}