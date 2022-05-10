import React, { useState } from 'react'

const Button = (props) => (
    <button onClick={props.func}>{props.text}</button>
)

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Stats = ({ good, neutral, bad, all }) => {
    if (all.length === 0) {
        return (
            <>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </>
        )
    }
    let total = 0, positive = 0
    all.forEach((num) => {
        total += num
        if (num === 1) positive++
    })
    let avg = total / all.length, posRate = positive / all.length
    return (
        <>
            <h1>statistics</h1>
            <table>
                <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="all" value={all.length}/>
                <StatisticLine text="average" value={avg}/>
                <StatisticLine text="positive" value={posRate}/>
                </tbody>
            </table>
        </>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState([])

    const addGood = (newVal) => {
        return () => {
            setAll(allClicks.concat(1))
            setGood(newVal)
        }
    }
    const addNeu = (newVal) => {
        return () => {
            setAll(allClicks.concat(0))
            setNeutral(newVal)
        }
    }
    const addNeg = (newVal) => {
        return () => {
            setAll(allClicks.concat(-1))
            setBad(newVal)
        }
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button func={addGood(good + 1)} text={"good"} />
            <Button func={addNeu(neutral + 1)} text={"neutral"} />
            <Button func={addNeg(bad + 1)} text={"bad"} />
            <Stats all={allClicks} bad={bad} good={good} neutral={neutral} />
        </div>
    )
}

export default App