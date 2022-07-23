import axios from "axios";
// import axiosInstance from "../../server/token/rtInterceptor";

class NoteService {
  createNote(at, title) {
    return axios.post(
      "http://localhost:3000/note",
      {
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${at}`,
        },
        withCredentials: true,
      }
    );
  }
  saveNote(at, content, id) {
    return axios.post(
      "http://localhost:3000/note/save",
      { content, id },
      {
        headers: {
          Authorization: `Bearer ${at}`,
        },
        withCredentials: true,
      }
    );
  }
  getNotes(at) {
    return axios.get("http://localhost:3000/note", {
      headers: {
        Authorization: `Bearer ${at}`,
      },
      withCredentials: true,
    });
  }

  getSingleNote(at, id) {
    return axios.get(`http://localhost:3000/note/${id}`, {
      headers: {
        Authorization: `Bearer ${at}`,
      },
    });
  }

  updateNote(at, id, noteContent) {
    return axios.put(
      `http://localhost:3000/note/${id}`,
      { content: noteContent },
      {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      }
    );
  }

  downloadNote(at, id) {
    return axios.get(`http://localhost:3000/note/${id}/file`, {
      headers: {
        Authorization: `Bearer ${at}`,
      },
    });
  }
}

export default new NoteService();
