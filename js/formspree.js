var $contactForm = $('#contact-form');
	$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: 'https://formspree.io/joaovitorlessa@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Enviando Mensagem…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Mensagem enviada!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, erro no servidor de hospedagem.</div>');
		}
	});
});