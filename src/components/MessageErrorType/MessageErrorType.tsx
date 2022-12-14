import React from 'react';
export interface MessageErrorTypeInterface {
	msg: string | undefined;
}




export const MessageErrorType: React.FC<MessageErrorTypeInterface> = ({msg}) => {
	return <small className="form-text text-danger">{msg}</small>;
};

export default MessageErrorType;