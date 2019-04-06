import React, { Component } from 'react';
import './App.css';
import DisplayQuote from './components/DisplayQuote';

let getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quoteData: [],
            randomIndex: 0
        };

        this.getRandomQuote = this.getRandomQuote.bind(this);
        this.fetchQuotes = this.fetchQuotes.bind(this);
    }

    componentDidMount() {
        this.setState(this.fetchQuotes);
    }

    fetchQuotes() {
        let url = 'https://gist.githubusercontent.com/nikolaytarasenko/0a7ba880365615504d672cce6a59290b/raw/c7eb2ecdfc3c10cb0828bf7d56ca8bf99d48b205/korzh-quotes';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    quoteData: data,
                    randomIndex: getRandomNumber(data.length)
                });
            });
    }

    getRandomQuote() {
        this.setState({
            randomIndex: getRandomNumber(this.state.quoteData.length)
        })
    }

    render() {
        const { quoteData, randomIndex } = this.state;
        if (quoteData.length === 0) return <div className="App">loading...</div>;

        let tweet = "https://twitter.com/intent/tweet?text=" + quoteData[randomIndex].quote;
        return (
            <div className="App">
                <DisplayQuote randomIndex={randomIndex} quoteData={quoteData} />
                <div className="buttons">
                    <button type="button" onClick={this.getRandomQuote}>Следующая</button>
                    <button type="button">
                        <a href={tweet} target="_blank" rel="noopener noreferrer">Твитнуть</a>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;