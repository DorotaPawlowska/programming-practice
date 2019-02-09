document.writeln('hello world!');

Function.prototype.method = function (name, func){
    this.prototype[name] = func;
    return this;
};

// -------- zastrzeżone słowa
/*
abstract
boolean break byte 
case catch char class const continue 
debbuger default delete do double
else enum export extends
false final finally float for function 
goto
if implements import in instanceof int interface 
long
native new null
package private protected public
return
short static super switch synchronized
this throw throws transient true try typeof
var volatile void
while with

let
*/

document.writeln('seven'.length);

document.writeln('c'+'a'+'t');
document.writeln('cat'.toUpperCase());

document.writeln(2+3*5);
document.writeln((2+3)*5);

// -------- literały obiektowe
var empty_object = {};

var stooge = {
    "first-name": "Joe",
    first_name: "chodził o myślnik",
    name: "Jolean",
    surname: "Ajednak",
    "last-name": "Howard"
};

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2008-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2008-09-23 10:42",
        city: "Los Angeles"
    }
};

// -------- pobieranie
document.writeln(stooge["first-name"]);
document.writeln(flight.departure.IATA);

//undefined
document.writeln(stooge["middle-name"]);
document.writeln(flight.status);
document.writeln(stooge["FIRST-NAME"]);

//wartość domyślna jeśli właściwość nie istnieje
var middle = stooge["middle-name"] || "(brak)";
var status = flight.status || "nieznany";

//TypeError w consoli
document.writeln(flight.equipment);
console.log(flight.equipment);
// document.writeln(flight.equipment.model);
// console.log(flight.equipment.model);
document.writeln(flight.equipment && flight.equipment.model);
console.log(flight.equipment && flight.equipment.model);

// -------- modyfikacja
//nadpisanie
stooge['first-name'] = 'Lester';

//dodanie
stooge['middle-name'] = 'Lester';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'spóźniony';

// -------- referencja
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
document.writeln(nick);

var a = {}, b = {}, c ={};
a = b = c = {};

//prototyp
if(typeof Object.beget !== 'function'){
    Object.beget = function(o){
        var F = function(){};
        F.prototype = o;
        return new F();
    };
}

var another_stooge = Object.beget(stooge);
document.writeln(another_stooge);
console.log(another_stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

stooge.profession = 'actor';
document.writeln(another_stooge.profession);
console.log(another_stooge.profession);

