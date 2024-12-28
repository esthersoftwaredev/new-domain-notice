// Redirect for any path on monacodelisa.dev to the root domain
if (
	window.location.hostname === "monacodelisa.com" ||
	window.location.hostname === "monacodelisa.dev"
) {
	if (window.location.pathname !== "/") {
		window.location.replace("https://monacodelisa.dev");
	}
}

// Redirect for blog.monacodelisa.com to blog.esthersoftware.dev
if (window.location.hostname === "blog.monacodelisa.com") {
	const newPath = window.location.pathname;
	window.location.replace(`https://blog.esthersoftware.dev${newPath}`);
}

// parallax effect
document.addEventListener("mousemove", (e) => {
	const card = document.querySelector(".card");
	const { clientX, clientY } = e;
	const { innerWidth, innerHeight } = window;

	const rotateX = (clientY / innerHeight - 0.5) * -10; // Vertical tilt
	const rotateY = (clientX / innerWidth - 0.5) * 10; // Horizontal tilt

	card.style.transform = `perspective(62.5rem) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
