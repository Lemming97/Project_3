const { Schema, model } = require('mongoose');

const sphere3Schema = new Schema(
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
sphere3Schema.virtual('voteCount').get(function () {
    return this.votes.length;
});

const Sphere3 = model("Sphere3", sphere3Schema);

module.exports = Sphere3;