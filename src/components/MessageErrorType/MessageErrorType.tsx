import React from 'react';
export interface MessageErrorTypeInterface {
	msg: string | undefined;
	clase?: string;
}

export const MessageErrorType: React.FC<MessageErrorTypeInterface> = ({
	msg,
	clase,
}) => {
	return <small className= "text-red-600">{msg}</small>;
};

export default MessageErrorType;
