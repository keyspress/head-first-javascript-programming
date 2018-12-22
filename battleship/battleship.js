var view = {
  displayMsg: function(msg) {
    var messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },

  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class', 'hit');
  },

  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class', 'miss');
  }
};

view.displayMiss('00');
view.displayHit('34');
view.displayMsg('test');
