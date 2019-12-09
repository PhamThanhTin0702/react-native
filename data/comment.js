var comments = [
    {
        username: 'Thanh Tin',
        comment: 'Hello sir, good morning'
    },
    {
        username: 'Trung Quoc',
        comment: 'Tao la trung quoc'
    },
    {
        username: 'Viet Name',
        comment: 'Hello, where are you from'
    }
]

var commentFunction = {}

commentFunction.insertComment = (name, commentUser) => {
    comments.push({
        username: name,
        comment: commentUser
    })
}

commentFunction.getComment = () => {
    const commentArray = comments
    return commentArray
}

export default commentFunction