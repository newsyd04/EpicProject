import React, { useState } from 'react';
import Nav from './Nav';
function Chat() {
    // State to store messages and their timestamps
    const [messages, setMessages] = useState<{ text: string; time: string; }[]>([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleMessageChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCurrentMessage(event.target.value);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const timestamp = new Date().toLocaleTimeString();
        const newMessage = { text: currentMessage, time: timestamp };
        setMessages([...messages, newMessage]);
        setCurrentMessage(''); // Reset the input field after sending
    };

    return ( 
        <>
            <div className="container">
                <Nav />
                <div className="container Doc-Styling">
                    <article>
                        <h2>Chat Application</h2>
                        <div className="chat-area" style={{overflowY: 'auto', height: '300px', border: '1px solid #ccc', marginBottom: '10px'}}>
                            {messages.map((message, index) => (
                                <div key={index} style={{marginBottom: '10px'}}>
                                    <span style={{fontWeight: 'bold'}}>{message.time}: </span>
                                    <span>{message.text}</span>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                id="chat"
                                name="chat"
                                rows={4} // Fix: Change the value to a number
                                cols={50}
                                placeholder="Type your message here..."
                                value={currentMessage}
                                onChange={handleMessageChange}
                            ></textarea>
                            <input type="submit" value="Send Message" />
                        </form>
                        <form>
                            <fieldset role="group">
                                <input
                                type="text"
                                name="feedback"
                                placeholder="Enter your feedback here..."
                                />
                                <input className='secondary' type="submit" value="Submit" />
                            </fieldset>
                        </form>
                    </article>
                </div>
            </div>
        </>
    );
}

export default Chat;
