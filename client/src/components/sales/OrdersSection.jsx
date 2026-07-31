import { useState } from "react";
import {
  Search,
  Calendar,
  Download,
  ChevronDown,
  MoreVertical,
} from "lucide-react";

const orders = [
  {
    id: "SO-1025",
    customer: "ABC Super Market",
    date: "12 Jul 2026",
    amount: "$2,450",
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: "SO-1026",
    customer: "Fresh Mart",
    date: "12 Jul 2026",
    amount: "$1,860",
    payment: "Pending",
    status: "Processing",
  },
  {
    id: "SO-1027",
    customer: "Metro Hyper",
    date: "11 Jul 2026",
    amount: "$4,820",
    payment: "Paid",
    status: "Shipped",
  },
  {
    id: "SO-1028",
    customer: "City Wholesale",
    date: "11 Jul 2026",
    amount: "$980",
    payment: "Pending",
    status: "Pending",
  },
  {
    id: "SO-1029",
    customer: "Food Plaza",
    date: "10 Jul 2026",
    amount: "$3,200",
    payment: "Paid",
    status: "Delivered",
  },
];


const statusBadge = (status) => {
  const styles = {
    Delivered: "bg-green-50 text-green-600",
    Shipped: "bg-blue-50 text-blue-600",
    Processing: "bg-orange-50 text-orange-600",
    Pending: "bg-slate-100 text-slate-600",
  };

  return styles[status];
};


const paymentBadge = (status) => {
  return status === "Paid"
    ? "bg-green-50 text-green-600"
    : "bg-red-50 text-red-600";
};



const OrdersSection = () => {

  const [search,setSearch] = useState("");


  const filteredOrders = orders.filter(
    (order)=>
      order.customer
      .toLowerCase()
      .includes(search.toLowerCase()) ||
      order.id
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (

    <section
      className="
      rounded-xl
      border
      border-slate-200
      bg-white
      shadow-sm
      overflow-hidden
      "
    >


      {/* Header */}

      <div
        className="
        flex
        flex-col
        gap-3
        border-b
        border-slate-100
        px-5
        py-4

        lg:flex-row
        lg:items-center
        lg:justify-between
        "
      >

        <div>

          <h2 className="
            text-base
            font-semibold
            text-slate-800
          ">
            Sales Orders
          </h2>


          <p className="
            text-xs
            text-slate-500
            mt-1
          ">
            Manage and track customer orders
          </p>

        </div>



        <button
          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-slate-200
          px-3
          py-2
          text-xs
          font-medium
          text-slate-600
          hover:bg-slate-50
          "
        >

          <Download size={15}/>

          Export

        </button>


      </div>




      {/* Filters */}


      <div
        className="
        bg-slate-50
        border-b
        border-slate-100
        p-4
        "
      >

        <div
          className="
          grid
          gap-3

          sm:grid-cols-2
          lg:grid-cols-5
          "
        >


          {/* Search */}

          <div className="
            relative
            lg:col-span-2
          ">

            <Search
              size={16}
              className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
              "
            />


            <input
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search order..."
              className="
              w-full
              rounded-lg
              border
              border-slate-200
              bg-white
              py-2
              pl-9
              pr-3
              text-xs
              outline-none
              focus:border-green-400
              "
            />

          </div>



          {[
            {
              label:"Date",
              icon:<Calendar size={14}/>
            },
            {
              label:"Status"
            },
            {
              label:"Payment"
            },

          ].map((item)=>(

            <button
              key={item.label}
              className="
              flex
              items-center
              justify-between
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              py-2
              text-xs
              text-slate-600
              "
            >

              <span className="flex items-center gap-2">

                {item.icon}

                {item.label}

              </span>


              <ChevronDown size={14}/>

            </button>


          ))}



        </div>


      </div>






      {/* Table */}


      <div className="overflow-x-auto">


        <table className="w-full text-sm">


          <thead
            className="
            bg-slate-50
            text-xs
            uppercase
            text-slate-500
            "
          >

            <tr>

              {[
                "Order ID",
                "Customer",
                "Date",
                "Amount",
                "Payment",
                "Status",
                ""
              ].map((head)=>(

                <th
                  key={head}
                  className="
                  px-5
                  py-3
                  text-left
                  font-semibold
                  "
                >
                  {head}
                </th>

              ))}

            </tr>

          </thead>



          <tbody>


          {
            filteredOrders.map((order)=>(

              <tr
                key={order.id}
                className="
                border-t
                border-slate-100
                hover:bg-slate-50
                transition
                "
              >


                <td className="
                  px-5
                  py-3
                  font-semibold
                  text-slate-700
                ">
                  {order.id}
                </td>


                <td className="px-5 py-3 text-slate-700">
                  {order.customer}
                </td>


                <td className="
                  px-5
                  py-3
                  text-slate-500
                ">
                  {order.date}
                </td>


                <td className="
                  px-5
                  py-3
                  font-medium
                ">
                  {order.amount}
                </td>



                <td className="px-5 py-3">

                  <span
                    className={`
                    rounded-full
                    px-2.5
                    py-1
                    text-xs
                    font-medium

                    ${paymentBadge(order.payment)}
                    `}
                  >
                    {order.payment}
                  </span>

                </td>



                <td className="px-5 py-3">

                  <span
                    className={`
                    rounded-full
                    px-2.5
                    py-1
                    text-xs
                    font-medium

                    ${statusBadge(order.status)}
                    `}
                  >
                    {order.status}
                  </span>

                </td>



                <td className="
                  px-5
                  py-3
                  text-right
                ">

                  <button
                    className="
                    rounded-lg
                    p-1.5
                    hover:bg-slate-100
                    "
                  >

                    <MoreVertical size={17}/>

                  </button>

                </td>


              </tr>


            ))
          }


          </tbody>


        </table>


      </div>



    </section>

  );
};


export default OrdersSection;