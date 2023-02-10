
import {  useState } from "react";
export default function useFilterData() {
   

   const [filterData, setFilterData] = useState([]);
   const [data, setData] = useState([]);
   const onFiltrFnc = (prop, create,category,status) => {
     
      let cat= prop;
      if (prop == "Support" && category) {
         cat = "Support";
      } else if (prop == "Development" && category) {
         cat = "Development";
      } else if (prop == "Low" || prop == "High" || prop == "Medium") {
         cat = prop;
      } else if (prop == "Responsible" && status) {
         cat = "Responsible";
      } else if (prop == "Not responsible" && status) {
         cat = "Not responsible";
      } else if (prop == create && create) {
         cat = create;
      } 
      const finalCat = filterData.filter(item => item.category == cat);
      const finalPri = filterData.filter(item => item.priority == cat);
      const finalStat = filterData.filter(item => item.status == cat);
      const finalCreate = filterData.filter(item => item.date == cat);
     
      setData(finalPri.length ? finalPri : finalStat.length ? finalStat : finalCreate.length ? finalCreate : finalCat);
   }
   
   return {  onFiltrFnc,setFilterData,filterData, data, setData};
}