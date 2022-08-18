const { AuthenticationError } = require("apollo-server-express");
const { User, SorcerersSphere, MagicMark, LightWorker } = require("../models");
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
    getSorcerersSphere: async (parent, { _id }, context) => {
      if (context.user) {
        const sphereData = await SorcerersSphere.findOne({ _id: _id })
          .select("-__v");

        return sphereData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getMagicMark: async (parent, { _id }, context) => {
      if (context.user) {
        const sphereData = await MagicMark.findOne({ _id: _id })
          .select("-__v");

        return sphereData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getLightWorker: async (parent, { _id }, context) => {
      if (context.user) {
        const sphereData = await LightWorker.findOne({ _id: _id })
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
