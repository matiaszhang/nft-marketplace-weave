import {
  connectWithWeaveDB,
  createTempAddress,
  getPubKey,
  isOwner,
  signPayload,
  verifyProof,
} from "./index";
import { BrowserProvider } from "ethers";
import { useState } from "react";
import lf from "localforage";
import { last, assoc, isNil } from "ramda";

//signin is thesame with this i just had to start or
//continue here

export default function SignIn() {
  const [nextID, setNextID] = useState(null);
  const [logging, setLogging] = useState(false);

  const [statusID, setStatusID] = useState("");

  return (
    <div>
      <div
        className="fontSize={10px} flex justify-end cursor-pointer"
        onClick={() => setNextID(null)}
      >
        Cancel
      </div>
      <div>
        To link <span>{nextID.addr}</span>
      </div>

      <div>
        tweet
        <div
          className=""
          as="a"
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            nextID.tweet
          )}`}
        >
          this
        </div>
        <div>via @{nextID.identity} and get the status ID.</div>
      </div>
    </div>
  );
}
