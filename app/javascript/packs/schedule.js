document.addEventListener('turbolinks:load', function() {
    let deleteUrl = '';

    document.querySelectorAll('.delete-link').forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        deleteUrl = this.getAttribute('data-url'); 
      });
    });

    document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
      let form = document.createElement('form');
      form.method = 'POST';
      form.action = deleteUrl;

      let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      let input = document.createElement('input');
      input.type = 'hidden';
      input.name = '_method';
      input.value = 'delete';

      let csrfInput = document.createElement('input');
      csrfInput.type = 'hidden';
      csrfInput.name = 'authenticity_token';
      csrfInput.value = csrfToken;

      form.appendChild(input);
      form.appendChild(csrfInput);
      document.body.appendChild(form);
      form.submit();
    });
  });