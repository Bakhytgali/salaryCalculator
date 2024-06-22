document.addEventListener("DOMContentLoaded", () => {
    const fixedSalary = document.querySelector("#fixed-salary");
    const earnedAmount = document.querySelector("#earned-amount");
    const button = document.querySelector(".calculate");
    const result = document.querySelector(".result");

    button.addEventListener("click", () => {
        const salary = Number(fixedSalary.value);
        const amount = Number(earnedAmount.value);
        
        result.textContent = `${ Math.floor(salary + (0.036 * amount )) } KZT`;
    });
});

