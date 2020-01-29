class RESTAPI {
    
    API = 'http://localhost:3000';

    getPosts() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.API}/posts`);
        xhr.send();
        
        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status === 200) {
                this.renderResponse(xhr.response);
            }
        };
    }

    getPost(id) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.API}/posts/${id}`);
        xhr.responseType = 'json';

        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                console.log(xhr.response);
            }

            if (xhr.status === 404) {
                console.log('Not found error');
            }
        };
    }

    addPost() {
        const data = this.getDataFromForm();

        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${this.API}/posts`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onload = () => {
            if (xhr.status === 201) {
                console.log('Post was added');
            }
        };
    }

    deletePost(id) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${this.API}/posts/${id}`);
        xhr.send();

        xhr.onload = () => {
            console.log(xhr.response);
        };
    }

    editPost(id) {
        const data = this.getDataFromForm();
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `${this.API}/posts/${id}`);

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onload = () => {
            console.log(xhr.response);
        };
    }
      
    getDataFromForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const text = document.getElementById('text').value;
    return { title, author, text };
    }

    renderResponse(res) {
        res.forEach((post) => {
            const div = document.createElement('div');
            const template = `<h3>${post.title}</h3>
                                <p>${post.text}</p>
                                <span>${post.author}</span><br>
                                <a onclick="restapi.editPost(${post.id})">Change post</a>
                                <a onclick="restapi.deletePost(${post.id})">Delete post</a>`;
            div.innerHTML = template;
            document.querySelector('body').append(div);
        });
    }
}
const restapi = new RESTAPI();