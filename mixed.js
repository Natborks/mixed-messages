_joke = {
    _name : 'Jokes',
    _jokes : [
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
        "What kind of dog does Dracula have? A bloodhound!"
    ],

    getRandomJoke () {
        const jokesLength = this._jokes.length

        const jokeIdx = Math.floor(Math.random() * jokesLength)

        return this._jokes[jokeIdx]
    },
}


function displayRandomJoke () {
    console.log(_joke.getRandomJoke())
}


displayRandomJoke()
