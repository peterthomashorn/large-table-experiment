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
    var scramble = function ($row) {
      var $street = $row.children('.street');
      $street.text($street.text() + $street.text() + $street.text());
      
      var $nextRow = $row.next().next();
      window.setTimeout(function () { scramble($nextRow); }, 0);
    };

    scramble($('#address-list').children().first());
  });
});
