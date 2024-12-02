document.getElementById('show-email-btn').addEventListener('click', function () {
    const email = ['support', 'easysportbet', 'co.uk'].join('@').replace('support@', 'support.');
    document.getElementById('email-display').innerText = email;
});
