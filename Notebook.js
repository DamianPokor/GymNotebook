//Zad 2

const firstName = 'Damian';
const lastName = 'Pokorski';
const sex = 'M';
const age = 30;
const biceps = 50;
const maxPress = 300;

//zad 3
console.log('Imię:', firstName);
console.log('Nazwisko:', lastName);
console.log('Płeć:', sex);
console.log('Wiek:', age);
console.log('Rozmiar bica:', biceps);
console.log('Mac na ławie', maxPress);

console.log(
    'Nazywam się',
    firstName,
    lastName,
    ', mam',
    age,
    'lat, walę',
    maxPress,
    'na klatę, zgadza się?'
);

//zad 4
console.log(
    `Nazywam się ${firstName} ${lastName}, mam ${age} lat, walę ${maxPress} na klatę, zgadza się?`
);

/*Funkcja porównująca wiek:
Napisz funkcję, która porówna wiek osoby o imieniu Damian z wiekiem Donalda Trumpa i zaloguje wynik w konsoli.*/

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    sex: sex,
    biceps: biceps,
    maxPress: maxPress,
};

console.log('Imię:', person.firstName);
console.log('Nazwisko:', person.lastName);
console.log('Płeć:', person.sex);
console.log('Wiek:', person.age);
console.log('Rozmiar bica:', person.biceps);
console.log('Mac na ławie', person.maxPress);

console.log(
    'Nazywam się',
    person.firstName,
    person.lastName,
    ', mam',
    person.age,
    'lat, walę',
    person.maxPress,
    'na klatę, zgadza się?'
);
console.log(
    `Nazywam się ${person.firstName} ${person.lastName}, mam ${person.age} lat, walę ${person.maxPress} na klatę, zgadza się?\n`
);

const introduce = `Nazywam się ${person.firstName} ${person.lastName}, mam ${person.age} lat, walę ${person.maxPress} na klatę, zgadza się?`;

const compareAge = (userAge, trumpAge) => {
    if (userAge < trumpAge) {
        return `User jest młodszy od Trumpa o ${trumpAge - userAge} lat.`;
    } else if (userAge > trumpAge) {
        return `User jest starszy od Trumpa o ${userAge - trumpAge} lat.`;
    }
    return `Obie osoby mają ten sam wiek.`;
};

const date = new Date();
const currentYear = date.getFullYear();
const trumpAge = currentYear - 1946;
const userAge = person.age;

console.log(compareAge(userAge, trumpAge));

const userNameParagraph = document.getElementById('user-firstName');
userNameParagraph.innerText = person.firstName;

const userLastNameParagraph = document.getElementById('user-lastName');
userLastNameParagraph.innerText = person.lastName;

const userAgeParagraph = document.getElementById('user-age');
userAgeParagraph.innerText = person.age;

const userIntroduceParagraph = document.getElementById('user-introduce');
userIntroduceParagraph.innerText = introduce;
