const heroElement = document.querySelector(".hero h1")
heroElement.herotext = "Hi I am Abhishek \nनमस्ते मैं अभिषेक हूँ \nनमस्कार मी अभिषेक \nHi I am Abhishek"

function animateHeroText(index) {
	if (index >= heroElement.herotext.length) {
		heroElement.parentElement.children[1].style.visibility = "hidden" // .remove()
		return
	}

	if (heroElement.herotext[index] == "\n") {
		heroElement.innerText = heroElement.innerText
		if (heroElement.innerText.length > 0) {
			heroElement.innerText = heroElement.innerText.slice(0, heroElement.innerText.length - 1)
			return setTimeout(() => animateHeroText(index), 100)
		}
		return setTimeout(() => animateHeroText(index + 1), 100)
	}
	heroElement.innerText += heroElement.herotext[index]
	setTimeout(() => animateHeroText(index + 1), 100)
}
animateHeroText(0)

const navItems = document.querySelector(".nav-items")
// document.getElementById("hamburger").onclick = () => {}
