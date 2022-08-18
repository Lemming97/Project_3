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

const SorcerersSphere = model("SorcerersSphere", sphere1Schema);

module.exports = SorcerersSphere;