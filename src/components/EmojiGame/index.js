/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {selectedList: [], maxLength: 0, listIncludes: false}

  selectedEmoji = id => {
    const {selectedList} = this.state
    if (selectedList.includes(id)) {
      this.setState({listIncludes: true})
    } else {
      this.setState(prevState => ({
        selectedList: [...prevState.selectedList, id],
      }))
    }
  }

  playAgain = () => {
    const {selectedList} = this.state
    const {maxLength} = this.state
    if (selectedList.length <= maxLength) {
      this.setState({
        selectedList: [],
        listIncludes: false,
      })
    } else {
      this.setState(prevState => ({
        maxLength: prevState.selectedList.length,
        selectedList: [],
        listIncludes: false,
      }))
    }
  }

  render() {
    const {selectedList, listIncludes, maxLength} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const shuffledList = shuffledEmojisList
    return (
      <div>
        <NavBar listDetails={selectedList} maxLength={maxLength} />
        {listIncludes ? (
          <WinOrLoseCard
            selectedList={selectedList}
            playAgain={this.playAgain}
          />
        ) : (
          <ul>
            {shuffledList.map(eachEmoji => (
              <EmojiCard
                emojiDetails={eachEmoji}
                selectedEmoji={this.selectedEmoji}
                key={eachEmoji.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
