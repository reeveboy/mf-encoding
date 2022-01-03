import { useState } from "react";
import { arrayToString } from "../utils/arrayToString";
import { decode } from "../utils/decode";
import { encode } from "../utils/encode";

const STATES = {
  encoding: "encoding",
  decoding: "decoding",
  complete: "complete",
};

function Home() {
  const [msg, setMsg] = useState("");
  const [encodedArray, setEncodedArray] = useState(null);
  const [encodedMsg, setEncodedMsg] = useState("");
  const [decodedMsg, setDecodedMsg] = useState("");
  const [state, setState] = useState(STATES.encoding);

  function handleChange(e) {
    setMsg(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const encodedarr = encode(msg);

    setEncodedArray(encodedarr);
    setEncodedMsg(arrayToString(encodedarr));
    setState(STATES.decoding);
  }

  function handleDecode() {
    setDecodedMsg(decode(encodedArray));
    setState(STATES.complete);
  }

  function handleReset() {
    setMsg("");
    setEncodedArray(null);
    setEncodedMsg("");
    setDecodedMsg("");
    setState(STATES.encoding);
  }

  if (state === STATES.decoding) {
    return (
      <div className="w-[600px] h-[400px] bg-sky-100 rounded-lg flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-lg font-light">
            type your encoded message is:
          </span>

          <textarea
            className="px-3 py-2 text-slate-800  border max-w-full border-sky-600 rounded-md "
            placeholder="enter your message..."
            rows={9}
            cols={50}
            value={encodedMsg}
            disabled={true}
          />
          <button
            className="mt-4 px-3 py-2 rounded-lg bg-emerald-500 flex justify-center items-center text-white hover:bg-emerald-700 drop-shadow-lg "
            type="button"
            onClick={handleDecode}>
            decode
          </button>
        </div>
      </div>
    );
  }

  if (state === STATES.complete) {
    return (
      <div className="w-[600px] h-[400px] bg-sky-100 rounded-lg flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-lg font-light">
            type your message after decoding is:
          </span>

          <textarea
            className="px-3 py-2 text-slate-800  border max-w-full border-sky-600 rounded-md "
            rows={9}
            cols={50}
            value={decodedMsg}
            disabled={true}
          />
          <button
            className="mt-4 px-3 py-2 rounded-lg bg-rose-600 flex justify-center items-center text-white hover:bg-rose-800 drop-shadow-lg "
            type="button"
            onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[600px] h-[400px] bg-sky-100 rounded-lg flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="text-lg font-light">type your message here:</span>
        <form
          className="mt-2 flex flex-col justify-center items-center"
          onSubmit={handleSubmit}>
          <textarea
            className="px-3 py-2  text-slate-800  border max-w-full border-sky-600 rounded-md "
            placeholder="enter your message..."
            onChange={handleChange}
            rows={8}
            cols={50}
            maxLength={350}
            value={msg}
          />
          <button
            className="mt-4 px-3 py-2 rounded-lg bg-sky-600 flex justify-center items-center text-white hover:bg-sky-800 drop-shadow-lg "
            type="submit"
            disabled={msg.length === 0 ? true : false}>
            encode
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
