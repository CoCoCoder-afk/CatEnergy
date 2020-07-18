export class Requests {
  static create(request) {
      return fetch("https://catenergy-bd4c1.firebaseio.com/requests.json", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        request.id = response.name
        return request
        console.log(response);
      })
  }
}
 