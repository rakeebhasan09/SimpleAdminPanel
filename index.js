function addNewEmployee() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const address = document.getElementById("address").value;
	const role = document.getElementById("roal").value;

	if (
		name === "" ||
		email === "" ||
		phone === "" ||
		address === "" ||
		role === ""
	) {
		alert("Please Fill The From Correctly.");
		return;
	} else {
		// Parent Container
		const parentContainer = document.getElementById("tbody");
		const newTr = document.createElement("tr");
		newTr.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${role}</td>
        <td>${address}</td>
    `;
		// Append Child
		parentContainer.appendChild(newTr);

		// Reset Form
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("address").value = "";
		document.getElementById("roal").value = "";
	}
}
