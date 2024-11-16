// Seleciona o formulário e a tabela
const form = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");

// Evento de envio do formulário
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtém os valores dos inputs
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Verifica se os campos estão preenchidos
  if (name && phone) {
    // Cria uma nova linha na tabela
    const newRow = document.createElement("tr");

    // Adiciona as células na linha
    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const phoneCell = document.createElement("td");
    phoneCell.textContent = phone;

    newRow.appendChild(nameCell);
    newRow.appendChild(phoneCell);

    // Adiciona a linha na tabela
    contactList.appendChild(newRow);

    // Limpa os campos do formulário
    form.reset();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
