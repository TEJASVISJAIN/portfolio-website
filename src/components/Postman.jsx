import React, { useState } from "react";
import axios from "axios";

import noResponse from "../assets/postman_no_response.png";
import noCookies from "../assets/no_cookies.png";
import noTests from "../assets/no_tests.png";

const PostmanComponent = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState(
    "https://66336b1bf7d50bbd9b495359.mockapi.io/random/hello"
  );
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState("");
  const [response, setResponse] = useState(null);
  const initialResponseArea = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let options = [
    "Params",
    "Authorization",
    "Headers",
    "Body",
    "Tests",
    "Settings",
  ];
  let options2 = ["Body", "Cookies", "Headers", "Test Results"];
  const [optionTwoType, setOptionTwoType] = useState(options2[0]);
  const [loader, setLoader] = useState(false);
  const [optionType, setOptionType] = useState(options[0]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        method,
        url,
        headers: headers ? JSON.parse(headers) : {},
        data: body ? JSON.parse(body) : undefined,
      };

      const res = await axios(config);
      setLoader(true);
      // setTimeout(() => {
      setResponse(res.data);
      // }, 2000);
      setLoader(false);
    } catch (err) {
      setResponse(err.response.data);
    }
  };

  let editorType = ["Pretty", "Raw", "Preview", "Visualise"];

  const [EditorType, setEditorType] = useState(editorType[0]);

  return (
    <div
      name="postman"
      className="bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="pb-8 max-w-screen-lg mx-auto py-16 px-4">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Postman
        </p>
        <p className="py-6">
          Put in a GET request API URL and hit send to see the response
        </p>
        <p>{"More actions incoming :) "} </p>
      </div>
      <div
        className="flex w-full h-screen"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="bg-[#242424]"
          style={{ width: "80vw", padding: " 5px 20px" }}
        >
          <div
            style={{ display: "flex" }}
            className="flex flex-row my-3 gap-2 items-center"
          >
            <div className="flex flex-row w-full p-2 px-3 gap-3 items-center outline outline-[#8b8b8b] outline-1 rounded-sm">
              <select
                id="method"
                style={{ color: "#22C55E" }}
                className="font-semibold text-green-500  bg-[#242424]"
                // className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <option value="GET">GET</option>
                {/* <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option> */}
              </select>

              <input
                id="url"
                type="text"
                placeholder="Enter URL or paste text"
                className="bg-[#242424] "
                style={{ width: "100%", color: "#c9c9c9" }}
                // className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <button
              onClick={handleSubmit}
              style={{ height: "42px" }}
              className="px-6 h-full text-white bg-[#0c6bb8] hover:bg-[#134f93] font-semibold rounded-sm"
            >
              Send
            </button>
          </div>
          <div
            class="flex flex-row gap-4 py-2 items-center text-xs select-none"
            style={{ color: "#c9c9c9", flexWrap: "wrap" }}
          >
            {options.map((ele, id) => {
              return (
                <div
                  key={ele} // Add a unique key for each element
                  className={`px-4 py-2 ${
                    ele == optionType
                      ? "border-b-2 pb-1  border-orange-500"
                      : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setOptionType(ele)}
                >
                  {ele}
                </div>
              );
            })}
            {/* <div class="border-b-2 pb-1  border-orange-500">Params</div>
            <div>Authorization</div>
            <div>Headers</div>
            <div>Body</div>
            <div>Tests</div>
            <div>Settings</div> */}
          </div>

          <div>
            <div className="h-8 border-b border-[#3b3b3b] cursor-n-resize"></div>

            {!response && <div style={{ fontSize: "14px" }}>Response</div>}
          </div>

          {response && (
            <div
              class="flex flex-row gap-4 py-2 items-center text-xs"
              style={{ color: "#c9c9c9", flexWrap: "wrap" }}
            >
              {options2.map((ele, id) => {
                return (
                  <div
                    key={ele}
                    className={`px-4 py-2 ${
                      ele == optionTwoType
                        ? "border-b-2 pb-1  border-orange-500"
                        : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setOptionTwoType(ele)}
                  >
                    {ele}
                  </div>
                );
              })}
            </div>
          )}

          <div
            class="flex flex-row my-2 py-0 cursor-pointer bg-[#3b3b3b] bg-opacity-70 rounded-md w-max items-center text-xs overflow-hidden"
            style={{ color: "#c9c9c9" }}
          >
            {response &&
              optionTwoType == "Body" &&
              editorType.map((ele, idx) => (
                <span
                  key={ele} // Add a unique key for each element
                  className={`px-4 py-2 ${
                    ele == EditorType ? "bg-[#4e4e4e]" : ""
                  }`}
                  onClick={() => setEditorType(ele)}
                >
                  {ele}
                </span>
              ))}

            {/* <span class="px-4 py-2 bg-[#4e4e4e]">Pretty</span>
            <span class="px-4 py-2">Raw</span>
            <span class="px-4 py-2">Preview</span>
            <span class="px-4 py-2">Visualise</span> */}
          </div>
          <div
            style={{
              height: "30vh",
              overflow: "scroll",
            }}
          >
            {!response && loader && (
              <div
                className="bg-[#242424] rounded-lg p-4"
                style={{
                  backgroundImage: `url(${noResponse})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0.3",
                }}
              >
                <pre
                  className="text-gray-300 font-mono whitespace-pre-wrap relative"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                    counterReset: "line",
                    opacity: "0.5", // Adjust the opacity as needed
                  }}
                >
                  <div>Sending request...</div>
                  {/* Your code for the pre element */}
                </pre>
              </div>
            )}
            {!response && (
              <div className="bg-[#242424] rounded-lg p-4">
                <pre
                  className="text-gray-300 font-mono whitespace-pre-wrap relative"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                    counterReset: "line",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <code>
                    {initialResponseArea.map((line, index) => (
                      <span
                        key={index}
                        className="block relative pl-8"
                        style={{ counterIncrement: "line" }}
                      >
                        <span
                          className="absolute left-0 text-gray-500 select-none"
                          style={{ width: "2rem", userSelect: "none" }}
                        >
                          {index + 1}
                        </span>{" "}
                      </span>
                    ))}
                  </code> */}
                  <img src={noResponse} />
                </pre>
              </div>
            )}
            {optionTwoType == "Cookies" && (
              <div className="bg-[#242424] rounded-lg p-4">
                <pre
                  className="text-gray-300 font-mono whitespace-pre-wrap relative"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                    counterReset: "line",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <code>
                    {initialResponseArea.map((line, index) => (
                      <span
                        key={index}
                        className="block relative pl-8"
                        style={{ counterIncrement: "line" }}
                      >
                        <span
                          className="absolute left-0 text-gray-500 select-none"
                          style={{ width: "2rem", userSelect: "none" }}
                        >
                          {index + 1}
                        </span>{" "}
                      </span>
                    ))}
                  </code> */}
                  <img src={noCookies} />
                </pre>
              </div>
            )}
            {optionTwoType.toLowerCase() == "test results" && (
              <div className="bg-[#242424] rounded-lg p-4">
                <pre
                  className="text-gray-300 font-mono whitespace-pre-wrap relative"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                    counterReset: "line",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <code>
                    {initialResponseArea.map((line, index) => (
                      <span
                        key={index}
                        className="block relative pl-8"
                        style={{ counterIncrement: "line" }}
                      >
                        <span
                          className="absolute left-0 text-gray-500 select-none"
                          style={{ width: "2rem", userSelect: "none" }}
                        >
                          {index + 1}
                        </span>{" "}
                      </span>
                    ))}
                  </code> */}
                  <img src={noTests} />
                </pre>
              </div>
            )}

            {response &&
              optionTwoType == "Body" &&
              EditorType.toLowerCase() == "pretty" && (
                <div className="bg-[#242424] rounded-lg p-4">
                  <pre
                    className="text-gray-300 font-mono whitespace-pre-wrap relative"
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                      counterReset: "line",
                    }}
                  >
                    <code>
                      {JSON.stringify(response, null, 2)
                        .split("\n")
                        .map((line, index) => (
                          <span
                            key={index}
                            className="block relative pl-8"
                            style={{ counterIncrement: "line" }}
                          >
                            <span
                              className="absolute left-0 text-gray-500 select-none"
                              style={{ width: "2rem", userSelect: "none" }}
                            >
                              {index + 1}
                            </span>
                            {line}
                          </span>
                        ))}
                    </code>
                  </pre>
                </div>
              )}
            {response &&
              optionTwoType == "Body" &&
              EditorType.toLowerCase() == "raw" && (
                <div className="bg-[#242424] rounded-lg p-4">
                  <pre
                    className="text-gray-300 font-mono whitespace-pre-wrap relative"
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                      counterReset: "line",
                    }}
                  >
                    <code>{JSON.stringify(response)}</code>
                  </pre>
                </div>
              )}
          </div>

          {/* old code */}

          {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="body"
          >
            Body
          </label>
          <textarea
            id="body"
            placeholder="Body"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="headers"
          >
            Headers
          </label>
          <textarea
            id="headers"
            placeholder="Headers"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={headers}
            onChange={(e) => setHeaders(e.target.value)}
          />
        </div> */}
        </div>
        {/* this will be the input div for url, method and a submit button */}
      </div>
    </div>
  );
};

export default PostmanComponent;
