const API = "http://13.60.46.66"; // Replace with your actual API base URL

export const getRequest = async (url:string) =>{
	const res = await fetch(`${API}${url}`,{
		next: { revalidate: 60 },
	})
	return res.json();
}


