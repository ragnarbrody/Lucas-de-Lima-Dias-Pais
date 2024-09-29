import mongoose, { Schema, Document } from 'mongoose';

export interface IResource extends Document {
  name: string;
  description: string;
  category: string;
}

const ResourceSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String},
  category: { type: String, required: true },
});

export default mongoose.model<IResource>('Resource', ResourceSchema);