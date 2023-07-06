import { BrowserProvider } from "ethers";
import { useState } from "react";
import lf from "localforage";
import { assoc, isNil } from "ramda";
import {
  createTempAddress,
  getPubKey,
  isOwner,
  signPayload,
  verifyProof,
} from "../Blockchain_Service/lib/nextid";

export default function SignIn({
  isModal,
  setIsModal,
  userMap,
  setUserMap,
  setUser,
  sdk,
}) {
  const [nextID, setNextID] = useState(null);
  const [logging, setLogging] = useState(false);
  const [handle, setHandle] = useState("");
  const [statusID, setStatusID] = useState("");

  return !isModal ? null : (
    <div align="center" justify="center" onClick={() => setIsModal(false)}>
      <div
        bg="white"
        w="500px"
        p={5}
        sx={{ borderRadius: "10px" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {!isNil(nextID) ? (
          <>
            <div
              fontSize="10px"
              justify="flex-end"
              onClick={() => setNextID(null)}
              sx={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Cancel
            </div>
            <div fontSize="12px" px={2}>
              <div>
                To link{" "}
                <div as="span" sx={{ textDecoration: "underline" }}>
                  {nextID.addr}
                </div>
              </div>
              <div>
                tweet
                <div
                  sx={{ textDecoration: "underline" }}
                  mx={1}
                  as="a"
                  color="#2265F1"
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    nextID.tweet
                  )}`}
                >
                  this
                </div>
                via @{nextID.identity} and get the status ID.
              </div>
            </div>
            <div className="flex justify-center">
              <input
                className="h-[32px]"
                placeholder="Status ID"
                onChange={(e) => setStatusID(e.target.value)}
                value={statusID}
              />
              <div
                color="white"
                bg="#2265F1"
                justify="center"
                align="center"
                w="150px"
                h="35px"
                sx={{
                  cursor: "pointer",
                  borderRadius: "0 3px 3px 0",
                  ":hover": { opacity: 0.75 },
                }}
                onClick={async () => {
                  setLogging(true);
                  try {
                    if (/^\s*$/.test(statusID)) {
                      alert("specify status ID");
                      setLogging(false);
                      return;
                    }
                    if (await verifyProof(statusID, nextID)) {
                      const signer = await new BrowserProvider(
                        window.ethereum
                      ).getSigner();
                      const { new_user, user_with_cred } =
                        await createTempAddress(nextID.identity, signer, sdk);
                      if (isNil(new_user)) {
                        alert("something went wrong!");
                      } else {
                        await lf.setItem("user", user_with_cred);
                        setUserMap(assoc(nextID.identity, new_user, userMap));
                        setUser(user_with_cred);
                        setLogging(false);
                        setIsModal(false);
                        setNextID(null);
                      }
                    }
                  } catch (e) {}
                  setLogging(false);
                }}
              >
                {logging ? (
                  <div
                    as="i"
                    className="fas fa-circle-notch fa-spin"
                    mr={3}
                    fontSize="16px"
                  />
                ) : null}
                <div fontWeight="bold">Verify</div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <input
              h="35px"
              placeholder="Twitter Handle"
              sx={{ borderRadius: "3px 0 0 3px" }}
              onChange={(e) => setHandle(e.target.value)}
              value={handle}
            />
            <div
              color="white"
              bg="#2265F1"
              justify="center"
              align="center"
              w="150px"
              h="35px"
              sx={{
                cursor: "pointer",
                borderRadius: "0 3px 3px 0",
                ":hover": { opacity: 0.75 },
              }}
              onClick={async () => {
                setLogging(true);
                try {
                  const identity = handle.toLowerCase();
                  if (window.ethereum) {
                    const { public_key, addr, signer } = await getPubKey(
                      identity
                    );
                    if (await isOwner(identity, public_key)) {
                      const { new_user, user_with_cred } =
                        await createTempAddress(identity, signer, sdk);
                      if (isNil(new_user)) {
                        alert("something went wrong!");
                        setLogging(false);
                        return;
                      } else {
                        await lf.setItem("user", user_with_cred);
                        setUserMap(assoc(identity, new_user, userMap));
                        setUser(user_with_cred);
                        setLogging(false);
                        setIsModal(false);
                        return;
                      }
                    }
                    const { signature, uuid, created_at, tweet } =
                      await signPayload(identity, public_key, signer);
                    setNextID({
                      addr,
                      identity,
                      signature,
                      uuid,
                      public_key,
                      created_at,
                      tweet,
                    });
                  }
                } catch (e) {}
                setLogging(false);
              }}
            >
              {logging ? (
                <div
                  as="i"
                  className="fas fa-circle-notch fa-spin"
                  mr={3}
                  fontSize="16px"
                />
              ) : null}
              <div fontWeight="bold">Sign In</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
