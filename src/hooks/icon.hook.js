import { useState } from "react";

export const useIcon = () => {
   const [iconLable, setIconLable] = useState('');
   const [iconRow, setIconRow] = useState('');
   const iconSet = (prop) => {
      switch (prop) {
         case "high":
            setIconLable("icon-high")
            setIconRow("content-row__icon_red")
            break;
         case "low":
            setIconLable("icon-low")
            setIconRow("content-row__icon_blue")
            break;
         default:
            setIconLable("")
            setIconRow("content-row__icon_with")
      }

   }

   return { iconSet, iconLable, iconRow }
}
