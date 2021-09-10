//resolvers serve the response for the queries on the typeDefs.js page
const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello world!';
        }
    }
};

module.exports = resolvers;