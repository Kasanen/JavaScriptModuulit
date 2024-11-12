// Candidates
const amount = prompt("Give the number of candidates");

while (amount < 1){
    console.log("Give at least one candidate");
    const amount = prompt("Give the number of candidates");
}

const candidates = [];

for (let i = 0; i < amount; i++){
    const name = prompt("Name for candidate " + (i + 1));
    candidates.push({name: name, votes: 0});
    console.log(name);
}

// Voting
const voters = prompt("Give the number of voters");

for (let i = 0; i < voters; i++){
    const vote = prompt("Give the name of the candidate");
    for (let j = 0; j < candidates.length; j++){
        if (vote == candidates[j].name){
            candidates[j].votes++;
            console.log("Vote given to " + candidates[j].name);
        }
    }
}

// Results
candidates.sort((a, b) => {
    console.log(a, b);
    return b.votes - a.votes;
 });

console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");
console.log("results:");
for (let i = 0; i < candidates.length; i++){
    console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
}