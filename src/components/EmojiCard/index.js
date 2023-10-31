// Write your code here.
const EmojiCard = props => {
  const {emojiDetails, selectedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    selectedEmoji(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
