import React, {Component} from 'react';

class DisplayQuote extends Component {
    render() {
        const randomIndex = this.props.randomIndex;
        const quoteData = this.props.quoteData;
        return (
            <div className="App-quote-container">
                <p>{quoteData[randomIndex].quote}</p>
                <h3 className="App-quote-title">{quoteData[randomIndex].name}</h3>
                <a href={quoteData[randomIndex].link} className="App-quote-youtube-link" target='_blank' rel="noopener noreferrer">
                    Смотреть на YouTube
                </a>
            </div>
        )
    }
}

export default DisplayQuote;