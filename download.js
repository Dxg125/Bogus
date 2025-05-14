# Works inside PWA but it navigates away -> must solve this beforehand and then implement it

function downloadPDF(url) {
 var xhr = new XMLHttpRequest();
 xhr.open('GET', url, true);
 xhr.responseType = 'blob';
 xhr.onload = function(e) {
  if (this.status == 200) {
   var myBlob = this.response;
   var link = document.createElement('a');
   link.target = '_blank';
   link.href = window.URL.createObjectURL(myBlob);
   link.download = "yourname.pdf";
   link.click();
  }
 };
 xhr.send();
}

downloadPDF(`${window.location.origin}/php/download.php?ChatFile=${'xvshjnazhyfjpsglrvzznzhmxfbilkyz.pdf'}&ChatFileName=${'HID.pdf'}`)


# Test with iFrame
# Works inside PWA but it navigates away -> must solve this beforehand and then implement it

function downloadPDF(url) {
 var xhr = new XMLHttpRequest();
 xhr.open('GET', url, true);
 xhr.responseType = 'blob';
 xhr.onload = function(e) {
  if (this.status == 200) {
   $('body').append(`<iframe></iframe>`);
   let FrameDocument = top.$('iframe')[0].contentDocument;
   console.log(FrameDocument);

   var link = FrameDocument.createElement('a');
   link.href = window.URL.createObjectURL(this.response);
   link.download = "yourname.pdf";
   link.click();

   //$('body').find('iframe').remove();
  }
 };
 xhr.send();
}
$('body').find('iframe').remove();
downloadPDF(`${window.location.origin}/php/download.php?ChatFile=${'xvshjnazhyfjpsglrvzznzhmxfbilkyz.pdf'}&ChatFileName=${'HID.pdf'}`);