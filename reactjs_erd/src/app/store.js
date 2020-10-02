import { configureStore } from "@reduxjs/toolkit";

import authStateReducer from "features/AuthState/AuthStateSlice";
import employeeReducer from "features/Employee/EmployeeSlice";
import salesOrdersReducer from "features/Sales/SalesOrdersSlice";
import productsReducer from "features/Inventory/ProductsSlice";
import addProductReducer from "features/Inventory/AddProductSlice";

export default configureStore({
  reducer: {
    authState: authStateReducer,
    employee: employeeReducer,
    salesOrders: salesOrdersReducer,
    products: productsReducer,
    addProduct: addProductReducer,
  },
});
