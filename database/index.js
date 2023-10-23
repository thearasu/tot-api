import { Sequelize } from "sequelize";
import blog from './models/article.js';
import author from './models/author.js';
import user from './models/user.js';
import comment from "./models/comment.js";
import 'dotenv/config'

const sequelize = new Sequelize({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    dialect: 'mysql',
    logging: false
})

const Article = sequelize.define('blog', blog);
const Author = sequelize.define('author', author);
const User = sequelize.define('user', user);
const Comment = sequelize.define('comment', comment);

(
    async ()=>{
        await sequelize.sync()
    }
)()

export {Article, Author, User, Comment }