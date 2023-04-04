//use replaceALL() to convert symbols to their html versions
function convertHTML(str) {
  str = str.replaceAll('&', '&amp;');
  str = str.replaceAll('<', '&lt;')
  str = str.replaceAll('>', '&gt;')
  str = str.replaceAll('"', '&quot;')
  str = str.replaceAll('\'', '&apos;')
  console.log(str);
  return str;
}

convertHTML("Hamburgers < Pizza < Tacos");