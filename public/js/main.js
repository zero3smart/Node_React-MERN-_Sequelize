$(function() {
  let tab = [
    { id: "1", label: "Shoes Adidas", price: 100, quantity: 5, isChecked: true },
    { id: "2", label: "Bag", price: 300, quantity: 3, isChecked: false },
    { id: "3", label: "Ball", price: 50, quantity: 3, isChecked: true }
  ];

  $('.btn-product-list').dropdownCheckbox({
    data: tab,
    autosearch: true,
    title: "My Dropdown Checkbox",
    hideHeader: false,
    showNbSelected: true,
    templateButton: '<button class="dropdown-checkbox-toggle btn btn-primary" data-toggle="dropdown" style="font-size: 10px">Add Products <span class="dropdown-checkbox-nbselected"></span><b class="caret"></b></button>'
  });

  $('.btn-product-list').dropdownCheckbox("append",
    { id: "15", label: "added by itself", isChecked: true });

  //Trigger edit
  $('#edit-product').click(function() {
    let price = $('.product-price').text();
    let input = $('<input id="attribute" type="number" value="' + price + '" size="5" />')
    $('.product-price').text('').append(input);
    input.select();

    input.on("keypress", function(e) {
      if (e.keyCode == 13) {
          input.blur();
          return false; // prevent the button click from happening
      }
    });

    input.blur(function() {
      let price = $('#attribute').val();
      $('#attribute').parent().text(price);
      $('#attribute').remove();
    });

  });

  //alert($(".btn-product-list").dropdownCheckbox("checked"));

  $('.dropdown-checkbox-menu input[type="checkbox"]').on('change', function() {
    let selectedProducts = $(".btn-product-list").dropdownCheckbox("checked");
    console.log(selectedProducts);
  }).bind(this);


});