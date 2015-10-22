// detecting support for CSS blend modes

if(!('backgroundBlendMode' in document.body.style)) {
    // No support for background-blend-mode
  var html = document.getElementsByTagName("html")[0];
  html.className = html.className + " no-background-blend-mode";
}
