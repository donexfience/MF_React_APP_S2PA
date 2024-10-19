import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";
import { Toaster } from "react-hot-toast";
import { Home } from "./components/Home/Home";
import { Subscribing } from "./GlobalEventBus/subscriber";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store, setSharedData } from "@donexfdz/microfrontends-utility";
import { data } from "autoprefixer";
import "./shared/eventBus";
// data sending types
interface sharedData {
  messages: string;
  timestamp: number;
  sender: string;
}

export default function Root({ datafromRoot }) {
  const [messages, setMessages] = useState<string>("");
  const data: sharedData = {
    messages,
    timestamp: Date.now(),
    sender: "App1",
  };
  const sendData = () => {
    console.log("callling sending")
    window.eventBus.emit("SHARED_DATA_EVENT", data);
  };

  // useEffect(() => {
  //   console.log("calling");
  //   const handleDataShare = (event: CustomEvent) => {
  //     const receivedData = event.detail;
  //     console.log("Data received from App 1:", receivedData);
  //   };

  //   // Listen for the custom event
  //   window.addEventListener("app1-data-share", handleDataShare);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener("app1-data-share", handleDataShare);
  //   };
  // }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position="top-center" />
        <input
          type="text"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          className="border p-2 rounded"
          placeholder="enter the message to sends"
        />
        <button onClick={sendData}>click to send</button>
        <Home datafromRoot={datafromRoot} />
      </BrowserRouter>
    </Provider>
  );
}
