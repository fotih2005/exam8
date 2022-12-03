async function fetchData(param, fn) {
  let res = await fetch(`http://localhost:9090/${param}`);
  let data = await res.json();
  await fn(data.data);
}

async function updateCompany(companyId, companyName, companyImg) {
  let res = await fetch(
    `http://localhost:9090/company/update-company/${companyId}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        company_name: companyName,
        companyImg: companyImg,
      }),
    }
  );
}

function renderCompanys(data) {
  data.forEach((e) => {
    let option = document.createElement("option");
    option.value = e.company_id;
    option.textContent = e.company_name;
    companySelect.append(option);
    let option2 = document.createElement("option");
    option2.value = e.company_id;
    option2.textContent = e.company_name;
    let option3 = document.createElement("option");
    option3.value = e.company_id;
    option3.textContent = e.company_name;
    let item = document.createElement("li");
    let companyDeleteBtn = document.createElement('button')
    companyDeleteBtn.textContent = 'Delete'
    companyDeleteBtn.classList.add('btn', 'btn-danger')
    companyDeleteBtn.id = e.company_id
    companyDeleteBtn.addEventListener('click', async (e) => {
      await fetch(`http://localhost:9090/company/delete-company/${e.target.id}`, {
        method: 'DELETE'
      })
    })
    let companyItemText = document.createElement('p')
    item.classList.add("list-group-item", 'd-flex', 'justify-content-between');
    companyItemText.textContent = e.company_name;
    companyItemText.id = e.company_id;
    companyItemText.setAttribute("data-bs-toggle", "modal");
    companyItemText.setAttribute("data-bs-target", "#exampleModal");
    companyItemText.addEventListener("click", (e) => {
      updateCompanyFrom.addEventListener("submit", (event) => {
        event.preventDefault();
        updateCompany(
          e.target.id,
          updateCompanyName.value,
          updateCompanyImg.value
        );
      });
    });
    item.append(companyItemText)
    item.append(companyDeleteBtn)
    getCompanys.append(option3);
    listGroup.append(item);
    companySelect.append(option);
    roomCommpanySelect.append(option2);
  });
}

function renderComplecs(data) {
  data.forEach((e) => {
    let option = document.createElement("option");
    option.value = e.complecs_id;
    option.textContent = e.complecs_name;
    complecsSelect.disabled = false;
    complecsSelect.append(option);
  });
}

function complecs(data) {
  data.forEach((e) => {
    let complecsItem = document.createElement("li");
    complecsItem.classList.add("list-group-item", 'd-flex', 'justify-content-between');
    let complecsItemText = document.createElement('p')
    complecsItemText.classList.add('m-0')
    complecsItemText.textContent = e.complecs_name;
    complecsItemText.id = e.complecs_id;
    complecsItemText.setAttribute("data-bs-toggle", "modal");
    complecsItemText.setAttribute("data-bs-target", "#staticBackdrop");
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn', 'btn-danger')
    deleteBtn.textContent = 'delete'
    deleteBtn.id = e.complecs_id
    deleteBtn.addEventListener('click', async (e) => {
      await fetch(`http://localhost:9090/company/delete-complecs/${e.target.id}`, {
        method: 'DELETE'
      })
    })
    complecsItem.append(complecsItemText)
    complecsItem.append(deleteBtn)
    complecsItemText.addEventListener("click", (e) => {
      updateComplecsForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        let res = await fetch(
          `http://localhost:9090/company/update-complecs/${e.target.id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              companyId: getCompanys.value,
              complecsName: updateComplecsName.value,
            }),
          }
        );
      });
    });
    getComplecses.append(complecsItem);
  });
}

fetchData("company/complecs", complecs);

roomCommpanySelect.addEventListener("change", (e) => {
  complecsSelect.innerHTML = null;
  companySelect.disabled = false;
  fetchData(`company/company/${e.target.value}`, renderComplecs);
});

fetchData("company/companys", renderCompanys);

function renderBanks (data) {
  data.forEach(e => {
    const bankItem = document.createElement('li')
    bankItem.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    const bankText = document.createElement('p')
    bankText.textContent = e.bank_name
    bankText.id = e.bank_id
    bankText.setAttribute('data-bs-toggle', 'modal') 
    bankText.setAttribute('data-bs-target', '#exampleModal2')
    bankText.addEventListener('click', (e) => {
      updateBankForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        await fetch(`http://localhost:9090/bank/update-bank/${e.target.id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            bank_name: update_bank_name.value, 
            bank_img: update_bank_img.value,
            max_year: update_max_year.value,
            min_year: update_min_year.value,
            max_sum: update_max_sum.value, 
            min_sum: update_min_sum.value,
            percentage: update_percentage.value
          })
        })
      })
    }) 
    const bankDeleteBtn = document.createElement('buttun')
    bankDeleteBtn.textContent = 'Delete'
    bankDeleteBtn.classList.add('btn', 'btn-danger')
    bankDeleteBtn.id = e.bank_id
    bankDeleteBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      await fetch(`http://localhost:9090/bank/delete/${e.target.id}`, {
        method: 'DELETE'
      })

    })
    bankItem.append(bankText)
    bankItem.append(bankDeleteBtn)
    baksList.append(bankItem)
  })
}

fetchData('bank/get-banks', renderBanks)