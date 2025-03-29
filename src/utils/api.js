import axios from 'axios';


export const fetchDataFromApi = async (url, params = {}) => {
    try {
        const { data } = await axios.get("http://localhost:4000" + url);
        return data;
    } catch (error) {
        console.error("API Error:", error);
        return error;
    }
};


export const postDataToApi = async (url, formdata) => {
    console.log(formdata);
    const{res}= await axios.post("http://localhost:4000"+url,formdata)
    return res;
};

export const editData=async(url,updatedData)=>{
    const{res}=await axios.put(`http://localhost:4000${url}`,updatedData)
    return res;
}

export const DelData = async (url) => {
    const response = await axios.delete(`http://localhost:4000${url}`);
    return response.data; // return the correct data
  };
  
