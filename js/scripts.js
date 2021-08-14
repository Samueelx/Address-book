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
Address.prototype.fullAddress = function(){
    return this.street + ", " + this.city + " " + this.county;
}

function resetFields(){
    $('input#new-first-name').val('');
    $('input#new-last-name').val('');
    $('input.new-street').val('');
    $('input.new-city').val('');
    $('input.new-county').val('');
}

$(document).ready( function() {
    $('#add-address').click( function() {
        $('#new-addresses').append('<div class="new-address">'+
            '<div class="form-group">'+
                '<label for = "second-street">Street'+
                    '<input type="text" class="form-control new-street" id="second-street">'
                +'</label>'
            +'</div>'+
            '<div class="form-group">'+
                '<label for = "second-city">City'+
                    '<input type="text" class="form-control new-city" id="second-city">'
                +'</label>'
            +'</div>'+
            '<div class="form-group">'+
                '<label for = "second-county">County'+
                    '<input type="text" class="form-control new-county" id="second-county">'
                +'</label>'
            +'</div>'
        +'</div>');
    });


    $('form#new-contact').submit( function(event) {
        event.preventDefault();

        let inputFirstName = $('input#new-first-name').val();
        let inputLastName = $('input#new-last-name').val();

        let newContact = new Contact(inputFirstName, inputLastName);
        
        $('.new-address').each( function() {
            let inputStreet = $(this).find('input.new-street').val();
            let inputCity = $(this).find('input.new-city').val();
            let inputCounty = $(this).find('input.new-county').val();

            let address = new Address(inputStreet, inputCity, inputCounty);
            newContact.addresses.push(address);
        });

        $('ul#contacts').append('<li><span class = "contact">' +newContact.fullName() + '</span></li>');

        $('.contact').last().click( function() {
            $('#show-contact').show();
            $('#show-contact h2').text(newContact.fullName());
            $('#show-contact .first-name').text(newContact.firstName);
            $('#show-contact .last-name').text(newContact.lastName);

            $('ul#addresses').text("");
            newContact.addresses.forEach( (address) => {
                $('ul#addresses').append(`<li>${address.fullAddress()}</li>`);
            });
        });
        resetFields();
    });
});