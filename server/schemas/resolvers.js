const { User, Thought } = require('../models');

//resolvers serve the response for the queries on the typeDefs.js page
const resolvers = {
    Query: {
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        }
    }
};

module.exports = resolvers;