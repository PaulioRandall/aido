
# Assignment

## Initialisation

Create and initialising a variable requires the `:=` symbol. This prevents ambiguity when another variable with the same name that is accessible from a higher level scope:

```
x := 1
y := 4
z := sub(y, x) 
```

## Reassignment

Reassigning variables uses the iconic pattern using `=`:

```
x = 2
y = add(4, 4)
z = mul(y, x)
```

# Numbers

## General

Numbers can be integers or floating point:

```
1
2
3.141
0.1234567689
```

Numbers may be prefixed with as many zeros as you like, they will be cleaned up in parsing:

```
0001
000.0001
000000000000000000000000000000000000000000001
```

## Negative numbers

Negative numbers can be created by subtracting the desired number from zero:

```
x := sub(0, 1)
```

# Inbuilt functions

## Arithmetic

Four arithmetic functions are available to add, subtract, multiply, and divide:

```
a := add(2, 4)
b := sub(a, 3)
c := mul(b, 4)
d := div(c, 6)
```

## Print

The print function prints to standard terminal or console:

```
x := 2
y := 4
result := mul(x, y)
print(x, y, result)
```
