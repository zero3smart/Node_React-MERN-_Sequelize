$(function() {
  function list(size, checked) {
    var result = [];
    for (var i = 0; i < size; i++) {
      result.push({
        id: i,
        label: 'Item #' + i,
        isChecked: checked === undefined ? !!(Math.round(Math.random() * 1)) : checked
      });
    }
    return result;
  }

  function updateStatus() {
    alert("OK");
  }

  var tab = [
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
    var price = $('.product-price').text();
    var input = $('<input id="attribute" type="number" value="' + price + '" size="5" />')
    $('.product-price').text('').append(input);
    input.select();

    input.on("keypress", function(e) {
      if (e.keyCode == 13) {
          input.blur();
          return false; // prevent the button click from happening
      }
    });

    input.blur(function() {
      var price = $('#attribute').val();
      $('#attribute').parent().text(price);
      $('#attribute').remove();
    });

  });

  //alert($(".btn-product-list").dropdownCheckbox("checked"));

  $('.dropdown-checkbox-menu input[type="checkbox"]').on('change', function() {
    var selectedProducts = $(".btn-product-list").dropdownCheckbox("checked");
    var checkedList = $(".btn-product-list").dropdownCheckbox("checked").map(t => t.label);

    console.log(checkedList);
  }).bind(this);


});