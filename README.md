# Incorrect Null Check in JavaScript Function

This repository demonstrates a common, yet subtle, error in JavaScript:  incorrectly handling null and zero values. The `foo` function is designed to add two numbers, but it incorrectly treats 0 as null.  This can lead to unexpected results when using this function.

## Bug Description

The `===` operator performs a strict equality check.  While it correctly identifies `null`, it doesn't consider the number `0` to be equal to `null`.  The current implementation returns 0 if either input is null, which is incorrect if one or both inputs are 0. 

## Solution

The solution involves a more robust check for null and zero. The modified function checks explicitly for both null and 0 using `a == null || b == null` which uses loose comparison.