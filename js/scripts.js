function Contact(first, last){
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}
Contact.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

function Address(street, city, county){
    this.street = street;
    this.city = city;
    this.county = county;
}

$(document).ready( function() {
    $('form#new-contact').submit( function(event) {
        event.preventDefault();

        let inputFirstName = $('input#new-first-name').val();
        let inputLastName = $('input#new-last-name').val();

        let newContact = new Contact(inputFirstName, inputLastName);
        //let fullname = newContact.fullName();

        $('ul#contacts').append('<li><span class = "contact">' +newContact.fullName() + '</span></li>');

        $('.contact').last().click( function() {
            $('#show-contact').show();
            $('#show-contact h2').text(newContact.fullName());
            $('#show-contact .first-name').text(newContact.firstName);
            $('#show-contact .last-name').text(newContact.lastName);
        });

        $('input#new-first-name').val('');
        $('input#new-last-name').val('');
    });
});