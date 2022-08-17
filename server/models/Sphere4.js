const { Schema, model } = require('mongoose');

const sphere4Schema = new Schema(
    {
        text: {
            type: String,
            required: true,
            trim: true        
        }
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)
sphere4Schema.virtual('voteCount').get(function () {
    return this.votes.length;
});

const Sphere4 = model("Sphere4", sphere4Schema);

module.exports = Sphere4;