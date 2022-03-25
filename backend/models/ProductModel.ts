import { Schema, model } from "mongoose";
import { randomBytes } from "crypto";

const ProductSchema = new Schema({
  name: {
    unique: true,
    type: String,
    required: true,
  },
  price: {
    type: Schema.Types.Mixed,
    required: true,
  },
  mainImage: {
    default: "https://react.semantic-ui.com/images/wireframe/image.png",
    type: String,
  },
  imageSet: {
    type: Array,
  },
  url: {
    type: String,
    default: randomBytes(13).toString("hex"),
  },
  rating: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: `Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Ad at laboriosam porro reprehenderit dict
     a numquam possimus consequuntur corrupti officiis mollitia, 
     repudiandae exercitationem suscipit iure ut nihil, vel aperiam quam
    error, officia pariatur inventore nesciunt adipisci nam. Quam, itaqu
      e? Incidunt exercitationem nulla impedit eveniet eligendi vel vero se
      d nemo, rerum dolor.`,
  },
  available: {
    type: Boolean,
    default: false,
  },
  maker: {
    type: String,
    default: ["philips", "sony", "samsung", "panasonic"][
      Math.floor(Math.random() * 4)
    ],
  },
  productType: {
    type: String,
    required: true,
  },
  characteristics: {},
});

export const ProductModel = model("Product", ProductSchema);
