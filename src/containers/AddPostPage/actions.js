import database from '../../firebase/firebase';

//ADD_EXPENSE
export const addpost = (post) => ({
    type: 'ADD_POST',
    post: {
        ...post
    }
}); 

export const startAddPost = (postData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().login.uid;
        const {
            title = '', 
            body = '', 
        } = postData;
        const post = { title, body };

        return database.ref(`users/${uid}/posts`).push(post)
        .then((ref) => {
            dispatch(addpost({
                id: ref.key,
                ...post
            }));
        });

    };
};