import { Selection } from './components/List/Selection'

function App() {
  return (
    <div
      className={`
      flex flex-col
      justify-center
      items-center
      text-white
      bg-gradient-to-tr from-gray-600 to-gray-900
      h-screen
    `}
    >
      <Selection value={true} />
      <Selection value={false} />
    </div>
  )
}

export default App
