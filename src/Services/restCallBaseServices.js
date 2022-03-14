import axios from 'axios';
import Swal from 'sweetalert2';

export const axiosWithToken = async ( url, data = {}, method = 'GET' ) => {
    const token = localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImlhdCI6MTY0NzI2NjU3NywiZXhwIjoxNjQ3MzUyOTc3fQ.1KV1MMif-UClMAjqJ_8DtuZFbBHTarvd_PA4MkgPK6c';

    var config = {
        method,
        url,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data : JSON.stringify(data)
    };

    let result = false;
    await axios( config )
        .then((response) => {
            result = response.data;
        })
        .catch((error) => {
            let message = '';

            if (error.response) {
                message = error.response.data;
            }
            else if (error.request) {
                message = error.request
            }
            else {
                message = error.message
            }

            Swal.fire( 'Error', message, 'error' );
            throw new Error(error);
        });

    return result;
}

export const axiosWithoutToken = async ( url, data = {}, method = 'GET' ) => {
    var config = {
        method,
        url,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(data)
    };

    let result = false;
    await axios( config )
        .then((response) => {
            result = response.data;
        })
        .catch((error) => {
            let message = '';

            if (error.response) {
                message = error.response.data;
            }
            else if (error.request) {
                message = error.request
            }
            else {
                message = error.message
            }

            Swal.fire( 'Error', message, 'error' );
            throw new Error(error);
        });

    return result;
}