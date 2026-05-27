import posts from '../data/posts.js';


function index(request, response) {
    response.status(200).json(posts);
}


function show(request, response) {
    const id = request.params.id;
    const realId = Number(id.trim());

    if (isNaN(realId)) {
        response.status(404)
            .json({
                error: 'Post not found',
                result: null
            });
        return;
    }

    const postFound = posts.find(post => post.id === realId);

    if (!postFound) {
        response.status(404)
            .json({
                error: 'Post not found',
                result: null
            });
        return;
    }

    response.json({
        error: null,
        result: postFound
    });
}


function store(request, response) {

    const { title, content, tags, prep_time } = request.body || {}

    if (!title || title.trim() === '') {
        return response
            .status(400)
            .json({
                error: 'Titolo richiesto'
            });
    }

    if (!content) {
        return response
            .status(400)
            .json({
                error: 'Contenuto richiesto'
            });
    }

     if (!Array.isArray(tags)) {
        return response
            .status(400)
            .json({
                error: 'Richiesti tag'
            });
    }

    
     if (typeof prep_time !== 'number' || prep_time <= 0) {
        return response
            .status(400)
            .json({
                error: 'Tempo di preparazione non valido'
            });
    }

    const newId = posts[posts.lentgh -1].id + 1;

    const newPost = {
        id : newId,
        ...request.body,
        create_at: new Date()
    }; 

    posts.push(newPost);

    console.log(newPost);

    response
        .status(200)
        .json({
            newPost
        });
}



function update(request, response) {
    response.json({
        message: 'elemento modificato interamente'
    });
}


function modify(request, response) {
    response.json({
        message: 'elemento modificato parzialmente'
    });
}

function destroy(request, response) {
    const id = Number(request.params.id);

    if (isNan(id) || id < 0) {
        response
            .status(400)
            .json({
                error: "id inserito errato",
                result: null
            });
    }

    const postIndex = posts.findIndex(posts => {
        posts.id === id
    });

    if (postIndex === -1) {
        return response
            .status(404)
            .json({
                error: 'Post not found',
                result: null
            });
    }

    post.splice(postIndex, 1);

    console.log(posts);

    response
        .status(204)
        .json({
            message: 'elemento eliminato'
        });
}


export { index, show, store, update, modify, destroy };