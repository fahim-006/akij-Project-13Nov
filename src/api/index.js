import axios from 'axios'
const API = `http://localhost:8080/api`; 


export const getAllVehicleNames = () => {
    return axios.get(`${API}/getall/vehiclename`, {
    })
}


export const getAllVehicleDetails = () => {
    return axios.get(`${API}/getall/vehicledetail`, {
    })
}

export const getAllVehicleImages = () => {
    return axios.get(`${API}/getall/vehicleimage`, {
    })
}