function foo(a, b) {
  if (a == null || b == null) {
    return 0; //Correctly handles null and 0 values
  } else {
    return a + b; 
  }
}