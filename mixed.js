_joke = {
    _name : 'Jokes',
    _jokeCategories : [
        {
            name : 'Dad Jokes',
            category_jokes :  [
                "My wife said I should do lunges to stay in shape. That would be a big step forward.",
                "When two vegans get in an argument, is it still called a beef?",
                "That car looks nice but the muffler seems exhausted.",
                "What country\'s capital is growing the fastest? Ireland. Every day it\'s Dublin."
            ],
        },
        {
            name : 'Normal Jokes',
            category_jokes : [
                "Two men walk into a bar. The third one ducks!",
                "I'm reading an antigravity book. It's impossible to put down!",
                "What kind of cheese doesn't belong to you? Nacho cheese!",
                "Why was 6 afraid of 7?, Because 7 ate 9!",
                "You can't trust atoms. They make up everything!",
                "Why do mushrooms get invited to all the best parties? Because they are such fungis!",
                "Why did the dog cross the road? To get to the barking lot!",
                "Why do potatoes argue? Because they can't see eye to eye!",
                "Can February March? No but April may",
                "What's the loneliest cheese? ProvAlone!",
                "What kind of dog does Dracula have? A bloodhound!",
                "Dear Math, grow up and solve your own problems."
            ]
        }
    ],

    getRandomJoke () {
        const randCategory= this.getRandomCategory()

        const jokesLength = randCategory.category_jokes.length

        const jokeIdx = Math.floor(Math.random() * jokesLength)

        return `${randCategory.category_jokes[jokeIdx]} (${randCategory.name})`
    },

    getRandomCategory () {
        const numCategories = this._jokeCategories.length

        const catIdx = Math.floor(Math.random() * numCategories)

        return this._jokeCategories[catIdx]
    }

}


function displayRandomJoke () {
    console.log(_joke.getRandomJoke())
}


displayRandomJoke()
