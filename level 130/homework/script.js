const postsContainer = document.getElementById('posts');

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        posts.slice(0, 5).forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>`;
            postsContainer.appendChild(postElement);
        });

    } catch (error) {
        console.error('შეცდომა:', error);
        postsContainer.innerHTML = '<p>ვერ მოვახერხეთ მონაცემების მიღება.</p>';
    }
}

fetchPosts();
