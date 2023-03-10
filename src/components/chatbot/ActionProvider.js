class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }

   async getdata(){
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {

      
      const greetingMessage = this.createChatBotMessage(data.activity)
      this.updateChatbotState(greetingMessage)
    })
    .catch(error => 
      {console.log(error.message)
        const greetingMessage = this.createChatBotMessage("unable to connect at moment")
    this.updateChatbotState(greetingMessage)
      });
  

  }

  givejoke(){

      const newjoke=this.createChatBotMessage("fuck off");
      this.updateChatbotState(newjoke)

  }
  
  updateChatbotState(message) {
 
// NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
 
    
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider