import axios from "axios";
import { api_key, base_url } from "./key";

export default function Signup() {}

export async function FetchLogin(credentials) {
  try {
    const { email, password } = credentials;
    const payload = { email, password };

    const response = await axios.post(`${base_url}/login`, payload, {
      headers: {
        "Api-Key": api_key
      }
    });
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error;
  }
}

export async function FetchSignup(credentials) {
  const { name, email, phone, password, password_confirmation } = credentials;
  const payload = { name, email, phone, password, password_confirmation };

  try {
    const response = await axios.post(`${base_url}/register`, payload, {
      headers: {
        "Api-Key": api_key
      }
    });
    response;
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error.response;
  }
}

export async function FetchVerify(credentials) {
  try {
    const { email, code } = credentials;
    const payload = { email, code };

    const response = await axios.post(`${base_url}/verify`, payload, {
      headers: {
        "Api-Key": api_key
      }
    });
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

export async function FetchCodeResend(credentials) {
  try {
    const response = await axios.post(
      `${base_url}/resend/code`,
      { email: credentials },
      {
        headers: {
          "Api-Key": api_key
        }
      }
    );
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error;
  }
}

export async function FetchProductDetail(id, langauge) {
  // console.log(langauge);
  try {
    const response = await axios.get(`${base_url}/automobiles/${id}`, {
      headers: {
        "Api-Key": api_key,
        "Accept-Language": langauge
      }
    });
    return response;
  } catch (error) {
    // console.error("Error api fetch:", error);
    return error;
  }
}

export async function FetchServices() {
  try {
    const response = await axios.get(`${base_url}/services`, {
      headers: {
        "Api-Key": api_key
      }
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function FetchBannersList() {
  try {
    let url = `${base_url}/banners`;

    const response = await axios.get(url, {
      headers: {
        "api-key": api_key
        // Accept : "application/json",
        // "Content-Type" :"application/json"
      }
    });
    // console.log(response.data.data);
    return response;
  } catch (error) {
    console.error("Error during :", error);
    return error.response;
  }
}

export async function FetchForgetPassword(credentials) {
  const { password, email, code } = credentials;
  const payload = { password, email, code };

  try {
    const response = await axios.post(`${base_url}/forgot/password`, payload, {
      headers: {
        "Api-Key": api_key
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    return error.response;
  }
}

export async function FetchUpdatePassword(
  oldPassword,
  newPassword,
  newPasswordConfirmation,
  token
) {
  // const { old_password, password, password_confirmation } = credentials;
  const payload = {
    old_password: oldPassword,
    password: newPassword,
    password_confirmation: newPasswordConfirmation
  };

  try {
    const response = await axios.post(`${base_url}/change/password`, payload, {
      headers: {
        "Api-Key": api_key,
        authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error.response;
  }
}

export async function FetchUpdateProfile(formData, token) {
  try {
    const response = await axios.post(
      `${base_url}/customer/profile/update`,
      formData,
      {
        headers: {
          "Api-Key": api_key,
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    );

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error.response;
  }
}
export async function FetchSentComment(formData, token) {
  try {
    const response = await axios.post(
      `${base_url}/automobiles/comment`,
      formData,
      {
        headers: {
          "Api-Key": api_key,
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    );

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error.response;
  }
}

export async function FetchParentCategory() {
  try {
    const response = await axios.get(
      `${base_url}/parent/categories`,

      {
        headers: {
          "Api-Key": api_key
        }
      }
    );

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error.response;
  }
}

export async function FetchSocialLinks() {
  try {
    const response = await axios.get(
      `${base_url}/social/links`,

      {
        headers: {
          "Api-Key": api_key
        }
      }
    );
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error.response;
  }
}
export async function FetchFeatureProduct() {
  try {
    const response = await axios.get(
      `${base_url}/features/automobiles`,

      {
        headers: {
          "Api-Key": api_key
        }
      }
    );
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error.response;
  }
}
export async function FetchProducts(category_id = null) {
  try {
    let url = `${base_url}/automobiles`;
    // console.log("this is from fetch data" + category_id);
    if (category_id !== null) {
      url += `?category_id=${category_id}`;
    }
    const response = await axios.get(url, {
      headers: {
        "Api-Key": api_key
      }
    });
    return response;
  } catch (error) {
    console.error("Error during :", error);
    return error.response;
  }
}

// export async function FetchAutomobiles() {
//   console.log(token);
//   try {
//     let url = `${base_url}/automobiles/booking`;

//     const response = await axios.post(url,credentials, {
//       headers: {
//         "Api-Key": api_key,
//         authorization: `Bearer ${token}`,

//       }
//     });
//     return response;
//   } catch (error) {
//     console.error("Error during :", error);
//     return error.response;
//   }
// }

export async function FetchBooking(credentials, token) {
  // console.log(credentials);
  try {
    let url = `${base_url}/automobiles/booking`;

    const response = await axios.post(url, credentials, {
      headers: {
        "Api-Key": api_key,
        authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    console.error("Error during :", error);
    return error.response;
  }
}

export async function FetchInQuery(credentials, token) {
  // console.log(credentials);
  // console.log(token);
  try {
    let url = `${base_url}/automobiles/inquires`;

    const response = await axios.post(url, credentials, {
      headers: {
        "Api-Key": api_key,
        authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    console.error("Error during :", error);
    return error.response;
  }
}

export async function FetchPage(language) {
  // console.log(language);
  try {
    let url = `${base_url}/pages`;

    const response = await axios.get(url, {
      headers: {
        "Api-Key": api_key,
        "Accept-Language": language
      }
    });
    return response.data.data;
  } catch (error) {
    console.error("Error during :", error);
    return error.response;
  }
}

export async function FetchRating(token) {
  try {
    let url = `${base_url}/automobiles/1/rating/detail`;

    const response = await axios.get(url, {
      headers: {
        "Api-Key": api_key,
        authorization: `Bearer ${token}`
      }
    });
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error during :", error);
    return error.response;
  }
}

export async function FetchWriteReview(credentials, token) {
  const { productId, value, text } = credentials;
  const payload = { automobile_id: productId, review: text, rating: value };
  // console.log(payload);
  try {
    let url = `${base_url}/automobiles/rating`;

    const response = await axios.post(url, payload, {
      headers: {
        "Api-Key": api_key,
        authorization: `Bearer ${token}`
      }
    });
    // console.log(response);
    return response.data.status;
  } catch (error) {
    console.error("Error during :", error);
    return error.response;
  }
}

export async function FetchInQueryList(token) {
  // console.log(token);
  try {
    let url = `${base_url}/automobiles/inquires`;

    const response = await axios.get(url, {
      headers: {
        "Api-Key": api_key,
        authorization: `Bearer ${token}`
      }
    });
    // console.log(response);
    return response.data.data;
  } catch (error) {
    console.error("Error during :", error);
    return error.response;
  }
}

export async function FetchBookingList(token) {
  // console.log(token);
  try {
    let url = `${base_url}/automobiles/booking`;

    const response = await axios.get(url, {
      headers: {
        "Api-Key": api_key,
        authorization: `Bearer ${token}`
      }
    });
    // console.log(response);
    return response.data.data;
  } catch (error) {
    console.error("Error during :", error);
    return error.response;
  }
}
