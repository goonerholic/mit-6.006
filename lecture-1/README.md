# Lecture 1: Peak Finding

## 🚀 One-dimensional Version

**Definition of a peak**: Given array `A`, index `A[n]` is a peak `if` and `only if` `A[n] > A[n - 1]` and `A[n] > A[n + 1]`.

`A = [a, b, c, d, e, f, g, h]`

<u>**Problem**</u>: Find a peak if it exists.

### Straightforward Algorithm

Start from left to the end, find the peak by definition.  
In worst case, runtime complexity would be **θ(n)**.

### Better Idea

> _Divide and Conquer_

Given an array `a`:

```python
a = [1, 2, ..., n/2 - 1, n/2, n/2 + 1, ..., n - 1, n]
```

Look at n/2 position:

```javascript
if a[n/2] < a[n/2 - 1]:
    // only look at left half to look for a peak
    [1, ... n / 2 - 1]
else if a[n/2] < a[n/2 + 1]:
    // only look at right half to look for a peak
    [n / 2 + 1, ..., n]
else:
    a[n/2] is a peak
```

### What is the complexity?

If `T(n)` denotes work required to solve problem with n elements

```javascript
T(n) = T(n / 2) + θ(1) = θ(1) * lb(n) = θ(lb(n)); // θ(1) to compare a[n/2] to neighbors // in recursive manner
```

T: The amount of work to solve the problem

## 🚀 Two-dimensional Version

Definition: Given two-dimensional array `A` which has n rows and m columns,
`A[i][j]` is a peak, if  
`A[i][j] >= A[i][j - 1] and`  
`A[i][j] >= A[i][j - 1] and`  
`A[i][j] >= A[i - 1][j] and`  
`A[i][j] >= A[i + 1][j]`

### **Attempt #1**: Extend 1-D Divide and Conquer to 2-D

- Pick middle column `j = m/2`.
- Find a 1D-pick at `i, j`.
- Use `(i, j)` as a start point on row `i` to find 1D-pick on row `i`.

### Attemp #1 fails

2D-peak may not exist on row `i`.

### **Attempt #2**

- Pick middle column `j = m/2`.
- Find global maximum on column j at (i, j).
- Compare `(i, j - 1), (i, j), (i, j + 1)`.
- Pick left columns of `(i, j - 1) > (i, j)`.
- Similarly for right
- `(i, j)` is a 2D-pick if neither condition holds.
- Solve the new problem with half the number of columns.
- When you have a single column, find global maximum and you're done.

### Complexity of Attempt #2

If `T(n, m)` denotes work required to solve problem with n rows and m columns:

```javascript
T(n, m) = T(n, m/2) + θ(n) // θ(n) to find global max on a column(n rows)
        = θ(n) + ... + θ(n) // θ(n) * log(m)
        = θ(nlog(m)) = θ(nlog(n)) if m = n
```
