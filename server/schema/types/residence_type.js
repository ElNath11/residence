const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt
} = graphql;

const ResidenceType = new GraphQLObjectType({
	name: 'ResidenceType',
	fields: () => ({
		id: { type: GraphQLID },
		full_name: { type: GraphQLString },
		age: { type: GraphQLInt },
		address: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
		house_status: { type: GraphQLString },
		lived_since: { type: GraphQLInt },
		family_member: { type: GraphQLInt }
	})
});

module.exports = ResidenceType;