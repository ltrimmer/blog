function toggleTags(caller) {
	document.querySelectorAll(".closable").forEach(e => e.style.display == "" ? e.style.display = "none" : e.style.display = "")
	caller.innerText == "hide tags" ? caller.innerText = "show tags" : caller.innerText = "hide tags";
}

document.addEventListener("DOMContentLoaded", function() {
  if (screen.width <= 600) {
		document.querySelector("#tag-toggler").click();
	}
});
