<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  A: `{}` 

<i>The result is {} because the code creates a variable named greeting and assigns it an empty object {}. When you log the greeting variable, it displays the value, which is an empty object. Therefore, the output is an empty object {}.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D: `3`

<i>The result is 3 because JavaScript automatically handles different types when performing operations like addition. Even though one of the values is a string ("2"), JavaScript converts it to a number and then adds 1 and 2 together, giving us the final result of 3. This behavior is called "type coercion," and it's a helpful feature in JavaScript that makes it flexible with data types when using operators like +.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>The answer is ['🍕', '🍫', '🥑', '🍔'] because the code modifies the info.favoriteFood property to "🍝," but this change only affects the info object and doesn't alter the original food array. Therefore, when you log food, it remains the same as initially defined, which is ['🍕', '🍫', '🥑', '🍔']. The modification to info.favoriteFood doesn't impact the food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>The result is "Hi there, undefined" because the sayHi function expects an argument name when it's called. However, in this case, the function is called without any arguments (sayHi()), so name is undefined inside the function. As a result, the function concatenates "Hi there, " with the undefined value, producing "Hi there, undefined" as the output.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>The result is 3 because the code goes through each number in the 'nums' array one by one. It adds 1 to a counter  whenever it finds a number that isn't zero. In the array [0, 1, 2, 3], only the numbers 1, 2, and 3 are not zero, so they each add 1 to the count. As a result, the final count is 3</i>

</p>
</details>
