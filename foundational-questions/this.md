# Explain the this keyword in JavaScript.

The this keyword in JavaScript is used to reference the object in which the function is operating.

Determining the this binding for an executing function requires finding the direct call-site of that function. Once examined, four rules can be applied to the call-site, in this order of precedence:

1. Called with new? Use the newly constructed object.

2. Called with call or apply (or bind)? Use the specified object.

3. Called with a context object owning the call? Use that context object.

4. Default: undefined in strict mode, global object otherwise.