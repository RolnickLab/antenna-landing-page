"use client";

import { useEffect } from "react";
import { ELEMENT_1_ID, TRIGGER_1_ID } from "./constants";

export const FormHelper = () => {
  useEffect(() => {
    const trigger1 = document.getElementById(TRIGGER_1_ID);
    const element1 = document.getElementById(ELEMENT_1_ID);

    const onTrigger1Change = (event: any) => {
      if (element1) {
        element1.style.display = event.target.checked ? "block" : "none";
      }
    };

    trigger1?.addEventListener("change", onTrigger1Change);

    return () => {
      trigger1?.removeEventListener("change", onTrigger1Change);
    };
  });

  return null;
};
