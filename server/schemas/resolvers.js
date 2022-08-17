const { AuthenticationError } = require("apollo-server-express");
const { User, Sphere1, Sphere2, Sphere3, Sphere4 } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getSphere1: async (parent, { _id }, context) => {
      if (context.user) {
        const sphereData = await Sphere1.findOne({ _id: _id })
          .select("-__v");

        return sphereData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getSphere2: async (parent, { _id }, context) => {
      if (context.user) {
        const sphereData = await Sphere2.findOne({ _id: _id })
          .select("-__v");

        return sphereData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getSphere3: async (parent, { _id }, context) => {
      if (context.user) {
        const sphereData = await Sphere3.findOne({ _id: _id })
          .select("-__v");

        return sphereData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getSphere4: async (parent, { _id }, context) => {
      if (context.user) {
        const sphereData = await Sphere4.findOne({ _id: _id })
          .select("-__v");

        return sphereData;
      }

      throw new AuthenticationError("Not logged in");
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
