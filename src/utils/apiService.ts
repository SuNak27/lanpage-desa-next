import Swal from "sweetalert2";

type Query = {
  page?: number;
  limit?: number;
};

export class Api {
  async get(url: string, query?: Query) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}` + new URLSearchParams(query as any));
      if (!res.ok) {
        Swal.fire({
          icon: "error",
          title: "Error : " + res.status,
          text: res.statusText,
        });
      }
      return await res.json();
    } catch (error: any) {
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

