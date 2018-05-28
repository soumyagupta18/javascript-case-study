# Who

```text
"One for X, one for me."
```

When X is a name or "you".

If the given name is "Alice", the result should be "One for Alice, one for me."
If no name is given, the result should be "One for you, one for me."

## Running the test suite

The provided test suite uses [Jasmine](https://jasmine.github.io/).
You can install it by opening a terminal window and running the
following command:

```sh
npm install -g jasmine
```

Run the test suite from the directory with:

```sh
jasmine name.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

