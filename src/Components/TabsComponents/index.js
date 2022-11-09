import './index.css'

const TabsComponents = props => {
  const {eachTab, updatingTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickingTab = () => {
    updatingTabId(tabId)
  }

  const tabHighLight = isActive ? 'high-light' : ''

  return (
    <li className="li-each-tab">
      <button
        type="button"
        className={`button ${tabHighLight}`}
        onClick={onClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsComponents
