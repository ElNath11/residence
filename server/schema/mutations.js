const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLNonNull
} = graphql;
const UserType = require('./types/user_type');
const ResidenceType = require('./types/residence_type');
const AuthService = require('../services/auth');
const mongoose = require('mongoose');
const Residence = mongoose.model('residence');

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields:{
		signup: {
			type: UserType,
			args: {
				email: { type: GraphQLString },
				password: { type: GraphQLString }
			},
			resolve(parentValue, { email, password }, req){
				return AuthService.signup({ email, password, req });
			}
		},
		logout: {
			type: UserType,
			resolve(parentValue, args, req){
				const { user } = req;
				req.logout();
				return user;
			}
		},
		login: {
			type: UserType,
			args: { 
				email: { type: GraphQLString },
				password: { type: GraphQLString }
			},
			resolve(parentValue, { email, password }, req) {
				return AuthService.login({ email, password, req });
			}
		},
		addResidence: {
	      type: ResidenceType,
	      args: {
	        full_name: { type: GraphQLString },
			age: { type: GraphQLInt },
			address: { type: GraphQLString },
			email: { type: GraphQLString },
			phone: { type: GraphQLString },
			house_status: { type: GraphQLString },
			lived_since: { type: GraphQLInt },
			family_member: { type: GraphQLInt }
	      },
	      resolve(parentValue, { full_name, age, address, email, phone, house_status, lived_since, family_member }) {
	        return (new Residence({ full_name, age, address, email, phone, house_status, lived_since, family_member })).save()
	      }
	    },
	    deleteResidence: {
	      type: ResidenceType,
	      args: { id: { type: GraphQLID } },
	      resolve(parentValue, { id }) {
        return Residence.findOneAndRemove({ _id: id });
      }
    },
     updateResidence: {
	      type: ResidenceType,
	      args: { 
	      	id: { type: new GraphQLNonNull(GraphQLString) },
	      	full_name: { type: GraphQLString },
			age: { type: GraphQLInt },
			address: { type: GraphQLString },
			email: { type: GraphQLString },
			phone: { type: GraphQLString },
			house_status: { type: GraphQLString },
			lived_since: { type: GraphQLInt },
			family_member: { type: GraphQLInt }
	      },
	      resolve(parentValue, args) {
        	return Residence.findOneAndUpdate({ _id : args.id },
                        { $set : args },
                        { upsert: true, new: true });
     	}
    }
	}
});

module.exports = mutation;