console.log("Name: " + "Juwan Robinson".toUpperCase());
console.log("Career: Full Stack Engineer / Instructor");
console.log("Description: I like anime");
console.log("");

console.log("My Interests:");
console.log("* Music");
console.log("* Nature");
console.log("* Videogames");
console.log("* Family");
console.log("");

console.log("My Previous Experience:");
displayPosition("Innovate Birmingham", "Full Stack Engineer / Instructor", "learned stuff");
displayPosition("Auburn Tigers", "Quarterback", "Miserably Failed");
console.log("");

console.log("My Skills:");
displaySkill("Musician", true);
displaySkill("Piano, organ, trumpet", false);

function displayPosition(companyName: string, jobTitle: string, description: string) {
    console.log(jobTitle + " at " + companyName + " - " + description);
}

function displaySkill(skillName: string, isCool: boolean) {
    if (isCool == true) {
        console.log("BAM: " + skillName);
    } else {
        console.log(skillName);
    }
}

// function sum(num1, num2) {
//     console.log(num1 + num2);
// }

// sum(3, 4);
// sum(5, 7);