import React, { useState } from "react";
import { FaPlay, FaCode, FaCog, FaShieldAlt, FaList, FaWrench, FaCookie, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axios from "axios";

import noResponse from "../assets/postman_no_response.png";
import noCookies from "../assets/no_cookies.png";
import noTests from "../assets/no_tests.png";

const PostmanComponent = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("https://66336b1bf7d50bbd9b495359.mockapi.io/random/hello");
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState("");
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestOptions = [
    { id: "params", label: "Params", icon: <FaList size={14} /> },
    { id: "auth", label: "Authorization", icon: <FaShieldAlt size={14} /> },
    { id: "headers", label: "Headers", icon: <FaList size={14} /> },
    { id: "body", label: "Body", icon: <FaCode size={14} /> },
    { id: "tests", label: "Tests", icon: <FaCheckCircle size={14} /> },
    { id: "settings", label: "Settings", icon: <FaWrench size={14} /> },
  ];

  const responseOptions = [
    { id: "body", label: "Body", icon: <FaCode size={14} /> },
    { id: "cookies", label: "Cookies", icon: <FaCookie size={14} /> },
    { id: "headers", label: "Headers", icon: <FaList size={14} /> },
    { id: "tests", label: "Test Results", icon: <FaCheckCircle size={14} /> },
  ];

  const editorTypes = ["Pretty", "Raw", "Preview", "Visualise"];

  const [activeRequestTab, setActiveRequestTab] = useState("params");
  const [activeResponseTab, setActiveResponseTab] = useState("body");
  const [activeEditorType, setActiveEditorType] = useState("Pretty");

  const getMethodColor = (method) => {
    switch (method) {
      case "GET": return "text-green-400 bg-green-400/20 border-green-400/30";
      case "POST": return "text-blue-400 bg-blue-400/20 border-blue-400/30";
      case "PUT": return "text-yellow-400 bg-yellow-400/20 border-yellow-400/30";
      case "DELETE": return "text-red-400 bg-red-400/20 border-red-400/30";
      default: return "text-gray-400 bg-gray-400/20 border-gray-400/30";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const config = {
        method,
        url,
        headers: headers ? JSON.parse(headers) : {},
        data: body ? JSON.parse(body) : undefined,
      };

      const res = await axios(config);
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data || { error: "Request failed" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderResponseContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Sending request...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <FaTimesCircle className="text-red-400" size={20} />
            <h3 className="text-red-400 font-semibold">Error Response</h3>
          </div>
          <pre className="text-red-300 font-mono text-sm overflow-auto">
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
      );
    }

    if (!response) {
      const placeholderImages = {
        body: noResponse,
        cookies: noCookies,
        tests: noTests,
        headers: noResponse,
      };

      return (
        <div className="flex items-center justify-center h-64">
          <img 
            src={placeholderImages[activeResponseTab]} 
            alt="No response" 
            className="opacity-50 max-w-full max-h-full object-contain"
          />
        </div>
      );
    }

    if (activeResponseTab === "body") {
      return (
        <div className="bg-slate-800/50 rounded-lg p-4">
          <pre className="text-gray-300 font-mono text-sm overflow-auto">
            {activeEditorType === "Pretty" 
              ? JSON.stringify(response, null, 2)
              : JSON.stringify(response)
            }
          </pre>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center h-64">
        <img 
          src={noResponse} 
          alt="No data" 
          className="opacity-50 max-w-full max-h-full object-contain"
        />
      </div>
    );
  };

  return (
    <div
      name="postman"
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 w-full text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              API Testing Tool
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Test APIs and explore responses with this interactive Postman-like interface
          </p>
        </div>

        {/* Main API Testing Interface */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
          {/* Request Section */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center space-x-4 mb-6">
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className={`px-4 py-2 rounded-lg font-semibold border ${getMethodColor(method)} bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400/50`}
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>

              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter API endpoint URL"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
              />

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <FaPlay size={14} />
                <span>{isLoading ? "Sending..." : "Send"}</span>
              </button>
            </div>

            {/* Request Tabs */}
            <div className="flex space-x-1 mb-4">
              {requestOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveRequestTab(option.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeRequestTab === option.id
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {option.icon}
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Response Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Response</h3>
              
              {response && (
                <div className="flex space-x-1">
                  {editorTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveEditorType(type)}
                      className={`px-3 py-1 rounded text-xs font-medium transition-all duration-300 ${
                        activeEditorType === type
                          ? "bg-purple-500/20 text-purple-400 border border-purple-400/30"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Response Tabs */}
            {response && (
              <div className="flex space-x-1 mb-4">
                {responseOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveResponseTab(option.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeResponseTab === option.id
                        ? "bg-purple-500/20 text-purple-400 border border-purple-400/30"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Response Content */}
            <div className="min-h-[300px] max-h-[500px] overflow-auto">
              {renderResponseContent()}
            </div>
          </div>
        </div>

        {/* API Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <FaCheckCircle className="text-green-400" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">GET Requests</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Test GET endpoints to retrieve data from APIs. Perfect for fetching information from REST services.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <FaCode className="text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">JSON Responses</h3>
            </div>
            <p className="text-gray-300 text-sm">
              View formatted JSON responses with syntax highlighting and pretty printing for better readability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FaCog className="text-purple-400" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Error Handling</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Comprehensive error handling with detailed error messages and status codes for debugging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostmanComponent;
