import React, { useState } from 'react'

const Button = (props) => <button onClick={props.func}>{props.text}</button>
const Header = ({ text }) => <h1>{text}</h1>
const Anecdote = ({text, votesCount}) =>
    <div>
        <p>{text}</p>
        <p>has {votesCount} votes</p>
    </div>

const Winner = ({anecdotes, allVotes}) => {
    const highestVoteCount = Math.max(...allVotes)
    const winnerIndex = allVotes.indexOf(highestVoteCount)
    const winner = anecdotes[winnerIndex]
    if (highestVoteCount === 0) {
        return null
    }

    return (
        <div>
            <Header text={"Anecdote with most votes"} />
            <p>{winner}</p>
            <p>has {highestVoteCount} votes</p>
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [allVotes, setAllVotes] = useState(Array(7).fill(0))

    const handleAnecdoteClick = () => {
        const arrayIndex = Math.floor(Math.random() * anecdotes.length)
        setSelected(arrayIndex)
    }

    const handleVoteClick = () => {
        const newAllVotes = [...allVotes]
        newAllVotes[selected] += 1
        setAllVotes(newAllVotes)
    }

    return (
        <div>
            <Header text={"Anecdote of the day"} />
            <Anecdote text={anecdotes[selected]} votesCount={allVotes[selected]} />
            <Button func={handleVoteClick} text="vote"/>
            <Button func={handleAnecdoteClick} text="Next anecdote"/>
            <Winner allVotes={allVotes} anecdotes={anecdotes} />
        </div>
    )
}

export default App