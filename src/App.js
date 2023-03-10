// import logo from './logo.svg';
import './App.css';
import ChatBotPage from './components/chatbot/ChatBotPage';
function App() {
  return (
    
      // <div className="relative h-screen w-screen bg-gray-600">
      //   <div className="absolute bottom-0 right-0 p-4">

      //   <ChatBotPage/>
      //   </div>
      // </div>
        <div className='w-screen h-screen'>

          <h1 className='text-center text-3xl bg-yellow-500 '>Bored ? i will give you random ideas to do </h1>

      <div className='w-full h-full flex justify-center items-center bg-gray-700'>
        <ChatBotPage/>
      </div>
        </div>


  );
}

export default App;
