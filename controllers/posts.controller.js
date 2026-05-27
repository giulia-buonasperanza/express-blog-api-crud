import posts from '../data/posts.js';


function index(request, response) {
    response.json(posts);
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
    response.json({
        message: 'nuovo elemento creato!'
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
    response.json({
        message: 'elemento eliminato'
    });
}


export { index, show, store, update, modify, destroy};