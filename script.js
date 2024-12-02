document.getElementById('show-email-btn').addEventListener('click', function () {
    // Construct the email dynamically
    const emailParts = ['support', 'easysportbet', 'co.uk'];
    const email = `${emailParts[0]}@${emailParts[1]}.${emailParts[2]}`;
    
    // Display the email in the paragraph
    document.getElementById('email-display').innerText = email;
});
