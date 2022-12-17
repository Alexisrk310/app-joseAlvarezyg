import React from 'react';
export interface MessageErrorTypeInterface {
	msg: string | undefined;
	clase?: string;
}

export const MessageErrorType: React.FC<MessageErrorTypeInterface> = ({
	msg,
	clase,
}) => {
	return <small className={'form-text text-danger ' + clase}>{msg}</small>;
};

export default MessageErrorType;
