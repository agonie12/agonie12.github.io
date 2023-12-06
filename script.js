var currentPage = 1;
var totalPages = 5;

function nextPage() {
	if (currentPage < totalPages) {
		document.getElementById("page" + currentPage).classList.remove("active");
		currentPage++;
		document.getElementById("page" + currentPage).classList.add("active");
	}
}

function prevPage() {
	if (currentPage > 1) {
		document.getElementById("page" + currentPage).classList.remove("active");
		currentPage--;
		document.getElementById("page" + currentPage).classList.add("active");
	}
}
