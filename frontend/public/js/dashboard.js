window.addEventListener("load", async function () {
	const user = await fetchUser();
	document.getElementById("displayname").innerText = user.displayname_th;

	if (user.type === "professor") {
		document.getElementById("addBtn").style.display = "none";
	}
});

async function fetchUser() {
	try {
		const response = await fetch("/api/user");
		if (!response.ok) throw new Error("Unauthorized");
		const data = await response.json();
		return data.user;
	} catch (error) {
		console.error("Error:", error);
	}
}
