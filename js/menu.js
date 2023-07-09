const ChangeActiveLink = (arrLinks) => {
	arrLinks.forEach((link) => {
		link.addEventListener('click', () => {
			arrLinks.forEach((link) => {
				link.classList.remove('active')
			})
			link.classList.add('active')
		})
	})
}

export default function ToggleMenu() {
	const $d = document,
		$toggle = $d.querySelector('.nav__toggle'),
		$menu = $d.querySelector('.nav__menu'),
		$allLinks = $d.querySelectorAll('.nav__link a')

	$d.addEventListener('click', (e) => {
		if (e.target.matches('.nav__toggle')) {
			$toggle.classList.toggle('openMenu')
			$menu.classList.toggle('openMenu')
		}
		ChangeActiveLink($allLinks)
	})
}
