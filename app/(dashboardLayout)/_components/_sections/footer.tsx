import React from "react";
import { ModeToggle } from "../dark-theme-toggle";

function MainFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="sticky bottom-0 w-full">
      <div className="bg-gray-600">
        <div className="m-auto flex flex-wrap justify-between border-t text-sm">
          <div className="px-2 py-1 text-white">
            © Copyright {year}. All Rights Reserved.
          </div>
          <div className="mr-1 flex h-6 flex-row py-0.5 md:flex-auto md:flex-row-reverse">
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
