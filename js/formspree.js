var $contactForm = $('#contact-form');
	$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: 'https://formspree.io/contato@gameroesoares.com.br',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading" style="color: white;">Enviando Mensagem…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success style="color: white;"">Mensagem enviada!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error" style="color: white;">Ops, erro no servidor de hospedagem.</div>');
		}
	});
});