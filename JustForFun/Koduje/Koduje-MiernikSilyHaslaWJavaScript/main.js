
const calculateComplexity = (password) => {
    let complexity = 0;
    let regExps = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /.{8}/,
        /.{16}/,
        /[!-//:-@[-`{-ÿ]/
    ];

    regExps.forEach((regexp) => {
        if(regexp.test(password)){
            complexity++;
        }
    });

    return {
        value: complexity,
        max: regExps.length
    };
};

const checkPasswordStrength = function(password){
    const progress = document.querySelector('#passwordComplexity');
    const complexity = calculateComplexity(this.value);

    progress.value = complexity.value;
    progress.max = complexity.max;
};

const input = document.querySelector('#passwordField');
input.addEventListener('keyup', checkPasswordStrength);
