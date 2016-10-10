# What happens when you don’t declare a variable in Javascript?

If you don’t explicitly declare a variable, you risk creating an implied global variable. This is a problem, as you will be unable to create multiple instances of that object, as each new instance will overwrite the data from the last.

In general, global variables should be used only in very specific situations and are typically not recommended, as they can lead to a lot of odd side effects that may be difficult to track down.