// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];

//using destructuring:
let [john, mary, joe] = ages;
console.log(john, mary, joe); // 30 26 27

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia); // designer developer accountant

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanise"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); // english french

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary); // spanish german

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2
console.log(firstLanguage, thirdLanguage); // english german

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite); //apple
console.log(secondFavorite); // orange
console.log(others); // [ 'banana', 'peach', 'cherry' ]

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let { brian, anna, ...rest} = favoriteFoods;
console.log(brian); // pizza
console.log(anna); // pasta
console.log(rest); //{ sarah: 'vegetarian', andrea: 'steak' }
