import React from 'react';
import Message from './Message';

const MessageList = (props) => {

	const messages = props.messages.map((message, index) => {
		return (
			<li key={index} className="component_list">
			<div className="component">
			<Message message={message}/>
			</div>
			</li>
		)
	})

	return (
		<ul className="component-list">
		{messages}
		</ul>
	)
}

export default MessageList;
