import { Article, Author, Comment, User } from "../database/index.js";

export default {
  Query: {
    articles: async (_, { per_page, page }) => {
      return await Article.findAll({
        limit: per_page,
        offset: per_page * (page - 1),
      });
    },
    article: async (_, { id }) => {
      return await Article.findOne({
        where: {
          id: id,
        },
      });
    },
    author: async (_, { id }) => {
      return await Author.findOne({
        where: {
          id: id
        }
      })
    }
  },
  Article: {
    author: async (parent)=>{
      return await Author.findOne({
        where: {
          id: parent.authorId
        }
      })
    },
    comments: async (parent)=>{
      return await Comment.findAll({
        where: {
          articleId: parent.id
        }
      })
    }
  },
  Author: {
    articles: async (parent)=>{
      return await Article.findAll({
        where: {
          authorId: parent.id
        }
      })
    }
  },
  User: {
    comments: async (parent)=>{
      return await Comment.findAll({
        where: {
          userId: parent.id
        }
      })
    }
  },
  Comment: {
    user: async (parent)=>{
      return await User.findOne({
        where: {
          id: parent.userId
        }
      })
    },
    article: async (parent)=>{
      return await Article.findOne({
        where: {
          id: parent.articleId
        }
      })
    }
  }
};
