// This is NOT my coding style but just a quick prototype! :-)

$(document).ready(function () {
  var AddressListView = Backbone.View.extend({
    el: '#address-list'
  });

  var addressList = new AddressListView();

  var AddressCollection = Backbone.Collection.extend({
    url: 'http://localhost:3000/api/addresses'
  });

  var addresses = new AddressCollection();

  addresses.fetch().then(function () {
    var AddressItemTemplate = _.template($('#address-item-template').html());

    addresses.forEach(function (element, index) {
      var markup = AddressItemTemplate(element.toJSON());
      addressList.$el.append(markup);
    });
  });

  $('#scramble-button').click(function (event) {
    var $firstRow = $('#address-list').children().first();

    (function loop($row) {
      if ($row.length > 0) {
        new Promise(function (resolve, reject) {
          var $street = $row.children('.street');
          $street.text($street.text() + $street.text() + $street.text());
          resolve();
        }).then(loop.bind(null, $row.next().next()));
      }
    })($firstRow);
  });
});
