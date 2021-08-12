function Contact(first, last){
    this.firstName = first;
    this.lastName = last;
}

$(document).ready( function() {
    $('form#new-contact').submit( function(event) {
        event.preventDefault();

        let inputFirstName = $('input#new-first-name').val();
        let inputLastName = $('input#new-last-name').val();

        let newContact = new Contact(inputFirstName, inputLastName);

        $('ul#contacts').append('<li><span class = "contact">' +newContact.firstName + '</span></li>')

        $('input#new-first-name').val('');
        $('input#new-last-name').val('');
    });
});