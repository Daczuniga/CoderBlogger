


router.get('/home', (req, res) => {
    // when we hit this route --> WHAT LOGIC SHOULD HAPPEN?
    // we want to get ALL POSTS
    // Query the DB for the posts


    res.render('home', { posts: posts })
})