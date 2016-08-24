console.log('Hey there!');

if (window.location.href.match(/r/)) {
  var copyBtn = document.querySelector('.js-copy');
  copyBtn.addEventListener('click', function () {
    var text = document.querySelector('.js-text');
    var range = document.createRange();
    range.selectNode(text);
    window.getSelection().addRange(range);

    document.execCommand('copy');

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges();

    copyBtn.innerHTML = 'Copied !';

    setTimeout(() => copyBtn.innerHTML = 'Copy', 2000);
  });
}
