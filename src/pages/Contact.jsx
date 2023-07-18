import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [info, setInfo] = useState({});

  const fetchInfoApi = async () => {
    try {
      let response = await axios.get("https://arikato111.vercel.app/api/info");
      setInfo(response.data);
    } catch (err) {
      console.err("Axios Error: ", err);
    }
  };
  useEffect(() => {
    fetchInfoApi();
  }, []);

  if (!info?.name)
    return (
      <main>
        <h1 className="fs-2 text-center">Loading ...</h1>
      </main>
    );
  return (
    <main>
      <h1 className="my-3">{info?.name}</h1>
      <div className="fs-4">
        <table className="table table-hover">
          <tbody>
            <tr>
              <td>Education</td>
              <td>
                {info?.education?.faculty}@{info?.education.name}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>{info?.education?.major}</td>
            </tr>
            {!!info.name &&
              Object.keys(info?.contact).map((key, idx) => {
                return (
                  <tr key={idx}>
                    <td>{key}</td>
                    <td>
                      <a target="_blank" href={info?.contact[key]}>
                        {info?.contact[key]}
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
