const postRouter = require('../routers/postRouter');

module.exports = (app) => {
    app.use('/api/post', postRouter);
}