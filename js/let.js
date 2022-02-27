// when variable are changeable  using  let keyword because 
// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.
// value changeable---------------------

let x = 10;
//  let x = 5; [//dont declare let again with variable this is SyntaxError]
//[ but value reassignable]
x = 5;
x = 11;
console.log(x)
 