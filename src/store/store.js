import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { inqueryApi } from "../api/inqueryApi";
import { pageApi } from "../api/pageApi";
import { categoryApi } from "../api/categoryApi";
import { featureProductApi } from "../api/featureProductApi";
import { bannerApi } from "../api/bannerApi";
import { productApi } from "../api/productApi";
import { footerApi } from "../api/footerApi";
import { ratingApi } from "../api/ratingApi";
import profileReducer from "../feature/profileSlice"

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [inqueryApi.reducerPath]: inqueryApi.reducer,
    [pageApi.reducerPath] : pageApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [featureProductApi.reducerPath] : featureProductApi.reducer,
    [bannerApi.reducerPath] : bannerApi.reducer,
    [productApi.reducerPath] : productApi.reducer,
    [footerApi.reducerPath] : footerApi.reducer,
    [ratingApi.reducerPath] : ratingApi.reducer,
    profile : profileReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      inqueryApi.middleware,
      pageApi.middleware,
      categoryApi.middleware,
      featureProductApi.middleware,
      bannerApi.middleware,
      productApi.middleware,
      footerApi.middleware,
      ratingApi.middleware
      ),
});
