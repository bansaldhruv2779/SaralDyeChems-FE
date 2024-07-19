let URL = "";
if (process.env.NODE_ENV === "development") {
  URL = "http://localhost:8080/api/v1";
} else {
  URL = "http://localhost:8080/api/v1";
}

export const apiURL = URL;
