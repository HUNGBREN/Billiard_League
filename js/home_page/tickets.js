let modal_trigger = document.querySelector('.tickets_block_item .btn'),
	modal = document.querySelector('.modal'),
	overlay = document.createElement('div');

overlay.classList.add('overlay');

function hide_modal(dom) {
	if (dom) {
		document.querySelector(`${dom}`).addEventListener('click', () => {
			modal.classList.remove('show');
			overlay.remove();
		});
	}
}

modal_trigger.addEventListener('click', () => {
	modal.classList.add('show');
	document.querySelector('main .modal').appendChild(overlay);
	hide_modal('.overlay');
});

hide_modal('.modal-header i');