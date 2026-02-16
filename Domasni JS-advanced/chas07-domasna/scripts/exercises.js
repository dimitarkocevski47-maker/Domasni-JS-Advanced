// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2

let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let getData = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let averageAboveThree = data.filter(st => st.averageGrade > 3 );
            console.log(averageAboveThree);

            let femaleWithAvgAboveFive = data
            .filter(st => st.gender === "Female" && st.averageGrade === 5)
            .map(femaleName => femaleName.firstName)
            console.log(femaleWithAvgAboveFive);

            let maleNameCityAge = data
            .filter(st => st.gender === "Male" && st.city === "Skopje" && st.age > 18)
            .map(maleFullName => maleFullName.firstName && maleFullName.lastName)
            console.log(maleNameCityAge);
            
            let femaleAvgAge = data
            .filter(st => st.gender === "Female" && st.averageGrade && st.age > 24)
            console.log(femaleAvgAge);
            
            let maleNameWithB = data
            .filter(st => st.gender === "Male" && st.firstName[0] === "B" && st.averageGrade > 2)
            .map(m => m.firstName)
            console.log(maleNameWithB);
            
        })
}
getData(url);