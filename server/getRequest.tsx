import  API  from "../hooks";

export const getRequest = async (url: string) => {
    const res = await fetch(`${API}${url}`, {
        next: { revalidate: 60 },
    });
    return res.json()
}

// import API from "../hooks"; 
// export const getRequest = async (url: string) => {
//   if (!API) {
//     throw new Error("API is not defined. Check your .env.local file.");
//   }

//   const res = await fetch(`${API}${url}`, {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
//   }

//   return res.json();
// };
