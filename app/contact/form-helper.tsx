"use client";

import { useEffect } from "react";
import {
  ELEMENT_1_ID,
  ELEMENT_2_ID,
  TRIGGER_1_ID,
  TRIGGER_2_ID,
} from "./constants";

export const FormHelper = () => {
  useEffect(() => {
    const trigger1 = document.getElementById(TRIGGER_1_ID);
    const element1 = document.getElementById(ELEMENT_1_ID);
    const trigger2 = document.getElementById(TRIGGER_2_ID);
    const element2 = document.getElementById(ELEMENT_2_ID);

    const onTrigger1Change = (event: any) => {
      if (element1) {
        element1.style.display = event.target.checked ? "block" : "none";
      }
    };
    const onTrigger2Change = (event: any) => {
      if (element2) {
        element2.style.display = event.target.checked ? "block" : "none";
      }
    };

    trigger1?.addEventListener("change", onTrigger1Change);
    trigger2?.addEventListener("change", onTrigger2Change);

    return () => {
      trigger1?.removeEventListener("change", onTrigger1Change);
      trigger2?.removeEventListener("change", onTrigger2Change);
    };
  });

  return null;
};
