var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    topics.forEach((topic) => console.log(topic));
}

function selectTopic() {
    if (topics.includes(randomTopic)) {
        console.log(''.concat("Let's study ", randomTopic, "!"))
    } else {
        console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();