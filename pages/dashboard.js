import Link from "next/link"
import styles from "../styles/Home.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react/cjs/react.development"
import { useEffect } from "react"

export default function FirstPost() {
  const [value, setValue] = useState([])
  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("allEntries")))
  }, [])

  function totalIncoming() {
    const total = value?.filter((i) => i.from)
    let result = 0
    total?.forEach((el) => (result += el.amount))

    return result
  }

  function totalOutgoing() {
    const total = value?.filter((i) => !i.from)
    let result = 0
    total?.forEach((el) => (result += el.amount))

    return result
  }

  return (
    <>
      <h1 className={styles.container}>Dashboard</h1>
      <h1>
        <Link href="/compta/add-entry">
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
          {value?.length > 0 &&
            value.map((el, i) => {
              return (
                <tr key={i} className={i % 2 && "bg-info"}>
                  <th scope="row" className="text-left text-success">
                    {el.from && `+${el.amount}€ ${el.description}`}
                  </th>
                  <th scope="row" className="text-right text-danger">
                    {!el.from && `${el.amount}€ ${el.description}`}
                  </th>
                </tr>
              )
            })}
          <tr>
            <th scope="col" className="text-success">
              Total : {totalIncoming()}€
            </th>
            <th scope="col" className="text-right text-danger">
              Total : {totalOutgoing()}€
            </th>
          </tr>
          <tr>
            <th
              scope="col"
              className={
                totalIncoming() + totalOutgoing() > 0
                  ? "text-success"
                  : "text-danger"
              }
            >
              Resultat : {totalIncoming() + totalOutgoing()}€
            </th>
          </tr>
        </tbody>
      </table>
      <h2>
        <Link href="/">
          <a>Revenir au bienvenue</a>
        </Link>
      </h2>
    </>
  )
}
