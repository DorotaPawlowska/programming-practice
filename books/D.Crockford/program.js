document.writeln('hello world!');

Function.prototype.method = function (name, func){
    this.prototype[name] = func;
    return this;
};

//zastrzeżone słowa
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