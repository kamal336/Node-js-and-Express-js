let getName =()=>{
    return 'Akter Kamal';
}

const getWife = () =>{
    return 'Jannatul Naim';
}

let myAge = () =>{
    return '30';
}

let cgpa = 4.54;

exports.getName = getName;
exports.getWife =getWife;
exports.myAge = myAge;
exports.cgpa = cgpa;

// we can exports at a time
module.exports = {
    getName,
    getWife,
    cgpa,
    myAge,
}

// we can also direct exportse
// exports.myCountry = () =>{
//     return 'Bangladesh';
// }