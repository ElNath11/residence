const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID,GraphQLList, GraphQLNonNull,GraphQLString } = graphql;
const UserType = require('./user_type');
const ResidenceType = require('./residence_type');
const mongoose = require('mongoose');
const Residence = mongoose.model('residence');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
  	user: {
  		type: UserType,
  		resolve(parentValue, args, req){
  			return req.user;	
  		}
  },
  	residences: {
  		type: new GraphQLList(ResidenceType),
  		resolve(){
  			return Residence.find({});	
  		}
  	},
    residencesFilter: {
      type: new GraphQLList(ResidenceType),
      args: { house_status: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { house_status }){
        return Residence.find({house_status});  
      }
    },
    residence: {
      type: ResidenceType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Residence.findById(id);
      }
    }
  })
});

module.exports = RootQueryType;
