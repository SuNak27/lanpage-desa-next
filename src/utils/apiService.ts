import Swal from "sweetalert2";

export class Api {
  async get(url: string) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
      if (!res.ok) {

        // If the response is not ok, throw an error and stop the execution
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        throw new Error("Something went wrong!");
      }
      return await res.json();
    } catch (error: any) {
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Something went wrong!",
      // });

      // throw new Error(error);
      return Promise.reject(error);
    }
  }

  async post(url: string, data: any) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (error) {
      return error;
    }
  }

  async put(url: string, data: any) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (error) {
      return error;
    }
  }

  async delete(url: string) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      return await res.json();
    } catch (error) {
      return error;
    }
  }
}

export const api = new Api();

