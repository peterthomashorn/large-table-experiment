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
});
