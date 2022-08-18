const { Schema, model } = require('mongoose');

const sphere2Schema = new Schema(
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
sphere2Schema.virtual('voteCount').get(function () {
    return this.votes.length;
});

const MagicMark = model("MagicMark", sphere2Schema);

module.exports = MagicMark;