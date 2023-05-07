const addressesWrapper = document.querySelector('.addresses-wrapper');

const getAddresses = function(location) {

  const request = new XMLHttpRequest();
  request.open('GET', `https://fakerapi.it/api/v1/addresses?_quantity=1${location}`);
  request.send();

  request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <div class="addresses">
        <span><span>country: </span>${data.data[0].country}</span>
        <span><span>street: </span>${data.data[0].street}</span>
        <span><span>buildingNumber: </span>${data.data[0].buildingNumber}</span>
    </div>
    `;

    addressesWrapper.insertAdjacentHTML('beforeend', html);
    addressesWrapper.style.opacity = 1;
  });
};

getAddresses();

const employee = document.querySelector('.employee-details-wrapper');

const getEmployee = function(persons) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01${persons}`);
  request.send();

  request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <div class="employee-details">
        <img src="${data.data[0].image + data.data[0].id}" alt=""/>
        <h6>${data.data[0].firstname + " " + data.data[0].lastname}</h6>
        <span><spna>mobile number: </span>${data.data[0].phone}</span>
        <span><span>email: </span>${data.data[0].email}</span>
        <span><span>address: </span>${data.data[0].address.country + "," + " " + data.data[0].address.city }</span>
    </div>
    `;

    employee.insertAdjacentHTML('beforeend', html);
    employee.style.opacity = 1;
  });
};

getEmployee();
getEmployee();
getEmployee();
getEmployee();
