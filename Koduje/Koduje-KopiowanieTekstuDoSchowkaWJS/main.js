
const copyTextToClipboard = () => {
    const input = document.querySelector('#copier-value');
    input.select();
    document.execCommand('copy');
}

const btn = document.querySelector('#copier-submit');
btn.addEventListener('click', copyTextToClipboard);