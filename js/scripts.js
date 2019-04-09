//Back End/Business Interface





//Front End/User Interface--------
$(document).ready(function() {
  attachListListeners();
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#new-task").val();

    $("input#new-task").val("");

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
       addressBook.addContact(newContact);
       displayContactDetails(addressBook);
