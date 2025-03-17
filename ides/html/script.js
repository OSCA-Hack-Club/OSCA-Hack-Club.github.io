var url = null

const editor = ace.edit('editor')
editor.setTheme('ace/theme/chaos')
editor.getSession().setMode('ace/mode/html')

function createUrl(html) {
  var blob = new Blob([html], { type: 'text/html' })
  return URL.createObjectURL(blob)
}

function removeUrl(url) {
  URL.revokeObjectURL(url)
  console.log('Revoked URL')
}

function getIframe() {
  var iframe = document.getElementById('iframe')
  return iframe
}

function setIframeUrl(url) {
  var iframe = getIframe()
  iframe.src = url
}

function getEditorCode() {
  return editor.getValue()
}

function buttonclick() {
  var code = getEditorCode()
  removeUrl(url)
  url = createUrl(code)
  setIframeUrl(url)
}
document.getElementById('downloadButton').addEventListener('click', function() {
    var code = getEditorCode();
    var blob = new Blob([code], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});