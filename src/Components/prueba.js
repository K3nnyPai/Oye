/**
 * Demonstrates several unsafe and error-prone JavaScript practices, including assignment in conditionals, improper closure handling in loops, and use of `eval`.
 *
 * @remark This function is intentionally written with bad practices and should not be used in production code.
 */
function BADfunction() {
    var a = 10
    var b = "20"
    if (a === b) {
        alert("a is equal to b")
    }
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
    console.log('This is unsafe!');
    // No return statement
}