function addNewEmployee() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const address = document.getElementById("address").value;
	const roal = document.getElementById("roal").value;

	if (name || email || phone || address || roal == "") {
		alert("Please Fill The From Correctly.");
	}
}
