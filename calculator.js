const AVERAGE = 14.61
let hours = 0.0
let times = 0
let kids = 0
let discount = 0.0
let final = 0.0

/* 
Here's what this needs to do.
1. take average and multiply it by {hours}
2. take that number, multiply by {kids}
3. take that number, multiply by {times}
4. choose discount based on family/friends
    A. 100% total price (0% off, full price) (discount var: 1)
    B. 75% total price (25% off) (discount var: .75)
    C. 50% total price (50% off, half off) (discount var: .5)
    D. 25% total price (75% off) (discount var: .25)
    E. 0% total price (100% off, free) (discount var: 0)
    these are the available options (final unless legitimate reason to add extra)
5. give result

FORMULA:

x = (((AVERAGE * hours) * kids) * times) * discount
*/

function calculate() {

    // vars
    hours = document.getElementById('hrsInput').value
    console.log(hours)
    kids = document.getElementById('kidsInput').value
    console.log(kids)
    times = document.getElementById('timesInput').value
    console.log(times)
    discount = document.getElementById('discountInput')
    discountValue = discount.options[discount.selectedIndex].value
    console.log(discount)
    console.log(discountValue)

    // calculate
    final = AVERAGE * hours
    console.log(final)
    final = final * kids
    console.log(final)
    final = final * times
    console.log(final)
    // i apologize for the following spaghetti code, the switch statement didn't want to work
    if (discountValue === "full") {
        final = final * 1
        console.log(final)
    } else if (discountValue === "three_quarters") {
        final = final * 0.75
        console.log(final)
    } else if (discountValue === "half") {
        final = final / 2
        console.log(final)
    } else if (discountValue === "quarter") {
        final = final * 0.25
        console.log(final)
    } else if (discountValue === "free") {
        final = final * 0
        console.log(final)
    } else console.error("WHAT DID YOU DO????? In all seriousness, please report this error and the steps necessary to recreate it in the GitHub repo issues page. YOU BROKE IT AAAAAAAAA")

    // make it look good
    final = Math.round(final)
    stylizedFinal = "$" + final.toString()

    document.getElementById('finalRes').innerHTML = stylizedFinal
}