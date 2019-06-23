const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};


// ===============================================

// const another = {};
// for(let key in circle)
//     another[key] = circle[key];

// another['radius'] = circle['radius'];


// ===============================================

// const another = Object.assign({}, circle);
// const another = Object.assign({
//     color: 'yellow'
// }, circle);


// ===============================================

const another = {...circle};

console.log(another);

