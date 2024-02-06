import { useEffect, useState } from "react";
import { getNavbarTitle } from "../../utils";

import { CiBellOn } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [navbarTitle, setNavbarTitle] = useState(
    getNavbarTitle(location.pathname)
  );

  useEffect(() => {
    const updatedPathname = location.pathname;
    setNavbarTitle(getNavbarTitle(updatedPathname));
  }, [location.pathname]);

  return (
    <>
      <div className="p-[20px_40px] sticky top-0 z-20 bg-white flex items-center justify-between">
        <h1 className="text-[22px] font-roboto">{navbarTitle}</h1>
        <div className="flex items-center space-x-[20px]">
          <CiBellOn className="text-[30px]" />
          <LuUser2 className="text-[25px]" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
