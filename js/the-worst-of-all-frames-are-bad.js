Brucht ke jQuery

/* ty to -> https://stackoverflow.com/questions/1452871/how-can-i-access-iframe-elements-with-javascript */
function iframeRef( frameRef ) {
 return frameRef.contentWindow ? frameRef.contentWindow.document : frameRef.contentDocument;
}

/* loop through frames and iframes -> execute cb(documentOfFrame), starts default at top, skips with class hiddenFrame or if its empty */
function frameLooper(cb, rec = 0, base = top.document) {
 return base.querySelectorAll('iframe:not(.hiddenFrame), frame:not(.hiddenFrame)').forEach(function(el, index){
  var doc = iframeRef(el);
  /* empty body -> gtfo */
  if (!doc.body || !doc.body.children.length){
   return true;
  }
  /* execute callback with -> iframe.document */
  typeof cb == 'function' && cb(doc);
  /* recursive callback */
  rec && frameLooper(cb, rec, doc);
 });
}

