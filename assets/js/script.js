const shareData = {
	title: 'Michael Raiwet',
	text: 'My personal website.',
	url: 'https://raiwet.ca'
}

const btn = document.querySelector('button');


// Share must be triggered by "user activation"
btn.addEventListener('click', async () => {
	try {
		await navigator.share(shareData);
		
	} catch (err) {
		
	}
});