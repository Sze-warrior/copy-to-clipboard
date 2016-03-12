var copyTextareaBtn = document.getElementById('js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function() {

  var copyTextarea = document.getElementById('js-copytextarea');
  copyTextarea.select();
  var successful = document.execCommand('copy');
  alert("The text was copied");

});