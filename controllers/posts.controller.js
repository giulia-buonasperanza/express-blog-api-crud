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
    const id = Number(request.params.id);

    if(isNan(id) || id < 0) {
        response
            .status(400)
            .json({
                error: "id inserito errato",
                result:null
            });
    }

    const postIndex = posts.findIndex(posts => {
        posts.id === id
    });

    if(postIndex === -1) {
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


export { index, show, store, update, modify, destroy};