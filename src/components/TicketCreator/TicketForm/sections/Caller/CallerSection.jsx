import React from "react";
import CallerType from "./inputs/CallerType.jsx";
import CallbackNo from "./inputs/CallbackNo.jsx";

export default function CallerSection({ callerType, setCallerType, callerTypeOther, setCallerTypeOther, callbackNo, setCallbackNo, errFor }) {
  return (
    <div className="grid two">
      <CallerType
        callerType={callerType}
        setCallerType={setCallerType}
        callerTypeOther={callerTypeOther}
        setCallerTypeOther={setCallerTypeOther}
        errFor={errFor}
      />
      <CallbackNo callbackNo={callbackNo} setCallbackNo={setCallbackNo} />
    </div>
  );
}