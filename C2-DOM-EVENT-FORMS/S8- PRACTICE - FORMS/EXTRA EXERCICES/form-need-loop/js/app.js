

document.addEventListener('change', e => {
    e.preventDefault();
    const genders = document.querySelectorAll('input[name=gender]');
    const teachers = document.querySelectorAll('input[name=teacher]');
    const mealTime = document.querySelectorAll('#select-meal-type option');

    // Radio input
    let gen = "";
    for (let gender of genders) {
        if (gender.checked) {
            gen = gender.value;
        }
    }
    console.log(gen);


    // Checkbox input
    let teach = "";
    for (let teacher of teachers) {
        if (teacher.checked) {
            teach += teacher.value + " , ";
        }
    }
    console.log(teach);

    // multiple select
    let meal = "";
    for (let m of mealTime) {
        if (m.selected) {
            meal += m.value + " , ";
        }
    }
    console.log(meal);



    // output
    const spanGender = document.querySelector('.gender');
    const spanTeacher = document.querySelector('.teacher');
    const spanMeal = document.querySelector('.meal');

    spanGender.textContent = gen;
    spanTeacher.textContent = teach;
    spanMeal.textContent = meal;
});