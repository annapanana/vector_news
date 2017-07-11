export function restCall(url, method, data) {
  $.ajax({
    url: `http://localhost:3000/api/${url}`,
    method: method || 'GET',
    dataType: 'json',
    data: data || {}
  }).done(function(data) {
    Dispatcher.dispatch( {type: successType, data: data} );
  }).fail(function(xhr, textStatus, errorThrown) {
    Dispatcher.dispatch( {type: errorType, xhr, textStatus, errorThrown} );
  });
}
