import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { ViewHome } from "./Ruta/Home/viewHome";
import { ViewCategory } from "./Ruta/Categories/viewCategory";
import { AppModal } from "../components/appModal/appModal";
import { AppContact } from "../components/appContact/appContact";

export const appRoutes = createBrowserRouter([
    {
        path: "/",
      element: <Layout/>,
      children: [
        {
            path: "/",
            // index: true,
            exact: true,

            element: <ViewHome/>,
          //   loader: rootLoader,
            // children: [
            //   {
            //     path: ":idDrink",
            //     element: <AppModal/>,
            //   }
            // ]
          
        },
        {
            path: "escritorio",
            element: <ViewCategory category="0"/>,
            children: [
              {
                path: ":id",
                element: <AppModal category="0"/>,
              },
            ],
        },
        {
          path: "pie",
          element: <ViewCategory category="1"/>,
          // loader: teamLoader,
          children: [
            {
              path: ":id",
              element: <AppModal category="1"/>,
            },
          ],        
        },
        {
            path: "techo",
            element: <ViewCategory category="2"/>,
            children: [
              {
                path: ":id",
                element: <AppModal category="2"/>,
              },
            ],
        },
        // {
        //     path: "pared",
        //     element: <ViewCategory category="3"/>,
        //     children: [
        //       {
        //         path: ":id",
        //         element: <AppModal category="3"/>,
        //       },
        //     ],
        // },

        {
            path: "contacto",
            element: <AppContact/>,
        },
        {
          path:"cosas",
          element: <ViewCategory category="4"/>,
          children: [
            {
              path: ":id",
              element: <AppModal category="4"/>,
            },
          ]
        }
  
       
      
      ],
    },
  ]);