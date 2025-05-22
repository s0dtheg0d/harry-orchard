import { Schema, model, models } from 'mongoose'

export interface Product {
    _id: string;
    name: string;
    type: 'fruit' | 'jam' | 'ticket';
    priceCents: number;
    image: {
        url: string;
        publicId?: string;
    };
    stockQty: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
};

const ProductSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['fruit', 'jam', 'ticket'], required: true },
    priceCents: { type: Number, required: true },
    image: {
        url: { type: String, required: true },
        publicId: { type: String }
    },
    stockQty: { type: Number, default: 0 },
    description: { type: String, maxlength: 580 }
}, { timestamps: true });

export const Product = models.Product ?? model<Product>('Product', ProductSchema);