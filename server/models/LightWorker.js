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

const LightWorker = model("LightWorker", sphere3Schema);

module.exports = LightWorker;