const { Schema, model } = require('mongoose');

const sphere1Schema = new Schema(
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
sphere1Schema.virtual('voteCount').get(function () {
    return this.votes.length;
});

const Sphere1 = model("Sphere1", sphere1Schema);

module.exports = Sphere1;