// function fetchDate(url, callback) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             callback(data)
//         })
//         .catch(err => {
//             console.log("Logging error :", err)
//         })
// }


// fetchDate('https://dummyjson.com/users', (userData) => {
//     const userId = userData.users[0].id;
//     fetchDate(`https://dummyjson.com/users/${userId}/posts`, (postsData) => {
//         const postId = postsData.posts[0].id
//         fetchDate(`https://dummyjson.com/comments/post/${postId}`, (commentsData) => {
//             const finalUserId = commentsData.comments[0].user.id;
//             fetchDate(`https://dummyjson.com/users/${finalUserId}`, (finalDetails) => {
//                 console.log(finalDetails)
//             })
//         })
//     })
// })

//* Promise => 

async function fetchPromiseData() {
    try {
        const usersResponse = await fetch('https://dummyjson.com/users');
        const jsonUserResponse = await usersResponse.json();
        const userId = jsonUserResponse.users[0].id;

        //* getting post details 
        const getPostByUserId = await fetch(`https://dummyjson.com/users/${userId}/posts`);
        const jsonPostResponse = await getPostByUserId.json();

        const postId = jsonPostResponse.posts[0].id;

        //*getting comments 
        const getCommentByPostId = await fetch(`https://dummyjson.com/comments/post/${postId}`)
        const jsonCommentResponse = await getCommentByPostId.json();
        const userIdFromComments = jsonCommentResponse.comments[0].user.id;
        const finalUser = await fetch(`https://dummyjson.com/users/${userIdFromComments}`);
        console.log(finalUser)
    } catch (error) {
        console.log("Error in fetching data ", error)
    }
};

fetchPromiseData()