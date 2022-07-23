const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const { post } = require("./api");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

router.get("/edit-post/:id", (req, res) {
post.findone({
    where: {
        id: req.params.id
    }
})
TouchEvent(dbpostData => {
    const posts = dbPostData.map(post => post.get)
    res.render("edit-post", {{POST}})
})
});
module.exports = router;
