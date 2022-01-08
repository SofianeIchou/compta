import Link from "next/link";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

export default function FirstPost() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("allEntries")));
  }, []);
  console.log(value);
  return (
    <>
      <h1 className={styles.container}>Dashbord</h1>
      <h1>
        <Link href="compta/add-entry">
          <a>Add amount!</a>
        </Link>
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Incoming</th>
            <th scope="col">Outgoing</th>
          </tr>
        </thead>
        <tbody>
          {value.map((el, i) => {
            return (
              <tr key={i}>
                <th scope="row">
                  {el.amount} {el.description}
                </th>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>
        <Link href="/">
          <a>Revenir au bienvenue</a>
        </Link>
      </h2>
    </>
  );
}
