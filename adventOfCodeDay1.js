// advent of code day #1

function elfCalories(string) {
    let result = 0;
    let persons = string.split('\n\n');
    for(let i  = 0; i < persons.length; i++) {
        let meal = persons[i].split("\n");
        let sum = 0
        for(let j = 0; j < meal.length; j++) {
            sum += parseInt(meal[j]);
        }
        console.log(sum);
        if(sum > result) {
            result = sum;
        }
    }
    return result;
}