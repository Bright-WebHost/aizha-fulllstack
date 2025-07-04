import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";
import { useEffect, useState } from "react";
import  axios  from 'axios';
import { ListIcon } from "../../../icons";
interface CheckoutData {
  id: number;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  city: string;
  checkin: string;
  checkout: string;
  code: string;
  currentDate:string;
}


// interface Order {
//   id: number;
//   user: {
//     image: string;
//     name: string;
//     role: string;
//   };
//   projectName: string;
//   team: {
//     images: string[];
//   };
//   status: string;
//   budget: string;
// }

// Define the table data using the interface
// const tableData: Order[] = [
//   {
//     id: 1,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Lindsey Curtis",
//       role: "Web Designer",
//     },
//     projectName: "Agency Website",
//     team: {
//       images: [
//         "/images/user/user-22.jpg",
//         "/images/user/user-23.jpg",
//         "/images/user/user-24.jpg",
//       ],
//     },
//     budget: "3.9K",
//     status: "Active",
//   },
//   {
//     id: 2,
//     user: {
//       image: "/images/user/user-18.jpg",
//       name: "Kaiya George",
//       role: "Project Manager",
//     },
//     projectName: "Technology",
//     team: {
//       images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
//     },
//     budget: "24.9K",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Zain Geidt",
//       role: "Content Writing",
//     },
//     projectName: "Blog Writing",
//     team: {
//       images: ["/images/user/user-27.jpg"],
//     },
//     budget: "12.7K",
//     status: "Active",
//   },
//   {
//     id: 4,
//     user: {
//       image: "/images/user/user-20.jpg",
//       name: "Abram Schleifer",
//       role: "Digital Marketer",
//     },
//     projectName: "Social Media",
//     team: {
//       images: [
//         "/images/user/user-28.jpg",
//         "/images/user/user-29.jpg",
//         "/images/user/user-30.jpg",
//       ],
//     },
//     budget: "2.8K",
//     status: "Cancel",
//   },
//   {
//     id: 5,
//     user: {
//       image: "/images/user/user-21.jpg",
//       name: "Carla George",
//       role: "Front-end Developer",
//     },
//     projectName: "Website",
//     team: {
//       images: [
//         "/images/user/user-31.jpg",
//         "/images/user/user-32.jpg",
//         "/images/user/user-33.jpg",
//       ],
//     },
//     budget: "4.5K",
//     status: "Active",
//   },
// ];




export default function BasicTableOne() {
  const [checkoutData, setCheckoutData] = useState<CheckoutData[]>([]);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response =await axios.get("http://localhost:7000/api/chekoutview");
        setCheckoutData(response.data.data);
        console.log(response.data);
        
      }catch(error){
         console.error("Error fetching checkout data", error);
        
      }
    }
     fetchData();
     const interval=setInterval(()=>{
      fetchData();
     },5000)
     return()=>clearInterval(interval);
  },[])
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] ">
      <div className="max-w-full overflow-auto ">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
             CurrentDate
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
               First Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
                Last Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
                Email
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
                Phone Number
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
                City
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
                Pincode
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
                Checkin
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
                Checkout
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-900 text-start text-theme-xs dark:text-gray-400"
              >
                  whatsapp
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
        
            {checkoutData.sort((start,end)=>new Date(end.currentDate).getTime()-new Date(start.currentDate).getTime())
            .map((item,index) => (
              <TableRow key={item.id || index}>
                {/* <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={order.user.image}
                        alt={order.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.user.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {order.user.role}
                      </span>
                    </div>
                  </div>
                </TableCell> */}
                <TableCell className="px-4 py-3 text-black text-start text-theme-sm dark:text-gray-400">
                  {item.currentDate.slice(0,10)}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.fname}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.lname}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  
                  
                <a href={`mailto:${item.email}`} className="text-blue-500 underline">
  {item.email}
</a>
                </TableCell>
               
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                <a href={`https://wa.me/${item.phone}`}> {item.phone}</a>
                 
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.city}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.code}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {new Date(item.checkin).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {new Date(item.checkout).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
               <a href={`https://wa.me/${item.phone}`} target="_blank"> <ListIcon/></a> 
                </TableCell>
                {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                    {order.team.images.map((teamImage, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                      >
                        <img
                          width={24}
                          height={24}
                          src={teamImage}
                          alt={`Team member ${index + 1}`}
                          className="w-full size-6"
                        />
                      </div>
                    ))}
                  </div>
                </TableCell> */}
                {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.status === "Active"
                        ? "success"
                        : order.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell> */}
                {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {res.pincode}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
