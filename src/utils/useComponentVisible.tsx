import React, { useEffect } from "react";

type TuseComponentVisible = (
  change: (status: boolean) => void,
  ref: React.RefObject<HTMLDivElement>
) => void;

export const useComponentVisible: TuseComponentVisible = (change, ref) => {
  const handleHideSelect = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      change(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      change(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideSelect, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideSelect, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
};
