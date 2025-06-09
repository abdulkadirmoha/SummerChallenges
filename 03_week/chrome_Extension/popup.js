// Get form and input elements
const opportunityForm = document.getElementById("opportunityForm");
const companyNameInput = document.getElementById("companyName");
const linkedinUrlInput = document.getElementById("linkedinUrl");
const contactPersonInput = document.getElementById("contactPerson");
const notesInput = document.getElementById("notes");
const tagsInput = document.getElementById("tags");

// Empty state message container
const noOpportunitiesMessage = document.getElementById("noOpportunities");

// Array to store all submitted opportunities
const opportunities = [];

// Form submit handler
opportunityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newOpportunity = {
    companyName: companyNameInput.value.trim(),
    linkedinUrl: linkedinUrlInput.value.trim(),
    contactPerson: contactPersonInput.value.trim(),
    notes: notesInput.value.trim(),
    tags: tagsInput.value.trim(),
  };

  opportunities.push(newOpportunity);
  noOpportunitiesMessage.innerHTML = ""; // Clear "no opportunities" message
  renderOpportunities();
  opportunityForm.reset(); // Clear form inputs
});

// Render function to display opportunities
const renderOpportunities = () => {
  const opportunityList = document.getElementById("opportunityList");
  opportunityList.innerHTML = ""; // Clear previous content

  const ul = document.createElement("ul");

  opportunities.forEach((opportunity) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${opportunity.companyName}</strong>`;

    const sublist = document.createElement("ul");

    const linkedinItem = document.createElement("li");
    linkedinItem.innerHTML = `LinkedIn: <a href="${opportunity.linkedinUrl}" target="_blank">${opportunity.linkedinUrl}</a>`;

    const contactItem = document.createElement("li");
    contactItem.textContent = `Contact: ${opportunity.contactPerson}`;

    const notesItem = document.createElement("li");
    notesItem.textContent = `Notes: ${opportunity.notes}`;

    const tagsItem = document.createElement("li");
    tagsItem.textContent = `Tags: ${opportunity.tags}`;

    sublist.appendChild(linkedinItem);
    sublist.appendChild(contactItem);
    sublist.appendChild(notesItem);
    sublist.appendChild(tagsItem);

    li.appendChild(sublist);
    ul.appendChild(li);
  });

  opportunityList.appendChild(ul);
};
