import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default:
        "https://imgs.search.brave.com/oMD3Al_CZraPEaPnF28GqAX1i7qbRsie610nvBPRq5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM3/OTMzODE0L3Bob3Rv/L3BvcnRyYWl0LW9m/LWJ1c2luZXNzbWFu/LXNtaWxpbmctaW4t/YnVzaW5lc3Mtb2Zm/aWNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1KZDMxWVlf/TlNHOXpwLXdhLWRH/U05SMURjV3duN3h4/U3Q0Szd3SUNvSWZj/PQ",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
