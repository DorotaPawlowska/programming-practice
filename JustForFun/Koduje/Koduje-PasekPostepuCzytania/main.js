const article = document.querySelector('article');
const windowHeight = window.innerHeight;
const articleHeight = article.clientHeight;
const maxScroll = article.clientHeight - window.innerHeight;
const progress = document.createElement('progress');

progress.classList.add('articleProgress');
progress.value = 0;
progress.max = maxScroll;

article.appendChild(progress);

const calculateProgress = () => {
    progress.value = window.scrollY;
    // console.log('wywołanie');
};

const throttle = (callback, limit) => {
    let wait = false;
    return () => {
        if(!wait){
            callback();
            wait = true;
            setTimeout(() => {
                wait = false;
            }, limit);
        }
    };
};

const debounce = (callback, time) => {
    let timeout;
    return () => {
        let context = this;
        // let args = [...arguments];
        // console.log('f1');
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback.apply(context);
            // console.log('f2');
        }, time || 200)
    }
}

window.addEventListener('scroll', throttle(calculateProgress, 200));
window.addEventListener('scroll', debounce(calculateProgress, 200));
