import { decodeEntity } from 'html-entities'
import EmojiButton from './EmojiButton'

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards }) {
    const cardEl = data.map((emoji, index) => {
        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index)
        const matchedCardEntry = matchedCards.find(emoji => emoji.index === index)

    /**
     * Challenge:
     * 1) Create a new variable, "cardStyle", and conditionally assign it a value depending on whether a card is selected, matched or neither. Use the following values:
     *      a) Selected card: "card-item--selected".
     *      b) Matched card: "card-item--matched".
     *      c) Neither: "".
     * 2) Add "cardStyle" to the existing class set on the li element.
     */

        const btnStyle = matchedCardEntry ? "card-item--matched" : 

        return (
            <li key={index} className="card-item">
                <EmojiButton
                    content={decodeEntity(emoji.htmlCode[0])}
                    handleClick={() => handleClick(emoji.name, index)}
                    selectedCardEntry={selectedCardEntry}
                    matchedCardEntry={matchedCardEntry}
                />
            </li>
        )
    })
    
    return <ul className="card-container">{cardEl}</ul>
}