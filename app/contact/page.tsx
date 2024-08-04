"use client";
import { Meteors } from "../components/ui/meteors";
function Contact() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="space-y-8">
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>
        <p className="text-center max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid
          voluptates repellendus enim autem doloremque quibusdam quod ullam
          veniam repellat.
        </p>
        <div className="max-w-lg mx-auto space-y-6">
          <div>
            <input
              type="email"
              placeholder="Please enter your email"
              className="bg-zinc-900 w-full py-4 px-6 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <textarea
              cols={50}
              placeholder="Please enter your message"
              className="bg-zinc-900 w-full py-4 px-6 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <button className="px-12 py-4 bg-zinc-900 rounded-full">
              Submit
            </button>
          </div>
        </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={50} />
      </div>
    </div>
  );
}

export default Contact;
