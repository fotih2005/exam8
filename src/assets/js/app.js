const rooms = document.getElementById("rooms");

async function fetchData(param, fn) {
  let res = await fetch(`http://localhost:9090/${param}`);
  let data = await res.json();
  await fn(data.data);
}

function renderCompany(data) {
  data.forEach((e) => {
    let option = document.createElement("option");
    option.value = e.company_id;
    option.textContent = e.company_name;
    companysSelect.append(option);
  });
}

fetchData("company/companys", renderCompany);

function renderComplecs(data) {
  data.forEach((e) => {
    companyImg.src = e.img;
    companyImg.width = 250;
    companyImg.height = 250;
    companyTitle.textContent = e.company_name;
    let option = document.createElement("option");
    option.value = e.complecs_id;
    option.textContent = e.complecs_name;
    complecsSelect.disabled = false;
    complecsSelect.append(option);
  });
}

companysSelect.addEventListener("change", (e) => {
  fetchData(`company/company/${e.target.value}`, renderComplecs);
});

function renderRooms(data) {
  data.forEach((e) => {
    complecs.textContent = e.complecs_name;
    location.textContent = e.location;
    let option = document.createElement("option");
    option.value = e.room_id;
    option.textContent = e.room_num;
    roomsSelect.disabled = false;
    selectYear.disabled = false;
    roomsSelect.append(option);
  });
}

complecsSelect.addEventListener("change", (e) => {
  fetchData(`company/complecsRoom/${e.target.value}`, renderRooms);
});

function render(data) {
  data.forEach((e) => {
    rooms.textContent = e.room_num + " rooms";
    rooms.id = e.sum;
    square.textContent = e.square + " meter square";
    Complecslocation.textContent = e.location;
  });
}

roomsSelect.addEventListener("change", (e) => {
  fetchData(
    `company/room?roomId=${e.target.value}&complecsId=${complecsSelect.value}`,
    render
  );
});

function renderBank(data) {
  if (data.length > 0) {
    bankName.textContent = data[0].bank_name;
    bankImg.src = data[0].bank_img;
    bankImg.width = 250;
    bankImg.height = 250;
    year.textContent = data[0].max_year + " year";
    sum.textContent = data[0].max_sum + " so`m";
    pracent.textContent = data[0].percentage + " %";
    calc.textContent = "Calculator";
    creditYear.textContent = "Year: " + selectYear.value;
    maxSum.textContent = "Sum: " + data[0].max_sum;
    mouth.textContent = "Every mouth: " + data[0].mouth;
    startingPaymet.textContent = "Starting paymet: " + data[0].starting_paymet;
    service.textContent = "Service " + data[0].service;
    companysSelect.selectedIndex = 0;
    complecsSelect.selectedIndex = 0;
    roomsSelect.selectedIndex = 0;
    selectYear.selectedIndex = 0;
  } else {
    bankName.textContent = 'Hech qaysi bank buncha kredit bera olmaydi'
  }
}

selectYear.addEventListener("change", (e) => {
  fetchData(
    `bank/banks?maxYear=${selectYear.value}&minYear=${selectYear.value}&maxSum=${rooms.id}&minSum=${rooms.id}`,
    renderBank
  );
});

amin.addEventListener("click", () => {
  location.pathname = "/auth";
});
