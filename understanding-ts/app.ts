// Interfaces > mostly uses PascalNamingConvention
// What is an interface? 
// Classes help enforce the cohesion rule
// An object is an instance of a class
// Question mark after variable in constructors make the variables optional
// I keep getting errors the tutor isn't getting, yet we're doing the same thing. 

// Access Modifiers
// Public, Private and protected
// Prefixing the field with the chosen access modifiers gives it the access chosen. By default, every field has a public modifier
// Creating your constructor variables with an access modifiers simplifies your code. 

import { Point } from './point';
let point = new Point(20, 28);
let x = point.X;
point.X = 10;
point.draw();

