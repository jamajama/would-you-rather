import includes from 'core-js/fn/array/includes';

export function formatDate (timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString('en-US');
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function formatQuestion (question, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = question;
    const { name, avatarURL } = author;

    return {
        name,
        id,
        timestamp,
        avatar: avatarURL,
        optionOne,
        optionTwo,
        hasVoted: includes(optionOne, authedUser) || includes(optionTwo, authedUser)
        // likes: likes.length,
        // replies: replies.length,
        // hasLiked: likes.includes(authedUser),
        // parent: !parentQuestion ? null : {
        //     author: parentQuestion.author,
        //     id: parentQuestion.id,
        // }
    }
}

