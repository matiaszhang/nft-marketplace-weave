import lf from "localforage";
import { useEffect, useState } from "react";
import {
  mergeRight,
  uniq,
  pluck,
  compose,
  assoc,
  indexBy,
  prop,
  isNil,
  last,
} from "ramda";
import SignIn from "../components/JoinNow";

import { connectWithWeaveDB } from "./lib/nextid";

const contractTxId = process.env.NEXT_PUBLIC_CONTRACT_TX_ID;
const limit = 10;
let sdk;

export default function HomeNext() {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [posts, setPosts] = useState("");
  const [userMap, setUserMap] = useState({});
  const [next, setNext] = useState(null);
  const [isModal, setIsModal] = useState(false);

  // const toast = useToast();

  useEffect(() => {
    (async () => {
      sdk = await connectWithWeaveDB(contractTxId);
      const _user = (await lf.getItem("user")) || null;
      setUser(_user);
      let umap = {};
      if (!isNil(_user)) {
        const wuser = await sdk.get("users", `${_user.uid}`);
        if (!isNil(wuser)) {
          umap = assoc(`${_user.uid}`, wuser, userMap);
          setUserMap(umap);
        }
      }
      const _posts = await sdk.cget("posts", ["date", "desc"], limit);
      setPosts(pluck("data", _posts));
      if (_posts.length >= limit) setNext(last(_posts));
      setUserMap(
        compose(
          mergeRight(umap),
          indexBy(prop("uid"))
        )(
          await sdk.get("users", [
            "uid",
            "in",
            compose(uniq, pluck("user"), pluck("data"))(_posts),
          ])
        )
      );
    })();
  }, []);

  return (
    <div>
      <SignIn />
    </div>
  );
}
