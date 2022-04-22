function show(content) {
  // window.document.getElementById('app').innerText = 'Hello, ' + content;
  window.document.getElementById('app').innerHTML = '<h1>Hello, ' + content + '</h1>';
}
module.exports = show;
