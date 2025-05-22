import { Schema, model, models } from 'mongoose'

interface Event {
    _id: string
    event: string
    start_date: Date
    end_date: Date
    all_day: boolean
    description?: string
    image?: {
        url: string
        publicId?: string
    }
    ticketProductId?: Schema.Types.ObjectId
    createdAt?: Date
    updatedAt?: Date
}

const EventSchema = new Schema({
    title : { type: String, required: true },
    start_date : { type: Date, required: true },
    end_date : { type: Date, required: true },
    all_day : { type: Boolean, required: true },
    description : { type: String, maxlength: 580 },
    image : {
        url : String,
        publicId: String,
    },
    ticketProductId : { type: Schema.Types.ObjectId, ref: 'Product' },
},{ timestamps: true })

export const Event = models.Event ?? model<Event>('Event', EventSchema)
